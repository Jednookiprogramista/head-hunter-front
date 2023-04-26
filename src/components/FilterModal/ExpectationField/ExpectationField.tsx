import { FieldTitle } from '../components/FieldTitle';
import { BoxExpectationCheckbox } from './BoxExpectationCheckbox';
import './expectationField.css';

type ExpectationFieldProps = {
  title: string;
  options: string[];
};

export const ExpectationField = ({ title, options }: ExpectationFieldProps) => {
  return (
    <>
      <FieldTitle title={title} />
      <div className="box-expectation-container">
        {options.map((option) => (
          <BoxExpectationCheckbox key={option} expectation={option} />
        ))}
      </div>
    </>
  );
};
