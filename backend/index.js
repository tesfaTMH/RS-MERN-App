import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/connectDB.js'

dotenv.config()

connectDB()
const app = express()
const PORT = 3000


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})