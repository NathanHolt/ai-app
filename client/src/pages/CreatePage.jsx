import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { preview, previewState } from "../assets"
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

    const handleSubmit = () => {
        console.log('Submit')
    }
    
    const handleChange = (e) => {
        console.log('change')
    }
    
    const handleSurpriseMe = () => {  
        console.log('change')
    }

    return (
        <div className="page">
            <div>
                <h1>Create</h1>
                <p>Create spectacular images with the DALL-E AI and share them with others</p>
            </div>

            <form onSubmit={handleSubmit()}>
                <div>
                    <FormField 
                        labelName='Your name'
                        type='text'
                        name='name'
                        placeholder='Johnny Doe'
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField 
                        labelName='Prompt'
                        type='text'
                        name='prompt'
                        placeholder='A Man falling in Love with his Computer, digital art'
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                    <div>
                        {form.photo ? (
                            <img 
                                src={form.photo}
                                alt={form.prompt}
                            />
                        ) : (
                            <img 
                                src={preview}
                                alt='preview'
                            />
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePage