import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
import { PrimaryButton } from '../Button/PrimaryButton';
import { SecondaryButton } from '../Button/SecondaryButton';
import { TextButton } from '../Button/TextButton';
import { StudentsListView } from '../StudentsListView/StudentsListView';
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
              <PrimaryButton>Zaloguj się</PrimaryButton>
              <br />
              <SecondaryButton>Grey button</SecondaryButton>
              <br />
              <TextButton>Text button</TextButton>
              <br />
            </>
          }
        />
        <Route path="students" element={<StudentsListView />} />
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
