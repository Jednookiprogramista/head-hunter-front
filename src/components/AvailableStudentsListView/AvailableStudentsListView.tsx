import { useEffect, useState } from 'react';
import { AvailableStudent } from 'types';
import { axios } from '../../api/axios';
import { FilterModal } from '../FilterModal/FilterModal';
import { AvailableStudentList } from './AvailableStudentList/AvailableStudentList';
import './availableStudentsListView.css';
import { ListFooter } from '../StudentList/ListFooter/ListFooter';
import { ListTabsSwitch } from '../StudentList/ListTabsSwitch/ListTabsSwitch';
import { SearchFilterRow } from '../StudentList/SearchFilterRow/SearchFilterRow';

export const AvailableStudentsListView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [students, setStudents] = useState<AvailableStudent[]>([]);

  const fetchStudents = async () => {
    const { data } = await axios.get('/student/available-list');
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <ListTabsSwitch />
          <SearchFilterRow onFilterClick={handleOpen} />
          <AvailableStudentList students={students} />
        </div>
        <ListFooter />
      </div>

      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
