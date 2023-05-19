import { Link, useLocation } from 'react-router-dom';
import './listTabsSwitch.css';

export const ListTabsSwitch = () => {
  const { pathname } = useLocation();

  return (
    <div className="first-bar">
      <Link
        to="/list"
        className="first-bar-buttons"
        style={
          pathname.includes('list') || null
            ? { borderBottom: '2px solid red' }
            : {}
        }
      >
        <span className="des-button">Dostępni kursanci</span>
      </Link>
      <Link
        to="/conversation"
        className="first-bar-buttons"
        style={
          pathname.includes('conversation')
            ? { borderBottom: '2px solid red' }
            : {}
        }
      >
        <span className="des-button">Do rozmowy</span>
      </Link>
    </div>
  );
};
