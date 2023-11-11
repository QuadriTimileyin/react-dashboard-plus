
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import { useEffect, useState } from "react";
import MainLayout from '../../layout/MainLayout';
import Dashboard from "../../pages/Dashboard";

const AuthProvider = () => {
    const { isLoggedIn } = useAuth();
    const [loggedIn, setLoggedIn] = useState(false);
    const { getAuthToken } = useAuth();
    
  const location = useLocation();
console.log("token", loggedIn);
  console.log("location",location);
  useEffect(() => {
    const checkLogin = async () => {
      const check = await isLoggedIn();
      setLoggedIn(check);
    };
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (loggedIn) {
    return <Dashboard />;
  } else {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default AuthProvider;
