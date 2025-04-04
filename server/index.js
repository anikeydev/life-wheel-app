import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from './db.js'
import authRoutes from './routes/auth.js'
import resultsRoutes from './routes/testResults.js'
import adminRoutes from './routes/admin.js'

dotenv.config()
const PORT = process.env.PORT || 4444

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/results', resultsRoutes)
app.use('/api/admin', adminRoutes)

sequelize
  .sync({ alter: true })
  .then(() => console.log('База данных синхронизирована'))

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`)
})
