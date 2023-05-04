import { FieldTitle } from '../components/FieldTitle';
import { BoxExpectationCheckbox } from './BoxExpectationCheckbox';
import './expectationField.css';

type Option = {
  label: string;
  value: string;
};
type ExpectationFieldProps = {
  title: string;
  options: Option[];
  name: string;
};

export const ExpectationField = ({
  title,
  options,
  name,
}: ExpectationFieldProps) => {
  return (
    <>
      <FieldTitle title={title} />
      <div className="box-expectation-container">
        {options.map(({ label, value }) => (
          <BoxExpectationCheckbox
            key={value}
            expectation={label}
            name={name}
            value={value}
          />
        ))}
      </div>
    </>
  );
};
