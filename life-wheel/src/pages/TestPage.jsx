import TestForm from '../components/testFormComponents/TestForm'

export default function TestPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 w-100 vh-100">
      <h1 className="mb-4 text-center">Тест "Колесо Баланса"🎯</h1>
      <TestForm />
    </div>
  )
}
