import express from 'express'
import TestResult from '../models/TestResult.js'
import User from '../models/User.js'
import authMiddleware from './authMiddleware.js'
import { computeTest } from '../utils.js'
import { v4 } from 'uuid'

const router = express.Router()

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { categories } = req.body
    const user = await User.findByPk(req.userId)

    if (!user) return res.status(404).json({ error: 'Пользователь не найден' })

    let result = await TestResult.findOne({ where: { UserId: user.id } })

    if (result) {
      result.categories = categories
      result.publicId = v4()
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

    const resultTest = computeTest(result.categories)

    res.json(resultTest)
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных' })
  }
})

router.post('/public/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId)
    if (!user) return res.status(404).json({ error: 'Пользователь не найден' })
    const results = await TestResult.findOne({ where: { UserId: user.id } })
    if (!results.publicId) {
      results.publicId = v4()
      results.save()
    }
    res.status(200).json({ publicId: results.publicId })
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных' })
  }
})

router.get('/public/:id', async (req, res) => {
  try {
    const result = await TestResult.findOne({
      where: { publicId: req.params.id },
    })

    const { username } = await User.findByPk(result.UserId)

    if (!result) return res.status(404).json({ error: 'Ссылка не существует' })

    res.json({
      username,
      result: computeTest(result.categories),
    })
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных' })
  }
})

export default router
