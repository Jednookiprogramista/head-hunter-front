import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './listFooter.css';

export const ListFooter = () => {
  return (
    <footer className="footer-list">
      <div className="footer-container">
        <span>Ilość elementów</span>
        <button type="button" className="buttons-footer-counter">
          0
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
  );
};
