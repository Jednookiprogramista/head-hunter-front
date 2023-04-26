import React, { MouseEvent, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

import './SettingsMenu.css';

export const SettingsMenu = () => {
  const [confirm, setConfirm] = useState(false);

  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem('user');
    setAuth(null);
    await axiosPrivate.delete('sessions');
  };

  const handleDeleteAccount = async (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      e.preventDefault();
      if (!confirm) {
        setConfirm(true);
        return;
      }
      await axiosPrivate.delete('session');
      await axiosPrivate.delete(`user/${auth?.id}`);
      localStorage.removeItem('user');
      setAuth(null);
    } catch (err) {
      navigate('/error');
    }
  };

  return (
    <section className="SettingsOptions">
      <h1 className="SettingsOptions__title">Ustawienia </h1>
      <div className="SettingsOptions__links-group">
        <Link to="email" className="SettingsOptions__link">
          Zmień adres email
        </Link>
        <Link to="password" className="SettingsOptions__link">
          Zmień hasło
        </Link>
        <NavLink
          to="/delete-account"
          className={`SettingsOptions__link ${
            confirm ? 'SettingsOptions__link--delete' : ''
          }`}
          onClick={handleDeleteAccount}
        >
          {!confirm ? <>Usuń konto</> : <>Potwierdź</>}
        </NavLink>
        <NavLink
          to="/logout"
          className="SettingsOptions__link"
          onClick={handleLogout}
        >
          Wyloguj
        </NavLink>
        <NavLink to="/" className="SettingsOptions__link">
          Wróć do strony głównej
        </NavLink>
      </div>
    </section>
  );
};
