import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { refreshToken } = useSelector(state => state.auth);

  return !refreshToken ? children : <Navigate to="/" />;
};

export default PublicRoute;
