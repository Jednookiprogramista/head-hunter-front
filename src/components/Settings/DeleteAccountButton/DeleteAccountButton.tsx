import React, { MouseEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

export const DeleteAccountButton = () => {
  const [confirm, setConfirm] = useState(false);

  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const handleDeleteAccount = async (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      e.preventDefault();
      if (!confirm) {
        setConfirm(true);
        return;
      }
      // await axiosPrivate.delete('auth/refresh');
      // await axiosPrivate.delete(`user/${auth?.id}`);
      localStorage.removeItem('user');
      setAuth(null);
    } catch (err) {
      navigate('/error');
    }
  };

  return (
    <NavLink
      to="/delete-account"
      className={`SettingsOptions__link ${
        confirm ? 'SettingsOptions__link--delete' : ''
      }`}
      onClick={handleDeleteAccount}
    >
      {!confirm ? <>Usuń konto</> : <>Potwierdź</>}
    </NavLink>
  );
};
