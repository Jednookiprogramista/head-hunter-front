import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import { Auth } from '../Auth/Auth';
import { ChangePassword } from '../Auth/ChangePassword/ChangePassword';
import { AvailableStudentsListView } from '../AvailableStudentsListView/AvailableStudentsListView';
import { RequireAuth } from '../RequireAuth/RequireAuth';
import { ReservedStudentsListView } from '../ReservedStudentsListView/ReservedStudentsListView';
import { EmailEditor } from '../Settings/EmailEditor/EmailEditor';
import { PasswordEditor } from '../Settings/PasswordEditor/PasswordEditor';
import { SettingsView } from '../Settings/SettingsView/SettingsView';
import { Layout } from '../layout/Layout';
import { AddStudents } from '../AdminView/AddStudents/AddStudents';
import { AddHR } from '../AdminView/AddHR/AddHR';

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
          <Route path="admin/add-hr" element={<AddHR />} />
          <Route path="admin/add-students" element={<AddStudents />} />
          <Route path="/" element={<Navigate to="list" />} />
          <Route
            path="list"
            element={
              <Layout>
                <AvailableStudentsListView />
              </Layout>
            }
          />
          <Route
            path="conversation"
            element={
              <Layout>
                <ReservedStudentsListView />
              </Layout>
            }
          />
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
