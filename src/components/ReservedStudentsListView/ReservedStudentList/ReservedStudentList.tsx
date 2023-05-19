import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvailableStudent } from 'types';
import { PrimaryButton } from '../../Button/PrimaryButton';
import { StudentRatingsPreferences } from '../../StudentList/StudentRatingsPreferences/StudentRatingsPreferences';
import './reservedStudentList.css';

type ReservedStudentListProps = {
  students: AvailableStudent[];
  onCancelReservation: (studentId: string) => void;
  onHiredClick: (studentId: string) => void;
};

export const ReservedStudentList = ({
  students,
  onCancelReservation,
  onHiredClick,
}: ReservedStudentListProps) => {
  const navigate = useNavigate();

  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(
    null,
  );

  const handleClick = (studentId: string) => {
    if (expandedStudentId === studentId) {
      setExpandedStudentId(null);
    } else setExpandedStudentId(studentId);
  };

  return (
    <div className="student-list">
      {students.map((student) => (
        <div className="candidate" key={student.id}>
          <div className="candidate-bar">
            <div className="reservation">
              <p>Rezerwacja do</p>
              <p>11.02.2024</p>
            </div>
            <span className="username-candidate-bar">{student.name}</span>
            <PrimaryButton onClick={() => navigate(`/cv/${student.id}`)}>
              Pokaż CV
            </PrimaryButton>
            <PrimaryButton onClick={() => onCancelReservation(student.id)}>
              Brak zainteresowania
            </PrimaryButton>
            <PrimaryButton onClick={() => onHiredClick(student.id)}>
              Zatrudniony
            </PrimaryButton>
            <IconButton
              sx={{ color: '#666666' }}
              onClick={() => handleClick(student.id)}
            >
              {expandedStudentId === student.id ? (
                <KeyboardArrowUp />
              ) : (
                <KeyboardArrowDown />
              )}
            </IconButton>
          </div>
          {expandedStudentId === student.id ? (
            <StudentRatingsPreferences student={student} />
          ) : null}
        </div>
      ))}
    </div>
  );
};
