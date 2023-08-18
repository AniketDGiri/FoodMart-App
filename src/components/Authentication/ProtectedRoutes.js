import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const authDetails = JSON.parse(sessionStorage.getItem("accessToken"));

  return authDetails ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
