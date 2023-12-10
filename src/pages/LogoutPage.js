import React, { useState } from "react";
import { useAuth } from "../common/AuthContext";
import { Navigate } from "react-router";

export default function LogoutPage() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  setAuthUser(null);
  setIsLoggedIn(false);
  localStorage.removeItem('user');
  return(
    <Navigate to="/" />
  );
}
