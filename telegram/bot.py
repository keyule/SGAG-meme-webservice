import logging
import os
import requests
from fpdf import FPDF
from telegram import Update, ForceReply
from telegram.ext import Application, CommandHandler, ContextTypes, filters, MessageHandler
from PIL import Image
from io import BytesIO

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)

# Define command handlers
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Sends a message when the command /start is issued."""
    user = update.effective_user
    await update.message.reply_html(
        rf"Hi {user.mention_html()}! Use /help to see available commands. ",
        reply_markup=ForceReply(selective=True),
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    commands = "/start - Start the bot\n" \
               "/memes - Returns the top 5 memes\n" \
               "/memefile - Get top 5 memes as a PDF\n" \
               "/help - Show this message"
    await update.message.reply_text(commands)

async def get_memes(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Fetches top 5 memes and sends them as images."""
    try:
        response = requests.get('http://app:3000/memes?limit=5')
        memes = response.json()['memes']

        for meme in memes:
            caption = f"{meme['title']}\nUpvotes: {meme['upvotes']}"
            await context.bot.send_photo(chat_id=update.effective_chat.id, photo=meme['url'], caption=caption)
    except Exception as e:
        logger.error(f"Failed to fetch memes: {e}")
        await update.message.reply_text("Sorry, I couldn’t fetch the memes.")

async def download_and_convert_image(image_url, index):
    response = requests.get(image_url)
    content_type = response.headers['content-type']
    extension = content_type.split('/')[-1]

    image = Image.open(BytesIO(response.content))
    if image.mode in ("RGBA", "P"):
        image = image.convert("RGB")

    temp_jpeg_path = f"temp_image_{index}.jpeg"
    image.save(temp_jpeg_path)

    return temp_jpeg_path

async def get_memefile(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    temp_image_paths = []  # Keep track of image paths for cleanup
    try:
        response = requests.get('http://app:3000/memes?limit=5')
        memes = response.json()['memes']

        pdf = FPDF()
        pdf.set_auto_page_break(auto=True, margin=15)

        for index, meme in enumerate(memes):
            title = meme['title']
            upvotes = meme['upvotes']
            image_url = meme['url']
            temp_jpeg_path = await download_and_convert_image(image_url, index)
            temp_image_paths.append(temp_jpeg_path)  # Track for later cleanup

            pdf.add_page()
            pdf.set_font("Arial", size=12)
            pdf.cell(0, 10, f"Title: {title}, Upvotes: {upvotes}", ln=True)
            pdf.image(temp_jpeg_path, x=10, y=30, w=100)  

        # Save PDF to a temporary file and send
        pdf_file_path = "memes.pdf"
        pdf.output(pdf_file_path)
        await context.bot.send_document(chat_id=update.effective_chat.id, document=pdf_file_path)

    except Exception as e:
        await update.message.reply_text(f"Sorry, I couldn’t fetch the memes. Error: {str(e)}")
    finally:
        # Cleanup all temporary image files and the PDF
        for path in temp_image_paths:
            os.remove(path)
        if os.path.exists(pdf_file_path):
            os.remove(pdf_file_path)



def main() -> None:
    """Start the bot."""
    # Create the Application and pass it your bot's token.
    bot_token = os.getenv('BOT_TOKEN')
    if not bot_token:
        print("BOT_TOKEN environment variable not found")
        return
    application = Application.builder().token(bot_token).build()

    # Register command handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("memes", get_memes))
    application.add_handler(CommandHandler("memefile", get_memefile))

    # Run the bot until Ctrl-C is pressed
    application.run_polling()

if __name__ == "__main__":
    main()