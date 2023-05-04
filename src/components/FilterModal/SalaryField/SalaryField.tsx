import { FieldTitle } from '../components/FieldTitle';
import { SalaryTextField } from './SalaryTextField';
import './salaryField.css';

type SalaryFieldProps = {
  title: string;
  nameMin: string;
  nameMax: string;
};

export const SalaryField = ({ title, nameMin, nameMax }: SalaryFieldProps) => {
  return (
    <>
      <FieldTitle title={title} />
      <div className="salary-expectations">
        <div>
          Od
          <SalaryTextField placeholder="np. 1000zł" name={nameMin} />
        </div>
        <div>
          Do
          <SalaryTextField placeholder="np.10000zł" name={nameMax} />
        </div>
      </div>
    </>
  );
};
