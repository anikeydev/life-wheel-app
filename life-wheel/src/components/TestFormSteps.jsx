import { testCategories, testAsks } from '../data'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep, setAnswer } from '../slices/testSlice'

export default function TestFromSteps({ onSubmit }) {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.test.step)
  const category = testCategories[step]
  const { register, handleSubmit } = useForm()

  const onNext = (data) => {
    dispatch(setAnswer({ category: category.name, score: data }))
    if (step < testCategories.length - 1) {
      dispatch(nextStep())
    } else {
      onSubmit()
    }
  }

  return (
    <div key={step}>
      <form onSubmit={handleSubmit(onNext)}>
        <h3>{category.title}</h3>
        {testAsks[category.name].map((ask, index) => {
          return (
            <div key={index}>
              <label htmlFor={`ask${index}`} className="form-label">
                {ask}
              </label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="10"
                step="1"
                defaultValue="5"
                id={`ask${index}`}
                {...register(`ask${index}`)}
              />
            </div>
          )
        })}
        <div>
          {step > 0 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(prevStep())}>
              Назад
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            {step === testCategories.length - 1 ? 'Завершить' : 'Далее'}
          </button>
        </div>
      </form>
    </div>
  )
}
