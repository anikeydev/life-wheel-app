export function computeTest(categories) {
  const result = {}

  const keys = Object.keys(categories)

  keys.forEach((key) => {
    const arrResult = Object.values(categories[key])
    let resultScore = 0
    arrResult.forEach((res) => (resultScore += Number(res)))
    result[key] = (resultScore / 3).toFixed()
  })

  return result
}
