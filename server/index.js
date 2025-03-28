import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from './db.js'
import authRoutes from './routes/auth.js'
import User from './models/User.js'

dotenv.config()
const PORT = process.env.PORT || 4444

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  const users = await User.findAll()
  console.log(users)
  res.status(200).json({
    message: 'Сервер работает',
  })
})

app.use('/api/auth', authRoutes)

sequelize.sync().then(() => console.log('База данных синхронизирована'))

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`)
})
