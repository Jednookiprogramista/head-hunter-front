import React, { useState } from 'react';
import './listConversation.css';

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Header } from '../header/Header';

function countDivsWithClass() {
  const divs = document.querySelectorAll('.third-bar-conv');
  return divs.length;
}

export const ListConversation = () => {
  const [selected, setSelected] = useState<number | null>(2);

  return (
    <>
      <Header />
      <div className="container">
        <div className="first-bar">
          <Link to="/list" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="first-bar-buttons"
              onClick={() => setSelected(1)}
              style={
                selected === 1 || null ? { borderBottom: '2px solid red' } : {}
              }
            >
              <span className="des-button">Dostępni kursanci</span>
            </button>
          </Link>
          <Link to="/conversation" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="first-bar-buttons"
              onClick={() => setSelected(2)}
              style={
                selected === 2 || null ? { borderBottom: '2px solid red' } : {}
              }
            >
              <span className="des-button">Do rozmowy</span>
            </button>
          </Link>
        </div>
        <div className="second-bar">
          <div className="search-space">
            <div className="search-place">
              <SearchIcon className="loupe" />
              <input className="search" type="text" placeholder="Szukaj" />
            </div>
            <button type="button" className="button-filter">
              <FilterAltIcon />
              Filtrowanie
            </button>
          </div>
        </div>
        <div className="third-bar-conv">
          <div className="reservation">
            <p>Rezerwacja do</p>
            <p>11.07.2022 r.</p>
          </div>
          <div className="container-of-candidate">
            <img
              className="profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPRvgfbHRKnbtJvgUiay6jvyFZST8vUjY_uc-cA1b&s"
              alt="candidate"
            />
            <span>Michał Kaszuba</span>
          </div>
          <div className="three-buttons">
            <button type="button" className="btn-reserve-call">
              Pokaż CV
            </button>
            <button type="button" className="btn-reserve-call">
              {' '}
              Brak zainteresowania
            </button>
            <button type="button" className="btn-reserve-call">
              Zatrudniony
            </button>
          </div>
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
        <div className="third-bar-conv">
          <div className="reservation">
            <p>Rezerwacja do</p>
            <p>11.07.2022 r.</p>
          </div>
          <div className="container-of-candidate">
            <img
              className="profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPRvgfbHRKnbtJvgUiay6jvyFZST8vUjY_uc-cA1b&s"
              alt="candidate"
            />
            <span>Michał Kaszuba</span>
          </div>
          <div className="three-buttons">
            <button type="button" className="btn-reserve-call">
              Pokaż CV
            </button>
            <button type="button" className="btn-reserve-call">
              {' '}
              Brak zainteresowania
            </button>
            <button type="button" className="btn-reserve-call">
              Zatrudniony
            </button>
          </div>
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
        <div className="third-bar-conv">
          <div className="reservation">
            <p>Rezerwacja do</p>
            <p>11.07.2022 r.</p>
          </div>
          <div className="container-of-candidate">
            <img
              className="profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPRvgfbHRKnbtJvgUiay6jvyFZST8vUjY_uc-cA1b&s"
              alt="candidate"
            />
            <span>Michał Kaszuba</span>
          </div>
          <div className="three-buttons">
            <button type="button" className="btn-reserve-call">
              Pokaż CV
            </button>
            <button type="button" className="btn-reserve-call">
              {' '}
              Brak zainteresowania
            </button>
            <button type="button" className="btn-reserve-call">
              Zatrudniony
            </button>
          </div>
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
      </div>
      <footer className="footer-list">
        <div className="footer-container">
          <span>Ilość elementów</span>
          <button type="button" className="buttons-footer-counter">
            {countDivsWithClass()}
            <KeyboardArrowDownIcon />
          </button>
          <div className="footer-span">
            <span>1 z 1</span>
          </div>
          <button type="button" className="buttons-footer">
            <KeyboardArrowLeftIcon />
          </button>
          <button type="button" className="buttons-footer">
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </footer>
    </>
  );
};
