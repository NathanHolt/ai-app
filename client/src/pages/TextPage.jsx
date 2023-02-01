import { useState } from "react";
import { ChatStripe } from "../components";
import send from '../assets/send.svg'

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

  const displayAnswers = async (e) => {
    e.preventDefault()
    if (!text || isLoading) return

    const idOne = generateUniqueID()
    const idTwo = generateUniqueID()
    let data = ""
    setAnswers([...answers, <ChatStripe key={idOne} isAi={false} value={text} uniqueId={idOne} />])

    setIsLoading(true)
    setText('')

    const response = await fetch('http://localhost:5000/api/v1/dalle/text', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: text,
      })
    })

    if (response.ok) {
      data = await response.json()
      data = data.bot.trim()
    } else {
      const err = await response.text()
      console.log(err)
      data = "Something went wrong"
    }

    setTimeout(() => {
      setIsLoading(false)
      setAnswers([...answers, <ChatStripe key={idOne} isAi={false} value={text} uniqueId={idOne} />, <ChatStripe key={idTwo} isAi={true} value={data} uniqueId={idTwo} />])
    }, 1500)
  }

  return (
      <div className="chat">
          
          {answers && answers.map((answer) => answer)}
          {isLoading && <ChatStripe isLoading={isLoading} isAi={true} value=''  />}
          
          <form>
              <textarea name="prompt" rows="1" cols="1" placeholder="   What are you asking for?" value={text} onChange={(e) => setText(e.target.value)} />
              <button className="send" onClick={(e) => displayAnswers(e)}>
                  <img src={send} alt='Send' />
              </button>
          </form>
      </div>
  )
}

export default TextPage

