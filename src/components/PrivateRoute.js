import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } // redirect
        console.log("Failed to login; Redirecting!!!");
        return <Redirect to="/Log-in" />;
      }}
    />
  );
};

export default PrivateRoute;