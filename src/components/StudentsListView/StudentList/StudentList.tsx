import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CandidateBar,
  countCandidateDivBars,
} from './candidateBar/CandidateBar';
import './studentList.css';
import { SecondaryButton } from '../../Button/SecondaryButton';

type StudentListProps = {
  onFilterClick: () => void;
}

export const StudentList = ({onFilterClick}: StudentListProps) => {
  const [selected, setSelected] = useState<number | null>(1);

  return (
    <div>
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
              style={selected === 2 ? { borderBottom: '2px solid red' } : {}}
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
            <SecondaryButton className="button-filter" onClick={onFilterClick}>
              <FilterAltIcon />
              Filtrowanie
            </SecondaryButton>
          </div>
        </div>
        <CandidateBar />
      </div>

      <footer className="footer-list">
        <div className="footer-container">
          <span>Ilość elementów</span>
          <button type="button" className="buttons-footer-counter">
            {countCandidateDivBars()}
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
    </div>
  );
};
