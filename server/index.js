import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from './db.js'
import authRoutes from './routes/auth.js'
import resultsRoutes from './routes/testResults.js'
import User from './models/User.js'
import TestResult from './models/TestResult.js'

dotenv.config()
const PORT = process.env.PORT || 4444

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/results', resultsRoutes)

app.get('/results/', async (req, res) => {
  const result = await TestResult.findAll()
  res.status(200).json(result)
})

sequelize
  .sync({ alter: true })
  .then(() => console.log('База данных синхронизирована'))

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`)
})
