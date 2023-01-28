import { useState } from "react";
import { ChatStripe } from "../components";
import send from '../assets/send.svg'


const TextPage = () => {
  const [answers, setAnswers] = useState([])
  const [text, setText] = useState('')
  const [isAi, setIsAi] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const generateUniqueID = () => {
    const timeStamp = Date.now()
    const randomNumber = Math.random()
    const hexString = randomNumber.toString(16) 

    return `id-${timeStamp}-${hexString}`
  }

  const displayAnswers = (e) => {
    e.preventDefault()

    if (!text) return
    
    setIsLoading(true)
    const id = generateUniqueID()
    //fetch answer here
    

    setIsLoading(false)

    setAnswers([...answers, <ChatStripe key={id} isAi={isAi} value={text} uniqueId={id} />])
    setIsAi(!isAi)
  }

  return (
      <div className="chat">
          
          {answers && answers.map((answer) => answer)}
          {isLoading && <ChatStripe isLoading={isLoading} isAi={isAi}  />}
          
          <form>
              <textarea name="prompt" rows="1" cols="1" placeholder="What are you asking for?" onChange={(e) => setText(e.target.value)} />
              <button  onClick={(e) => displayAnswers(e)}>
                  <img src={send} alt='Send' />
              </button>
          </form>
      </div>
  )
}

export default TextPage



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
