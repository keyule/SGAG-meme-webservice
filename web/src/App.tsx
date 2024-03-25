import {MeMeComponent} from './components/MeMeComponent';
import {Banner} from './components/banner';
import './App.css'

function App() {
 
  return (
    <main className="flex flex-col bg-black p-5"> 
      <div className ="mt-20 mb-10 flex flex-col justify-center items-center">
        <Banner/>
        <div>
          <p className="text-5xl text-white my-10 text-center">Top 20 Memes for the Day</p>
        </div>
      </div>
      <MeMeComponent/>
    </main>
  )
}

export default App
