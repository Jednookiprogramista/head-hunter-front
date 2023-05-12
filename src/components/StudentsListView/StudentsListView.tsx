import { useEffect, useState } from 'react';
import { AvailableStudent } from 'types';
import { axios } from '../../api/axios';
import { FilterModal } from '../FilterModal/FilterModal';
import { ListFooter } from './ListFooter/ListFooter';
import { ListTabsSwitch } from './ListTabsSwitch/ListTabsSwitch';
import { SearchFilterRow } from './SearchFilterRow/SearchFilterRow';
import { StudentList } from './StudentList/StudentList';
import './studentsListView.css';

export const StudentsListView = () => {
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
          <StudentList students={students} />
        </div>
        <ListFooter />
      </div>

      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
