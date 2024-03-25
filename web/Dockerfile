FROM node:alpine
# Create app directory 
WORKDIR /app 

# Install app dependencies 
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./ 
RUN npm install 

# Bundle app source 
COPY . . 

# Expose the port that the express are running 
EXPOSE 5173 
CMD [ "npm","run", "dev" ]