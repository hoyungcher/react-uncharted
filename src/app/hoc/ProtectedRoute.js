import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedInStatus, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        console.log(props);
        if (loggedInStatus === "LOGGED_IN") {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          // return <Component {...rest} {...props} />
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;
