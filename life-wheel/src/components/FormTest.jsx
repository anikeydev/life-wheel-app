import FormRadiosInput from './FormRadiosInput'
import { useRef } from 'react'

export default function FormTest(props) {
  const inputRef = useRef(null)
  const category = {
    title: 'Карьера 💼',
    name: 'career',
    asks: [
      'Насколько вы удовлетворены своей текущей работой или бизнесом? 🤔',
      'Насколько ваша деятельность соответствует вашим целям и ценностям? 🎯',
      'Чувствуете ли вы, что профессионально развиваетесь и движетесь вперед? 📈',
    ],
  }
  const { title, asks, name } = category

  function handler(event) {
    event.preventDefault()
    console.log(inputRef)
  }

  return (
    <form className="d-flex flex-column align-items-center">
      <h2 className="mb-5">{title}</h2>
      <div className="text-center mb-3">
        {asks.map((ask, index) => {
          const count = index + 1
          return (
            <div className="mb-4">
              <p className="mb-2">
                <strong>{count}. </strong>
                {ask}
              </p>
              <FormRadiosInput
                inputRef={inputRef}
                name={name}
                askId={index + 1}
              />
            </div>
          )
        })}
      </div>
      <button className="btn btn-outline-primary btn-lg" onClick={handler}>
        Далее
      </button>
    </form>
  )
}
