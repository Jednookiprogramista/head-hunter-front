import React from 'react';
import { Outlet } from 'react-router-dom';

import './SettingsView.css';
import { SettingsMenu } from '../SettingsMenu/SettingsMenu';
import { Header } from '../../layout/header/Header';

export const SettingsView = () => {
  return (
    <>
      <Header />
      <article className="SettingsView">
        <SettingsMenu />
        <Outlet />
      </article>
    </>
  );
};
