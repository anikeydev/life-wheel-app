import { useParams } from 'react-router-dom'
import { useGetPublicTestResultsQuery } from '../slices/apiSlice'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import PolarChart from '../components/PolarChart'

export default function PublicResults() {
  const { publicId } = useParams()

  const { data, isLoading, error } = useGetPublicTestResultsQuery(publicId)

  console.log(data)

  let dataArr = []

  if (!isLoading && !error) {
    dataArr = Object.values(data.result)
  }
  if (error) {
    return (
      <div className="w-100 d-flex flex-column align-items-center">
        <h1 className="mr-2">Результаты не найдены.</h1>
        <Link to="/test" className="btn btn-primary">
          Пройти тест
        </Link>
      </div>
    )
  } else if (!isLoading) {
    return (
      <div className="w-100 p-3 d-flex flex-column align-items-center">
        <h4 className="mb-5 text-center">
          "Колeсо Баланса"🎯 пользователя - {data.username}
        </h4>
        <PolarChart data={dataArr} />
      </div>
    )
  } else {
    return (
      <div className="w-100 d-flex flex-column align-items-center">
        <h1>Загрузка данных...</h1>
      </div>
    )
  }
}
