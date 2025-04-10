import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'



dotenv.config()
const app = express()
const port = process.env.PORT || 8000;

function connectDB() {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
}
connectDB();

// for testing 
app.get("/", (req, res) => {
    res.send("api is working");
})


// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.listen(port, () => {
    console.log('Server is running on port', port)
}) 
