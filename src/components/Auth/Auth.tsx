import React from 'react';
import { useLocation } from 'react-router-dom';

import { Register } from './Register/Register';
import { Login } from './Login/Login';

export const Auth = () => {
  const location = useLocation();
  return (
    <div className="Auth">
      { location.pathname === '/register' ? <Register /> : <Login /> }
    </div>
  );
};
