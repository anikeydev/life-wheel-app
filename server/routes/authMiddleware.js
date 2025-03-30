import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return res.status(401).json({ error: 'Токен отсутсвует' })

    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Ошибка авторизации' })
  }
}

export default authMiddleware
