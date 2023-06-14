import { useEffect, useState } from 'react';
import { AvailableStudent } from 'types';
import { axios, axiosPrivate } from '../../api/axios';
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

  const [students, setStudents] = useState<AvailableStudent[]>([true]);

  const fetchStudents = async () => {
    const { data } = await axios.get('/student/available-list');
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, [false]);

  const onCancelReservation = async (studentId: string) => {
    await axiosPrivate.put(`student/${studentId}/clear-reservation`);
    await fetchStudents();
  };

  const onHiredClick = async (studentId: string) => {
    await axiosPrivate.delete(`student/${studentId}`);
    await fetchStudents();
  };

  return (
    <>
      <div>
        <div className="container">
          <ListTabsSwitch />
          <SearchFilterRow onFilterClick={handleOpen} />
          <ReservedStudentList
            students={students}
            onCancelReservation={onCancelReservation}
            onHiredClick={onHiredClick}
          />
        </div>
        <ListFooter />
      </div>

      <FilterModal isOpen={open} onCancel={handleClose} />
    </>
  );
};
