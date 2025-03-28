import { Link } from 'react-router-dom'

export default function TestFinishPage() {
  return (
    <div className="text-center">
      <h1 className="mb-5">Поздравляем с прохождением теста</h1>
      <Link
        to="/results"
        reloadDocument
        className="btn btn-outline-success btn-lg">
        Посмотреть результаты
      </Link>
    </div>
  )
}
