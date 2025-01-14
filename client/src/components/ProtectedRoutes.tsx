import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as UserService from '../services/UserService';

const ProtectedRoutes: React.FC = () => {
  return UserService.isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
