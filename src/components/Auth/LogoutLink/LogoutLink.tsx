import React, { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

import './LogoutLink.css';

export const LogoutLink = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem('user');
    setAuth(null);
    await axiosPrivate.delete('sessions');
    navigate('/');
  };

  return (
    <Link to="/logout" className="LogoutLink__link" onClick={handleLogout}>
      Wyloguj
    </Link>
  );
};
