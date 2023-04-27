import React, { MouseEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

import './SettingsMenu.css';
import { DeleteAccountButton } from '../DeleteAccountButton/DeleteAccountButton';

export const SettingsMenu = () => {
  const { setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem('user');
    setAuth(null);
    await axiosPrivate.delete('sessions');
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
        <DeleteAccountButton />
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
