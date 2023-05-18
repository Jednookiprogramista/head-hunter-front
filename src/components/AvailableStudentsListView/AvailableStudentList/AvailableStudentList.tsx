import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { AvailableStudent } from 'types';
import { PrimaryButton } from '../../Button/PrimaryButton';
import './availableStudentList.css';
import { StudentRatingsPreferences } from '../../StudentList/StudentRatingsPreferences/StudentRatingsPreferences';

type AvailableStudentListProps = {
  students: AvailableStudent[];
};

export const AvailableStudentList = ({
  students,
}: AvailableStudentListProps) => {
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
            <span className="username-candidate-bar">{student.name}</span>
            <PrimaryButton>Zarezerwuj rozmowe</PrimaryButton>
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
