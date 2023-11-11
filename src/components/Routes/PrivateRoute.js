import { Suspense, useEffect, useState } from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const check = await isLoggedIn();
      setLoggedIn(check);
    };
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /Login page
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Suspense fallback={<div>loading...</div>}><Component {...props} /></Suspense> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;