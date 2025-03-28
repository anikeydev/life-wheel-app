import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token)
    if (!token) return res.status(401).json({ error: 'Токен отсутсвует' })

    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Ошибка авторизации' })
  }
}

export default authMiddleware

// authorization?.split(' ')[1]

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxZjMzMDYyMy1lZGU1LTQxZDAtODY1MS05Y2EwMzljYzUyYTYiLCJpYXQiOjE3NDMxNjIyNDMsImV4cCI6MTc0MzE2NTg0M30.T1vcbxJ4hWXqeWWtsn_hz3MLqzWS-K3JILRahdwQz4c
