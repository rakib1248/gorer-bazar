import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.Auth);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;