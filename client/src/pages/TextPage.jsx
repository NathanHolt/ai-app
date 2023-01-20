import { useState } from "react";
import bot from './assets/bot.svg'
import user from './assets/user.svg'
import send from '../assets/send.svg'

const TextPage = () => {

    const [load, setLoad] = useState('')
    const [innerText, setInnerText] = useState('')
  
    const loader = (e) => {
      e.preventDefault()
      let temp = ''
      setLoad('')
  
      let loadInternal = setInterval(() => {
        setLoad(() => {
          if (temp === '....') {
            // setLoad('')
            return ''
          }
          else {
            temp += '.'
            console.log(temp)
            return temp
          }
        })
  
      }, 1000)
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
          index++;
          return (newText + text.charAt(index));
        });
      }, 40);
    }

    return (
        <div className="chat">
            <form>
                <textarea name="prompt" rows="1" cols="1" placeholder="What are you asking for?" />
                <button  onClick={(e) => loader(e)}>
                    <img src={send} alt='Send'></img>
                </button>
            </form>

            <div id="test">
            {load}
            </div>
        </div>
    )
}

export default TextPage