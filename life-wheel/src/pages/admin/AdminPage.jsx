import { useState } from 'react'
import { useAllUsersQuery } from '../../slices/adminSlice'

export default function AdminPage() {
  const { data, isLoading, error } = useAllUsersQuery()

  if (isLoading) return <h1>Загрузка...</h1>

  console.log(users)
  return (
    <div>
      <h1>Admin panel</h1>
      <p>All Users</p>
      <div>{}</div>
    </div>
  )
}
