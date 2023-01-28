import { useState, useEffect } from "react";
import { Loader } from './'
import bot from '../assets/bot.svg'
import user from '../assets/user.svg'

const ChatStripe = ( { isAi, value, uniqueId, isLoading } ) => {
    const [innerText, setInnerText] = useState('')
    
    const typeText = (text) => {
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

    useEffect(() => {
        typeText(value)
      }, []);
    
    return (
        <div className={`wrapper ${isAi && 'ai'}`}>
            <div className="chatStripe">
                <div className="profile">
                    <img 
                        src={isAi ? bot : user} 
                        alt={isAi ? 'bot': 'user'}
                    />
                </div>
                <div className="message" id={uniqueId}>{isLoading ? <Loader /> : innerText}</div>
            </div>
        </div>
    )
}

export default ChatStripe