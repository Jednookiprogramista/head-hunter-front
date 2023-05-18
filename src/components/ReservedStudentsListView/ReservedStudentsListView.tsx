import { useEffect, useState } from 'react';
import { AvailableStudent } from 'types';
import { axios } from '../../api/axios';
import { FilterModal } from '../FilterModal/FilterModal';
import { ReservedStudentList } from './ReservedStudentList/ReservedStudentList';
import './reservedStudentsListView.css';
import { ListFooter } from '../StudentList/ListFooter/ListFooter';
import { ListTabsSwitch } from '../StudentList/ListTabsSwitch/ListTabsSwitch';
import { SearchFilterRow } from '../StudentList/SearchFilterRow/SearchFilterRow';

export const ReservedStudentsListView = () => {
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
          <ReservedStudentList students={students} />
        </div>
        <ListFooter />
      </div>

      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
