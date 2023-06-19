import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLogin } = useSelector(state => state.auth);

  return !isLogin ? children : <Navigate to="/" />;
};

export default PublicRoute;
