import { useEffect } from 'react'
import { useGetTestResultsQuery } from '../slices/apiSlice'
import PolarChart from '../components/PolarChart'

export default function TestResultsPage() {
  const username = localStorage.getItem('username')

  const { data, isLoading } = useGetTestResultsQuery()
  let dataArr = []

  if (!isLoading) {
    dataArr = Object.values(data)
  }

  return (
    <div>
      <h1>{username}</h1>
      <p>Твои результаты</p>
      {isLoading && <h1>Загрузка данных...</h1>}
      {!isLoading && <PolarChart data={dataArr} />}
    </div>
  )
}
