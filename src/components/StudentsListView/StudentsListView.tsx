import { useState } from 'react';
import { FilterModal } from '../FilterModal/FilterModal';
import { SecondaryButton } from '../Button/SecondaryButton';
import { StudentList } from './StudentList/StudentList';

export const StudentsListView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <SecondaryButton onClick={handleOpen}>Filtrowanie</SecondaryButton>
        <StudentList />
      </div>
      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
