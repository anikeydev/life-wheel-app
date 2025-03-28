import { useDispatch, useSelector } from 'react-redux'
import { useSaveTestResultsMutation } from '../slices/apiSlice'
import TestFromSteps from './TestFormSteps'
import { resetTest } from '../slices/testSlice'
import { useState } from 'react'
import TestFinishPage from '../pages/TestFinishPage'

export default function TestForm() {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.test.answers)
  const [saveTestResults] = useSaveTestResultsMutation()
  const [isFinish, setIsFinish] = useState(false)

  const handleSubmit = async () => {
    const res = await saveTestResults({ categories: answers })
    if (!res.error) {
      dispatch(resetTest())
      setIsFinish(true)
    } else {
      console.error('error' + res.error.data.error)
    }
  }

  if (!isFinish) {
    return <TestFromSteps onSubmit={handleSubmit} />
  } else {
    return <TestFinishPage />
  }
}
