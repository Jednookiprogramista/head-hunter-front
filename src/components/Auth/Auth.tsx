import React from 'react';
import { useLocation } from 'react-router-dom';

import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { PasswordRecover } from './PasswordRecover/PasswordRecover';

export const Auth = () => {
  const location = useLocation();
  return (
    <div className="Auth">
      {location.pathname === '/register' ? (
        <Register />
      ) : location.pathname === '/login' ? (
        <Login />
      ) : (
        <PasswordRecover />
      )}
    </div>
  );
};
