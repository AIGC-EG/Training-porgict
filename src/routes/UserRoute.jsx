import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function UserRoute() {
  const { isAuthenticated, user } = useAuth();

  // إذا لم يسجل الدخول
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // إذا لم يكن Customer
  if (user?.role !== "customer") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default UserRoute;