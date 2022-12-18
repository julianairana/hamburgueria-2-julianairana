import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectionRoute() {
  const tokenValidate = localStorage.getItem("@TOKEN");
  if (!tokenValidate) return <Navigate to="/" replace />;
  return <Outlet />;
}