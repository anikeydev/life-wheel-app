import { useGetTestResultsQuery } from '../slices/apiSlice'

export default function RecomendationTest() {
  const { data, isLodaing } = useGetTestResultsQuery()

  return <h1>{JSON.stringify(data)}</h1>
}
