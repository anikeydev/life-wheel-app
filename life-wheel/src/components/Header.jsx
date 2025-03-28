import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice'

export default function Header() {
  const username = localStorage.getItem('username')
  const dispatch = useDispatch()
  const isPath = location.pathname === '/results'

  return (
    <div className="d-flex justify-content-between align-items-center w-100 p-3 mb-2">
      <h4 className="me-3">{username}</h4>
      <div className="d-flex gap-2">
        {!isPath ? (
          <Link to="/results" className="btn btn-outline-success">
            Результаты
          </Link>
        ) : (
          <Link to="/" className="btn btn-outline-success">
            Главная
          </Link>
        )}
        <Link
          to="/"
          className="btn btn-outline-primary"
          reloadDocument
          onClick={() => {
            dispatch(logout())
          }}>
          Выход
        </Link>
      </div>
    </div>
  )
}
