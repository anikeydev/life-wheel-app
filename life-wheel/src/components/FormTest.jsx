import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAnswer } from '../features/answersSlice'

export default function FormTest({ category }) {
  const [answerOne, setAnswerOne] = useState('1')
  const [answerTwo, setAnswerTwo] = useState('1')
  const [answerThree, setAnswerThree] = useState('1')

  const resAnswers = useSelector((state) => state.answers)
  console.log(resAnswers)
  const dispath = useDispatch()
  const current = useSelector((state) => state.current)
  console.log(current)

  const answers = [answerOne, answerTwo, answerThree]
  const setAnswers = [setAnswerOne, setAnswerTwo, setAnswerThree]
  const { title, asks, name } = category

  function handlerClick(event) {
    event.preventDefault()
    const result = {}
    result[name] = answers
    dispath(addAnswer(result))
  }
  return (
    <form className="d-flex flex-column align-items-center">
      <h2 className="mb-5">{title}</h2>
      {asks.map((ask, i) => {
        return (
          <div key={i} className="w-100 text-center">
            <label htmlFor="customRange3" className="form-label">
              {ask}
            </label>
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>{answers[i]}</span>
                <span>10</span>
              </div>
              <input
                onChange={(event) => setAnswers[i](event.target.value)}
                defaultValue="1"
                type="range"
                className="form-range"
                min="1"
                max="10"
                step="1"
                id="customRange3"
              />
            </div>
          </div>
        )
      })}
      <button className="btn btn-outline-primary btn-lg" onClick={handlerClick}>
        Далее
      </button>
    </form>
  )
}
