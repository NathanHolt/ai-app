import { useState } from "react";
import { ChatStripe } from "../components";
import send from '../assets/send.svg'

const testText = `Boxes
I’ve been accused of out of the box thinking
But I know that is not the case
I just exist in a different box from you
And inside I’m running out of space
`

const TextPage = () => {
  const [answers, setAnswers] = useState([])
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const generateUniqueID = () => {
    const timeStamp = Date.now()
    const randomNumber = Math.random()
    const hexString = randomNumber.toString(16) 

    return `id-${timeStamp}-${hexString}`
  }

  const displayAnswers = (e) => {
    e.preventDefault()
    if (!text || isLoading) return

    const idOne = generateUniqueID()
    const idTwo = generateUniqueID()
    setAnswers([...answers, <ChatStripe key={idOne} isAi={false} value={text} uniqueId={idOne} />])

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setAnswers([...answers, <ChatStripe key={idOne} isAi={false} value={text} uniqueId={idOne} />, <ChatStripe key={idTwo} isAi={true} value={testText} uniqueId={idTwo} />])
    }, 3000)
    setText('')
  }

  return (
      <div className="chat">
          
          {answers && answers.map((answer) => answer)}
          {isLoading && <ChatStripe isLoading={isLoading} isAi={true} value=''  />}
          
          <form>
              <textarea name="prompt" rows="1" cols="1" placeholder="What are you asking for?" value={text} onChange={(e) => setText(e.target.value)} />
              <button onClick={(e) => displayAnswers(e)}>
                  <img src={send} alt='Send' />
              </button>
          </form>
      </div>
  )
}

export default TextPage

