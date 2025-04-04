import express from 'express'
import TestResult from '../models/TestResult.js'
import User from '../models/User.js'
import authMiddleware from './authMiddleware.js'
import { computeTest } from '../utils.js'
import { v4 } from 'uuid'
import { getRecomendationAi } from '../test-ai.js'

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
    const test = await TestResult.findOne({ where: { UserId: req.userId } })

    if (!test) return res.status(404).json({ error: 'Результаты не найдены' })

    const testResult = computeTest(test.categories)
    // const recomendation = await getRecomendationAi(testResult)

    // const result = {
    //   test: testResult,
    //   recomendation,
    // }

    // console.log(result)

    res.json(testResult)
  } catch (err) {
    res.status(500).json({ error: 'Ошибка получения данных', e: err })
  }
})

router.get('/recomendations', authMiddleware, async (req, res) => {
  try {
    const test = await TestResult.findOne({
      where: { UserId: req.userId },
    })
    if (test.recomendations.keys !== undefined || null) {
      res.status(200).json({
        recomendations: test.recomendations,
      })
    } else {
      const recomendations = await getRecomendationAi(
        computeTest(test.categories)
      )
      res.status(200).json({
        recomendations,
      })
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных ' })
  }
})

router.post('/recomendations', authMiddleware, async (req, res) => {
  try {
    const recomendations = req.body
    console.log(recomendations)
    const test = await TestResult.findOne({
      where: { UserId: req.userId },
    })
    if (!recomendations) {
      test.recomendations = ''
    } else {
      test.recomendations = recomendations
    }
    await test.save()
    res.status(200).json({
      recomendations: test.recomendations,
    })
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных ' })
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
