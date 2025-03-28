import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()
const SECRET = process.env.JWT_SECRET

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const hashedPass = await bcrypt.hash(password, 10)
    const user = await User.create({
      username,
      password: hashedPass,
    })
    res.status(201).json({
      message: 'Пользователь создан',
      userId: user.id,
    })
  } catch (error) {
    res.status(500).json({ error: 'Ошибка регистрации' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })

    if (!user) return res.status(401).json({ error: 'Неверный логин' })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(501).json({ error: 'Неверный пароль' })

    const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' })
    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Ошибка входа' })
  }
})

router.delete('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id
    await User.destroy({ where: { id: userId } })
    res.status(200).json({ message: `Пользователь с id: ${userId} удален` })
  } catch (error) {
    console.error('Ошибка удаления', error)
  }
})

export default router
