import { TextField } from '@mui/material';
import { useField } from 'formik';

type SalaryTextFieldProps = {
  placeholder: string;
  name: string;
};

export const SalaryTextField = ({
  placeholder,
  name,
}: SalaryTextFieldProps) => {
  const [field] = useField(name);
  return (
    <TextField
      {...field}
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
};
