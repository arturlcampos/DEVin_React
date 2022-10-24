import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../../contexts/UseLogin/index";


export default function PrivateRoute() {
  const { loginData } = useLogin();
  
  return loginData ? <Outlet /> : <Navigate to="/home" replace />;
}