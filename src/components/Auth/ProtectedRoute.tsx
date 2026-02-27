import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
