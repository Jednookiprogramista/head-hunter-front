import React from 'react';
import { Outlet } from 'react-router-dom';

import './SettingsView.css';
import { SettingsMenu } from '../SettingsMenu/SettingsMenu';

export const SettingsView = () => {
  return (
    <article className="SettingsView">
      <SettingsMenu />
      <Outlet />
    </article>
  );
};
