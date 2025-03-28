import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice'

export default function Header() {
  const username = localStorage.getItem('username')
  const dispatch = useDispatch()

  return (
    <div className="d-flex justify-content-between align-items-center bg-secondary w-100 p-3 mb-3">
      <h3>{username}</h3>
      <div className="d-flex gap-3">
        <Link to="/test-results" className="btn btn-primary">
          Результат
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => {
            location.reload()
            dispatch(logout())
          }}>
          Выход
        </button>
      </div>
    </div>
  )
}
