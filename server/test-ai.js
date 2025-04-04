import OpenAI from 'openai'
import { config } from 'dotenv'

config()

const API_KEY = process.env.AI_API_KEY

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: API_KEY,
})

const userData = {
  career: 3,
  health: 7,
  // money: 5,
  // family: 3,
}

export const getRecomendationAi = async (userData) => {
  console.log('start fetch...')

  const promt = `Ты — коуч по тайм-менеджменту. Проанализируй оценки "Колеса баланса" и дай ответ в JSON-формате. Максимальный бал 10. У каждой категории добавь по 1-2 задачи которой можно выполнить прямо сейчас добавь их в tasks:
   используй шаблон JSON - {
    "weak_areas": [{ "category": "...", "score": "...", "advice": "...", tasks: ["...", "..."]}],
    "growth_areas": [...],
    "strong_areas": [...],
    "summary": "..."
  }
  
  Данные пользователя: ${JSON.stringify(userData)}
  Отвечай на русском
  `

  const completion = await openai.chat.completions.create({
    model: 'deepseek/deepseek-r1-zero:free',
    messages: [
      {
        role: 'user',
        content: promt,
      },
    ],
    response_format: {
      type: 'json_object',
    },
  })

  try {
    const jsonMatch = completion.choices[0].message.content.match(
      /```json\n([\s\S]*?)\n```/
    )
    if (jsonMatch) {
      const jsonString = jsonMatch[1]
      try {
        const jsonData = JSON.parse(jsonString)
        console.log(jsonData)
        return jsonData
      } catch (e) {
        console.error('Ошибка парсинга JSON:', e)
      }
    }
  } catch (e) {
    console.error('Ошибка', e)
    return null
  }
}
