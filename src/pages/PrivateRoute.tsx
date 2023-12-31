import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: any) => {
  const user = localStorage.getItem("login-token");

  return user ? children : <Navigate to={"/"} />;
};
