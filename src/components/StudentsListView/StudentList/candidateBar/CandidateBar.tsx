import React from 'react';
import './candidateBar.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface CandidateList {
  name: string;
  id: number;
}

const candidates: CandidateList[] = [
  { name: 'Bruno B.', id: 1 },
  { name: 'Paula G.', id: 2 },
  { name: 'Karolina B.', id: 3 },
  { name: 'Mateusz R.', id: 4 },
  { name: 'Krystian P.', id: 5 },
  { name: 'Łukasz', id: 6 },
  { name: 'Jakub', id: 7 },
  { name: 'Kacper', id: 8 },
];

export const idCount = candidates.filter((candidate) => candidate.id).length;

export const CandidateBar = () => {
  return (
    <div className="third-bar">
      {candidates.map((candidate) => (
        <div className="candidate-bar" key={candidate.id}>
          <span className="username-candidate-bar">{candidate.name}</span>

          <button type="button" className="btn-reserve-call">
            Zarezerwuj rozmowe
          </button>
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
      ))}
    </div>
  );
};
