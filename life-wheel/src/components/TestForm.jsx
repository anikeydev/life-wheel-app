import { useDispatch, useSelector } from 'react-redux'
import { useSaveTestResultsMutation } from '../slices/apiSlice'
import TestFromSteps from './TestFormSteps'
import { resetTest } from '../slices/testSlice'

export default function TestForm() {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.test.answers)
  const [saveTestResults] = useSaveTestResultsMutation()
  console.log(answers)

  const handleSubmit = async () => {
    const res = await saveTestResults({ categories: answers })
    if (!res.error) {
      dispatch(resetTest())
    } else {
      console.error('error' + res.error.data.error)
    }
  }

  return (
    <div>
      <TestFromSteps onSubmit={handleSubmit} />
    </div>
  )
}
