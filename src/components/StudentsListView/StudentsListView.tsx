import { useState } from 'react';
import { FilterModal } from '../FilterModal/FilterModal';
import { StudentList } from './StudentList/StudentList';

export const StudentsListView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StudentList onFilterClick={handleOpen} />
      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
