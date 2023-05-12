import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './searchFilterRow.css';
import { SecondaryButton } from '../../Button/SecondaryButton';

type SearchFilterRowProps = {
  onFilterClick: () => void;
};

export const SearchFilterRow = ({ onFilterClick }: SearchFilterRowProps) => {
  return (
    <div className="second-bar">
      <div className="search-space">
        <div className="search-place">
          <SearchIcon className="loupe" />
          <input className="search" type="text" placeholder="Szukaj" />
        </div>
        <SecondaryButton
          sx={{ backgroundColor: '#1E1E1F' }}
          onClick={onFilterClick}
        >
          <FilterAltIcon className="filter-alt-icon" />
          Filtrowanie
        </SecondaryButton>
      </div>
    </div>
  );
};
