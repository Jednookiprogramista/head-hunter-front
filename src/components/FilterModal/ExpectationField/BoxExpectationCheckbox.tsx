import { Checkbox } from '@mui/material';
import './boxExpectationCheckbox.css';

type BoxExpectationCheckboxProps = {
  expectation: string;
};

export const BoxExpectationCheckbox = ({
  expectation,
}: BoxExpectationCheckboxProps) => {
  return (
    <Checkbox
      style={{ padding: 0 }}
      icon={<div className="box-expectation">{expectation}</div>}
      checkedIcon={
        <div className="box-expectation-selected">{expectation}</div>
      }
    />
  );
};
