import express from 'express'
import User from '../models/User.js'
import TestResult from '../models/TestResult.js'

const router = express.Router()

router.get('/users', async (req, res) => {
  const allUsers = await User.findAll()
  res.status(200).json({
    users: allUsers,
  })
})

router.get('/results', async (req, res) => {
  const allResults = await TestResult.findAll()
  res.status(200).json({
    results: allResults,
  })
})

export default router
