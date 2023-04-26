import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
import { PrimaryButton } from '../Button/PrimaryButton';
import { StudentsListView } from '../StudentsListView/StudentsListView';
import { Layout } from '../layout/Layout';
import { ChangePassword } from '../Auth/ChangePassword/ChangePassword';
import { ListConversation } from '../layout/listConversation/ListConversation';
// import { RequireAuth } from '../RequireAuth/RequireAuth';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="pass-recover" element={<Auth />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route
          path="list"
          element={
            <Layout>
              <StudentsListView />
            </Layout>
          }
        />
        <Route
          path="conversation"
          element={
            <Layout>
              <ListConversation />
            </Layout>
          }
        />

        <Route
          path="/"
          element={
            <>
              <h1>MegaK - projekt finałowy</h1>
              <PrimaryButton>Zaloguj się</PrimaryButton>
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
