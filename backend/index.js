import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000;

function connectDB() {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
}
connectDB();

// database connection
mongoose.set('strictQuery', false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (err) {
        console.log("MongoDB connection failed")
    }
}


// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute)

app.listen(port, () => {
    connect()
    console.log('Server is running on port', port)
}) 
