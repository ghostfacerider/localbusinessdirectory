import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../services/authService";

const ProtectedRoutes: React.FC = () => {
  return authService.isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
