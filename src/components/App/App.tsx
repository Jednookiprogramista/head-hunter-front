import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
import { List } from '../layout/list/List';
// import { RequireAuth } from '../RequireAuth/RequireAuth';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="/" element={<h1>MegaK - projekt finałowy</h1>} />
        <Route path="list" element={<List />} />
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
