import React, { ReactNode, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './SettingsMode.css';
import { useScreenBlur } from '../../../hooks/useScreenBlur';

interface Props {
  children: ReactNode;
}

export const SettingsMode = ({ children }: Props) => {
  const handleBlur = useScreenBlur('/settings');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/settings');
  };

  return (
    <div className="SettingsMode-shadow">
      <section
        className="SettingsMode"
        onBlur={handleBlur}
        /* eslint-disable-next-line jsx-a11y/tabindex-no-positive,jsx-a11y/no-noninteractive-tabindex */
        tabIndex={2}
      >
        <button
          type="submit"
          ref={useRef<HTMLButtonElement>(null!)}
          className="SettingsMode__close-btn"
          onClick={handleClick}
        >
          x
        </button>
        <div className="SettingsMode__content">{children}</div>
      </section>
    </div>
  );
};
