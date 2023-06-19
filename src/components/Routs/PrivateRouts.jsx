import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLogin } = useSelector(state => state.auth);

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
