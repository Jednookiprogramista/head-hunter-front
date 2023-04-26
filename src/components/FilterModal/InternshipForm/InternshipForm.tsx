import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FieldTitle } from '../components/FieldTitle';

type InternshipFormProps = {
  title: string;
};

const RadioButton = ({ value, label }: { value: string; label: string }) => (
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

export const InternshipForm = ({ title }: InternshipFormProps) => {
  return (
    <>
      <FieldTitle title={title} />
      <RadioGroup style={{ gap: 6 }}>
        <RadioButton value="yes" label="Tak" />
        <RadioButton value="no" label="Nie" />
      </RadioGroup>
    </>
  );
};
