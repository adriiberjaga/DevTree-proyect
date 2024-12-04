import express from 'express'
import dotenv from 'dotenv';
import router from './router';
import connectDB from './config/db'

dotenv.config(); // Mueve esto ANTES de connectDB()
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express()

connectDB()

app.use(express.json())
app.use('/', router)

export default app;