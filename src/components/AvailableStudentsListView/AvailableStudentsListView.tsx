import { useEffect, useState } from 'react';
import { AvailableStudent } from 'types';
import { axios } from '../../api/axios';
import { FilterModal } from '../FilterModal/FilterModal';
import { AvailableStudentList } from './AvailableStudentList/AvailableStudentList';
import './availableStudentsListView.css';
import { ListFooter } from '../StudentList/ListFooter/ListFooter';
import { ListTabsSwitch } from '../StudentList/ListTabsSwitch/ListTabsSwitch';
import { SearchFilterRow } from '../StudentList/SearchFilterRow/SearchFilterRow';
import { useAuth } from '../../hooks/useAuth';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';

export const AvailableStudentsListView = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

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

  const onStudentReserve = async (studentId: string) => {
    if (!auth) return;

    await axiosPrivate.put(`student/${studentId}/reserve`, { user: auth.id });
    await fetchStudents();
  };

  return (
    <>
      <div>
        <div className="container">
          <ListTabsSwitch />
          <SearchFilterRow onFilterClick={handleOpen} />
          <AvailableStudentList
            students={students}
            onStudentReserve={onStudentReserve}
          />
        </div>
        <ListFooter />
      </div>

      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
