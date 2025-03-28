import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4444

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server OK`)
})
