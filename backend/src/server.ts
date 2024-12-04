import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import router from './router';
import connectDB from './config/db'
import { corsConfig } from './config/cors';

dotenv.config(); // Mueve esto ANTES de connectDB()
connectDB()
const app = express()

//cors
app.use(cors(corsConfig))

//leer datos de formularios
app.use(express.json())
app.use('/', router)

export default app;