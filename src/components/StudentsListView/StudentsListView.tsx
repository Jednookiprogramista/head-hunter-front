import { useState } from 'react';
import { PrimaryButton } from '../Button/PrimaryButton';
import { FilterModal } from '../FilterModal/FilterModal';

export const StudentsListView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <PrimaryButton onClick={handleOpen}>Filtruj</PrimaryButton>
      <FilterModal isOpen={open} onCancel={handleClose} />
    </div>
  );
};
