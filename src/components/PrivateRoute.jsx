import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import Alert from './Alert';

const PrivateRoute = ({ children, ..._ }) => {
  const { user, badge, message, type, title, setBadge } =
    useContext(AuthContext);

  return (
    <>
      {badge && (
        <Alert
          type={type}
          title={title}
          message={message}
          close={() => {
            setBadge(false);
          }}
        />
      )}
      {!user ? <Navigate to="/signin" /> : children}
    </>
  );
};

export default PrivateRoute;
