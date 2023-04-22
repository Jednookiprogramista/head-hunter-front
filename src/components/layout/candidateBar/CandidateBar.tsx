import React from 'react';
import './candidateBar.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const countCandidateBars = () => {
  const candidateBars = document.querySelectorAll('.candidate-bar');
  return candidateBars.length;
};

export const CandidateBar = () => {
  return (
    <div className="third-bar">
      <div className="candidate-bar">
        <span className="username-candidate-bar">Bruno B.</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div className="candidate-bar">
        <span className="username-candidate-bar">Paula G.</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div className="candidate-bar">
        <span className="username-candidate-bar">Karolina B.</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div className="candidate-bar">
        <span className="username-candidate-bar">Mateusz R.</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div className="candidate-bar">
        <span className="username-candidate-bar">Krystian P.</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>

      <div className="candidate-bar">
        <span className="username-candidate-bar">Łukasz </span>
        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>{' '}
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div className="candidate-bar">
        <span className="username-candidate-bar">Jakub</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div className="candidate-bar">
        <span className="username-candidate-bar">Kacper</span>

        <button type="button" className="btn-reserve-call">
          Zarezerwuj rozmowe
        </button>
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
    </div>
  );
};
