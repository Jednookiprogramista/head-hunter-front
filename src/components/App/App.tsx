import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
// import { RequireAuth } from '../RequireAuth/RequireAuth';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route
          path="/"
          element={
            <>
              <h1>MegaK - projekt finałowy</h1>
              <button type="button" className="primary-btn">
                Zaloguj się
              </button>
            </>
          }
        />
        {/* <Route path="error" element={} /> */}
        {/* <Route path="*" element={} /> */}
        {/* <Route path="404" element={} /> */}
        {/* <Route path="/" element={<RequireAuth />}> */}
        {/* <Route path="settings" element={}> */}
        {/*  <Route path="email" element={} /> */}
        {/*  <Route path="password" element={} /> */}
        {/* </Route> */}
        {/* <Route path="/" element={} /> */}
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
};
