import express from 'express'
import TestResult from '../models/TestResult.js'
import User from '../models/User.js'
import authMiddleware from './authMiddleware.js'

const router = express.Router()

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { categories } = req.body
    console.log(categories)
    const user = await User.findByPk(req.userId)

    if (!user) return res.status(404).json({ error: 'Пользователь не найден' })

    let result = await TestResult.findOne({ where: { UserId: user.id } })

    if (result) {
      result.categories = categories
      await result.save()
      res.json({ message: 'Результат обновлен' })
    } else {
      result = await TestResult.create({ categories, UserId: user.id })
      res.status(201).json({ message: 'Результат сохранен' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сохранения' })
  }
})

router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await TestResult.findOne({ where: { UserId: req.userId } })

    if (!result) return res.status(404).json({ error: 'Результаты не найдены' })

    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных' })
  }
})

export default router
