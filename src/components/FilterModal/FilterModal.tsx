import { Box, Dialog, DialogActions, DialogContent } from '@mui/material';
import { PrimaryButton } from '../Button/PrimaryButton';
import { TextButton } from '../Button/TextButton';
import { SecondaryButton } from '../Button/SecondaryButton';
import { BoxScore } from './BoxScore';

type FilterModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  //   onConfirm: () => void;
};

export const FilterModal = ({ isOpen, onCancel }: FilterModalProps) => {
  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={false}>
      <div style={{ width: '520px', height: '806px', display: 'flex' }}>
        <DialogContent
          style={{
            backgroundColor: '#0A0A0A',
            color: '#f7f7f7',
            fontSize: '14px',
            width: '100%',
          }}
        >
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              fontSize: '22px',
              fontWeight: 'bold',
              margin: '5px 0',
            }}
          >
            Filtrowanie
            <SecondaryButton>Wyczyść wszystkie</SecondaryButton>
          </Box>
          <Box
            sx={{
              margin: '20px 0 5px 0',
            }}
          >
            Ocena przejścia kursu
          </Box>
          <BoxScore>5</BoxScore> <BoxScore>4</BoxScore>
          <BoxScore>3</BoxScore> <BoxScore>2</BoxScore> <BoxScore>1</BoxScore>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'center', backgroundColor: '#0A0A0A' }}
        >
          <TextButton onClick={handleClose}>Anuluj</TextButton>
          <PrimaryButton>Pokaż wyniki</PrimaryButton>
        </DialogActions>
      </div>
    </Dialog>
  );
};
