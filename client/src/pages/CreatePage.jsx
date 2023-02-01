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

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.prompt && form.photo) {
            setLoading(true)

            try {
                const response = await fetch('http://localhost:5000/api/v1/post', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(form)
                })

                await response.json()
                nav('/search')
            } catch (err) {
                console.log(err)
                alert(err)
            } finally {
                setLoading(false)
            }
        }
    }
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    const handleSurpriseMe = () => {  
        const randoPrompt = getRandomPrompt(form.prompt)
        setForm({ ...form, prompt: randoPrompt })
    }

    const generateImg = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true)
                const response = await fetch('http://localhost:5000/api/v1/dalle/image', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ prompt: form.prompt })
                })

                const data = await response.json()

                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
            } catch (err) {
                alert(err)
            } finally {
                setGeneratingImg(false)
            }
        } else {
            alert('Please enter a prompt')
        }
    }

    return (
        <div className="page">
            <div>
                <h1>Image Creator</h1>
                <p>Create spectacular images with the DALL-E AI and share them with others</p>
            </div>

            <form className="img-form" onSubmit={handleSubmit()}>
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

                    <div className="ai-div">
                        {generatingImg ? (
                            <div className="load-div">
                                <Loader />
                            </div>
                        ) : form.photo ? (
                            <img
                                className="ai-img" 
                                src={form.photo}
                                alt={form.prompt}
                            />
                        ) : (
                            <img 
                            className="ai-img" 
                                src={preview}
                                alt='preview'
                            />
                        )}
                    </div>
                </div>

                <div>
                    <button type="button" onClick={generateImg}>
                        {generatingImg ? 'Generating...' : 'Generate'}
                    </button>
                </div>

                <div>
                    <p>Once you have created your image, you can share it with others</p>
                    <button type="submit">
                        {loading ? 'Sharing...' : 'Share with the community'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage