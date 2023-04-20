import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './header.css';

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="bar">
      <div className="left-tittle">
        <img
          src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
          className="logo_header"
          alt="MegaK"
        />
      </div>
      <button type="button" className="button-header">
        <div className="right-tittle">
          <div className="profile-picture">
            <img
              className="profile"
              src="https://thumbs.dreamstime.com/b/profile-picture-smiling-male-employee-posing-workplace-close-up-headshot-portrait-smiling-caucasian-businessman-look-190961990.jpg"
              alt="Main profile"
            />
            <span className="my-name"> Mateusz Kowalski </span>
            <ArrowDropDownIcon fontSize="large" onClick={handleExpand} />
            {expanded && (
              <div>
                <button type="button" className="field1">
                  Konto
                </button>

                <button type="button" className="field2">
                  Wyloguj
                </button>
              </div>
            )}
          </div>
        </div>
      </button>
    </header>
  );
};
