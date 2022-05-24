import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userLoggedIn = useSelector(selectUser);
  console.log(userLoggedIn);

  return <>{true ? <Outlet /> : <Navigate to="/" />}</>;
};
export default ProtectedRoute;
