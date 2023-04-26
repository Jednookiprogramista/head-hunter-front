import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
// import { Button } from '../Button/Button';
import { List } from '../layout/list/List';
import { ListConversation } from '../layout/listConversation/ListConversation';
// import { RequireAuth } from '../RequireAuth/RequireAuth';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />

        <Route path="list" element={<List />} />
        <Route path="conversation" element={<ListConversation />} />

        <Route
          path="/"
          element={
            <>
              <h1>MegaK - projekt finałowy</h1>
              {/* <Route path="error" element={<Error />} />
              <Route path="*" element={<NotFound />} />
              <Route path="404" element={<NotFound />} />
              <Route path="/" element={<RequireAuth />}>
                <Route path="settings" element={<Settings />}>
                  <Route path="email" element={<Email />} />
                  <Route path="password" element={<Password />} />
                </Route>
                <Route path="/" element={<Home />} />
              </Route> */}
            </>
          }
        />
      </Routes>
    </AuthProvider>
  );
};
