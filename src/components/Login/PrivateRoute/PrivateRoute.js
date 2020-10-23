import React, { Children, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Route
      
      render={({ location }) =>
        loggedInUser.email ? (
          Children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;