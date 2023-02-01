import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(5000, () => console.log('listening on port http://localhost:5000'))
    } catch (err) {
        console.log(err)   
    }
}

startServer()