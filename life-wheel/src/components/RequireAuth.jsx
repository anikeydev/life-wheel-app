import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  let location = useLocation()
  const { token } = useSelector((state) => state.auth)

  if (!token) {
    return <Navigate to={'/auth'} state={{ from: location }} replace />
  }
  return children
}

export default RequireAuth
