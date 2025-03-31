import OpenAI from 'openai'

const API_KEY =
  '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'

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: API_KEY,
})

const userData = {
  career: 3,
  health: 7,
  money: 5,
  family: 3,
}

const getResponse = async (userData) => {
  console.log('start fetch...')

  const promt = `Ты — коуч по тайм-менеджменту. Проанализируй оценки "Колеса баланса" и дай краткие рекомендации в JSON-формате:
  {
    "weak_areas": [{ "category": "...", "score": N, "advice": "..." }],
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
  })

  try {
    return completion.choices[0].message.reasoning
  } catch (e) {
    console.error('Ошибка парсинга JSON:', e)
    return null
  }
}

const response = await getResponse(userData)

console.log(response)
