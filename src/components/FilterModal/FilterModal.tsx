import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { PrimaryButton } from '../Button/PrimaryButton';
import { SecondaryButton } from '../Button/SecondaryButton';
import { TextButton } from '../Button/TextButton';
import { StarsScoreField } from './StarScoreField/StarsScoreField';
import './filterModal.css';

type FilterModalProps = {
  isOpen: boolean;
  onCancel: () => void;
};

export const FilterModal = ({ isOpen, onCancel }: FilterModalProps) => {
  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <div className="dialog-container">
        <DialogContent className="dialog-content">
          <div className="dialog-header">
            Filtrowanie
            <SecondaryButton>Wyczyść wszystkie</SecondaryButton>
          </div>
          <StarsScoreField title="Ocena przejścia kursu" />
          <StarsScoreField title="Ocena aktywności i zaangażowania na kursie" />
          <StarsScoreField title="Ocena kodu w projekcie własnym" />
          <StarsScoreField title="Ocena pracy w zespole w Scrum" />
        </DialogContent>
        <DialogActions
          className="dialog-actions"
          style={{ padding: '20px 24px' }}
        >
          <TextButton onClick={handleClose}>Anuluj</TextButton>
          <PrimaryButton>Pokaż wyniki</PrimaryButton>
        </DialogActions>
      </div>
    </Dialog>
  );
};
