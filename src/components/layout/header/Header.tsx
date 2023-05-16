import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { LogoutLink } from '../../Auth/LogoutLink/LogoutLink';

import './header.css';

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="bar">
      <div className="left-tittle">
        <Link to="/list">
          <img
            src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
            className="logo_header"
            alt="MegaK"
          />
        </Link>
      </div>
      <button type="button" className="button-header" onClick={handleExpand}>
        <div className="right-tittle">
          <div className="profile-picture">
            <img
              className="profile"
              src="https://thumbs.dreamstime.com/b/profile-picture-smiling-male-employee-posing-workplace-close-up-headshot-portrait-smiling-caucasian-businessman-look-190961990.jpg"
              alt="Main profile"
            />
            <span className="my-name"> Mateusz Kowalski </span>
            <ArrowDropDownIcon fontSize="large" />
            {expanded && (
              <div>
                <button type="button" className="Header__button button1">
                  <Link to="/settings">Konto</Link>
                </button>

                <button type="button" className="Header__button button2">
                  <LogoutLink />
                </button>
              </div>
            )}
          </div>
        </div>
      </button>
    </header>
  );
};
