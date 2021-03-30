import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRouter from './routes/user.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

// Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// Routes
app.use('/user', userRouter)
app.use('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API of To-List project by Alan Jomar Flores Rodriguez" })
})


// Connection with DB
const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.CONNECTION_URL
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`)))
    .catch(err => console.log(err))