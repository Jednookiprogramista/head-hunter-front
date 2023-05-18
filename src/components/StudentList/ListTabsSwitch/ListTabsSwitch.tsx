import { useState } from 'react';
import { Link } from 'react-router-dom';
import './listTabsSwitch.css';

export const ListTabsSwitch = () => {
  const [selected, setSelected] = useState<number | null>(1);

  return (
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
  );
};
