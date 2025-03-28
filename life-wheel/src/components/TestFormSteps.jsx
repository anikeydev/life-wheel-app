import { testCategories, testAsks } from '../data'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep, setAnswer } from '../slices/testSlice'
import TestFormAsk from './TestFormAsk'

export default function TestFromSteps({ onSubmit }) {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.test.step)
  const category = testCategories[step]
  const { register, handleSubmit, reset } = useForm()

  const onNext = (data) => {
    dispatch(setAnswer({ category: category.name, score: data }))
    if (step < testCategories.length - 1) {
      dispatch(nextStep())
    } else {
      onSubmit()
    }
    reset()
  }

  return (
    <div key={step}>
      <form
        onSubmit={handleSubmit(onNext)}
        className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="mb-5">{category.title}</h3>
        {testAsks[category.name].map((ask, index) => {
          return (
            <TestFormAsk
              key={index}
              index={index}
              ask={ask}
              register={register}
            />
          )
        })}
        <div className="d-flex gap-3">
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
