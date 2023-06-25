import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { refreshToken } = useSelector(state => state.auth);

  return refreshToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
