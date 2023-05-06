import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
import { StudentsListView } from '../StudentsListView/StudentsListView';
import { Layout } from '../layout/Layout';
import { ChangePassword } from '../Auth/ChangePassword/ChangePassword';
import { ListConversation } from '../layout/listConversation/ListConversation';
import { RequireAuth } from '../RequireAuth/RequireAuth';
import { SettingsView } from '../Settings/SettingsView/SettingsView';
import { PasswordEditor } from '../Settings/PasswordEditor/PasswordEditor';
import { EmailEditor } from '../Settings/EmailEditor/EmailEditor';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />

        <Route path="pass-recover" element={<Auth />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="/" element={<RequireAuth />}>
          <Route path="settings" element={<SettingsView />}>
            <Route path="password" element={<PasswordEditor />} />
            <Route path="email" element={<EmailEditor />} />
          </Route>
          <Route path="/" element={<Navigate to="list" />} />
          <Route
            path="list"
            element={
              <Layout>
                <StudentsListView />
              </Layout>
            }
          />
          <Route path="conversation" element={<ListConversation />} />
        </Route>
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
