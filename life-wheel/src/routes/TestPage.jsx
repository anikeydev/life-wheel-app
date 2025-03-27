import { useSelector, useDispatch } from 'react-redux'
import FormTest from '../components/FormTest'
import { testCategories, testAsks } from '../data'

export default function TestPage() {
  const careerCategory = testCategories[0]
  const current = useSelector((state) => state.current)
  const currentTest = testCategories.find((tc) => tc.name === current)

  return (
    <div className="d-flex vh-100 flex-column p-3 align-items-center justify-content-center">
      <FormTest category={currentTest} asks={testAsks[currentTest.name]} />
    </div>
  )
}
