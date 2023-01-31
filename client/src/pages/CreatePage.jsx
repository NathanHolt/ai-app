import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { previewState } from "../assets"
import { getRandomPrompt } from "../utils"
import { FormField, Loader } from "../components"

const CreatePage = () => {
    const nav = useNavigate()
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    })
    const [generatingImg, setGeneratingImg] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <div>CreatePage</div>
    )
}

export default CreatePage