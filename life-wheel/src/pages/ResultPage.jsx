import {
  useCreatePublicLinkMutation,
  useGetTestResultsQuery,
} from '../slices/apiSlice'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import PolarChart from '../components/PolarChart'
import { useState } from 'react'
import RecomendationTest from './RecomedationTest'

export default function ResultPage() {
  const username = localStorage.getItem('username')
  const [createLink] = useCreatePublicLinkMutation()
  const [publicLink, setPublicLink] = useState(null)

  const handleCreate = async () => {
    const { data } = await createLink()
    setPublicLink(`/results/public/${data.publicId}`)
  }

  const { data, isLoading, error } = useGetTestResultsQuery()
  let dataArr = []
  if (!isLoading && !error) {
    dataArr = Object.values(data)
  }
  if (error) {
    return (
      <div className="w-100 d-flex flex-column align-items-center">
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
      <div className="w-100 p-3 d-flex flex-column align-items-center">
        <Header />
        <h4 className="mb-5 text-center">"Колeсо Баланса"🎯 - {username}.</h4>
        <PolarChart data={dataArr} />
        {publicLink && (
          <Link
            to={publicLink}
            target="_blank"
            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            https://life-balance-wheel.ru{publicLink}
          </Link>
        )}
        <button className="btn btn-outline-success mt-3" onClick={handleCreate}>
          Поделиться результатами
        </button>
        <RecomendationTest />
      </div>
    )
  } else {
    return (
      <div className="w-100 d-flex flex-column align-items-center">
        <Header />
        <h1>Загрузка данных...</h1>
      </div>
    )
  }
}
