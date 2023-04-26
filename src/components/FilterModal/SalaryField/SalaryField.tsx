import { TextField } from '@mui/material';
import { FieldTitle } from '../components/FieldTitle';
import './salaryField.css';

type SalaryFieldProps = {
  title: string;
};

const SalaryTextField = ({ placeholder }: { placeholder: string }) => (
  <TextField
    fullWidth
    placeholder={placeholder}
    type="number"
    variant="filled"
    inputProps={{
      style: {
        padding: '5px 10px',
        fontSize: '12px',
        color: '#f7f7f7',
      },
    }}
    sx={{
      width: '100px',
      backgroundColor: '#292A2B',
      color: '#f7f7f7',
      'input::placeholder': {
        color: '#f7f7f7',
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: '#e02735',
      },
    }}
  />
);

export const SalaryField = ({ title }: SalaryFieldProps) => {
  return (
    <>
      <FieldTitle title={title} />
      <div className="salary-expectations">
        <div>
          Od
          <SalaryTextField placeholder="np. 1000zł" />
        </div>
        <div>
          Do
          <SalaryTextField placeholder="np.10000zł" />
        </div>
      </div>
    </>
  );
};
