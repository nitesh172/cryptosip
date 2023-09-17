import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from './redux'

const RequireAuth = () => {
  const { isAuthenticate } = useAppSelector((state) => state.userReducer)

  const location = useLocation()

  return isAuthenticate !== null ? isAuthenticate ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace /> : null
}

export default RequireAuth
