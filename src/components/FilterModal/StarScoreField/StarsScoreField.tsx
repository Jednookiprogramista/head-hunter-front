import { RadioGroup } from '@mui/material';
import { useField } from 'formik';
import { FieldTitle } from '../components/FieldTitle';
import { BoxStarScoreRadio } from './BoxStarScoreRadio';
import './starsScoreField.css';

type StarsScoreFieldProps = {
  title: string;
  name: string;
};

export const StarsScoreField = ({ title, name }: StarsScoreFieldProps) => {
  const [field] = useField(name);
  return (
    <>
      <FieldTitle title={title} />

      <RadioGroup row className="box-star-container" {...field}>
        <BoxStarScoreRadio score={5} />
        <BoxStarScoreRadio score={4} />
        <BoxStarScoreRadio score={3} />
        <BoxStarScoreRadio score={2} />
        <BoxStarScoreRadio score={1} />
      </RadioGroup>
    </>
  );
};
