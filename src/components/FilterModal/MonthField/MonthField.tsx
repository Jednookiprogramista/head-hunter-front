import { TextField } from '@mui/material';
import { useField } from 'formik';
import { FieldTitle } from '../components/FieldTitle';

type MonthFieldProps = {
  title: string;
  name: string;
};

export const MonthField = ({ title, name }: MonthFieldProps) => {
  const [field] = useField(name);
  return (
    <>
      <FieldTitle title={title} />
      <div className="month-experience">
        <TextField
          placeholder="0 miesięcy"
          variant="filled"
          type="number"
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
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: '#e02735',
            },
          }}
          {...field}
        />
      </div>
    </>
  );
};
