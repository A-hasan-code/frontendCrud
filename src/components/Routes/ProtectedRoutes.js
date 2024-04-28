import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/Authcontext"; // Importing the useAuth hook from AuthContext

const ProtectedAdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth(); 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (user && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children; 
};

export default ProtectedAdminRoute;
