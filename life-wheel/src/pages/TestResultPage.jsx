import { useGetTestResultsQuery } from '../slices/apiSlice'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import PolarChart from '../components/PolarChart'

export default function TestResultsPage() {
  const username = localStorage.getItem('username')

  const { data, isLoading, error } = useGetTestResultsQuery()
  let dataArr = []
  if (!isLoading && !error) {
    dataArr = Object.values(data)
  }
  if (error) {
    return (
      <div className="w-75 d-flex flex-column align-items-center">
        <Header />
        <h1 className="mr-2">
          Результаты пользователя - {username} не найдены.
        </h1>
        <Link to="/test" className="btn btn-primary">
          Пройти тест
        </Link>
      </div>
    )
  } else if (!isLoading) {
    return (
      <div className="w-75 d-flex flex-column align-items-center">
        <Header />
        <h4 className="mb-5 text-center">"Колeсо Баланса"🎯 - {username}.</h4>
        <PolarChart data={dataArr} />
      </div>
    )
  } else {
    return (
      <div className="w-75 d-flex flex-column align-items-center">
        <Header />
        <h1>Загрузка данных...</h1>
      </div>
    )
  }
}
