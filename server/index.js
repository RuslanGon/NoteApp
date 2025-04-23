import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import startServer from './db/db.js'
import noteRouter from './routes/note.js'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)




startServer(app)

