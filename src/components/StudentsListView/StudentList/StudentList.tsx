import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AvailableStudent } from 'types';
import { PrimaryButton } from '../../Button/PrimaryButton';
import './studentList.css';

type StudentListProps = {
  students: AvailableStudent[];
};

export const StudentList = ({ students }: StudentListProps) => {
  return (
    <div className="third-bar">
      {students.map((student) => (
        <div className="candidate-bar" key={student.id}>
          <span className="username-candidate-bar">{student.name}</span>
          <PrimaryButton>Zarezerwuj rozmowe</PrimaryButton>
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
      ))}
    </div>
  );
};
