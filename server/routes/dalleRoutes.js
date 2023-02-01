import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config()

const router = express.Router()

const config = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
})

const openai = new OpenAIApi(config)

router.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from the ai'
    })
}) 

router.post('/image', async (req, res) => {
    try {
        const { prompt } = req.body

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })

        const image = aiResponse.data.data[0].b64_json

        res.status(200).json({ photo: image })
    } catch (err) {
        console.log(err)
        res.status(500).send(error?.response.data.error.message)
    }
})

router.post('/text', async (req, res) => {
    try {
        const prompt = req.body.prompt

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
          });

          res.status(200).send({
            bot: response.data.choices[0].text
          })

    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
})

export default router