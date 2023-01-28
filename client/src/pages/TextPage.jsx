import { useState } from "react";
import bot from '../assets/bot.svg'
import user from '../assets/user.svg'
import send from '../assets/send.svg'

const testText = `Boxes
I’ve been accused of out of the box thinking
But I know that is not the case
I just exist in a different box from you
And inside I’m running out of space

Upon exploration my box seems to be a circle 
As I explore my thoughts run round
Inevitably they run into the same obstacles
That always causes them to run aground

My box is unusual, and that is a gift
But I still can’t help wishing for more
For differing from others will always be fun
But differing the same way is a bore
`

const TextPage = () => {
    const [innerText, setInnerText] = useState('')
  
    
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

    const generateUniqueID = () => {
      const timeStamp = Date.now()
      const randomNumber = Math.random()
      const hexString = randomNumber.toString(16) 

      return `id-${timeStamp}-${hexString}`
    }

    return (
        <div className="chat">
            <form>
                <textarea name="prompt" rows="1" cols="1" placeholder="What are you asking for?" />
                {innerText}
                <button  onClick={(e) => typeText(e, testText)}>
                    <img src={send} alt='Send'></img>
                </button>
            </form>
        </div>
    )
}

export default TextPage