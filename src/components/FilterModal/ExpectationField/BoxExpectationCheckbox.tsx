import { Checkbox } from '@mui/material';
import { useField } from 'formik';
import './boxExpectationCheckbox.css';

type BoxExpectationCheckboxProps = {
  expectation: string;
  name: string;
  value: string;
};

export const BoxExpectationCheckbox = ({
  expectation,
  name,
  value,
}: BoxExpectationCheckboxProps) => {
  const [field] = useField(name);
  return (
    <Checkbox
      {...field}
      checked={field.value?.includes(value) ?? false}
      value={value}
      style={{ padding: 0 }}
      icon={<div className="box-expectation">{expectation}</div>}
      checkedIcon={
        <div className="box-expectation-selected">{expectation}</div>
      }
    />
  );
};
