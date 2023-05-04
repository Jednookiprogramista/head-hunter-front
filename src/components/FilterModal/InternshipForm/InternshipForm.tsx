import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useField } from 'formik';
import { FieldTitle } from '../components/FieldTitle';

type InternshipFormProps = {
  title: string;
  name: string;
};

const RadioButton = ({ value, label }: { value: boolean; label: string }) => (
  <FormControlLabel
    value={value}
    control={
      <Radio
        sx={{
          color: '#f7f7f731',
          padding: '0px 10px',
          '&.Mui-checked': {
            color: '#e02735',
          },
          '& .MuiSvgIcon-root': {
            fontSize: '20px',
          },
        }}
      />
    }
    label={<span style={{ fontSize: '14px' }}>{label}</span>}
    style={{ width: 'fit-content' }}
  />
);

export const InternshipForm = ({ title, name }: InternshipFormProps) => {
  const [field] = useField(name);
  return (
    <>
      <FieldTitle title={title} />
      <RadioGroup style={{ gap: 6 }} {...field}>
        <RadioButton value label="Tak" />
        <RadioButton value={false} label="Nie" />
      </RadioGroup>
    </>
  );
};
