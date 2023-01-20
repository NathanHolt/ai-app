import { useState } from "react";
import './App.css';
import bot from './assets/bot.svg'
import user from './assets/user.svg'
import send from './assets/send.svg'

function App() {
  const [load, setLoad] = useState('')
  const [innerText, setInnerText] = useState('')

  const loader = (e) => {
    e.preventDefault()
    let temp = ''
    setLoad('')

    let loadInternal = setInterval(() => {
      setLoad(() => {
        if (load === '....') {
          setLoad('')
          return loadInternal
        }
        else {
          return load + '.'
        }
      })

    }, 300)
  }

  
  const typeText = (e, text) => {
    e.preventDefault()
    setInnerText('')
    let newText = ''
    let index = 0

    const interval = setInterval(() => {
      setInnerText(() => {
        if (index === text.length) {
          setInnerText(text);
          return clearInterval(interval);
        }
        newText = newText + text.charAt(index)
        console.log(newText)
        index++;
        return (newText + text.charAt(index));
      });
    }, 40);
  }
  
  return (
    <div className="App">
      <div className="chat">
        <form>
          <textarea name="prompt" rows="1" cols="1" placeholder="What are you asking for?" />
          <button  onClick={(e) => typeText(e, "this is a test that I am doing Fucking fuck fuck this is how testing is done hell yeah babyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")}>
            <img src={send} alt='Send'></img>
          </button>
        </form>
        <div id="test">
          {innerText}
        </div>
      </div>
    </div>
  );
}

export default App;
