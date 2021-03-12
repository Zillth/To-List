import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// Middlewares
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

// Routes
app.use('/', (req, res) => {
    res.status(200).json({message: "Welcome to the API of To-List project by Alan Jomar Flores Rodriguez"})
})

// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})