import FileSaver from 'file-saver'
import { surpriseMePrompts } from '../data'

export const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if (randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}