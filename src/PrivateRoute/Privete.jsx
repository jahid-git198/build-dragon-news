import React, { useContext } from "react";
import { AutContext } from "../AutoProvider/ProviderAut";
import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";

function Privete({ children }) {
  const { user, loading } = useContext(AutContext);
  const lacation = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate state={lacation.pathname} to="/auth/login"></Navigate>;
}

export default Privete;
