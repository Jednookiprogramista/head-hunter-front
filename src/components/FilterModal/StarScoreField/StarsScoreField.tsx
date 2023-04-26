import { FieldTitle } from '../components/FieldTitle';
import { BoxStarScoreCheckbox } from './BoxStarScoreCheckbox';
import './starsScoreField.css';

type StarsScoreFieldProps = {
  title: string;
};

export const StarsScoreField = ({ title }: StarsScoreFieldProps) => {
  return (
    <>
      <FieldTitle title={title} />
      <div className="box-star-container">
        <BoxStarScoreCheckbox score={5} />
        <BoxStarScoreCheckbox score={4} />
        <BoxStarScoreCheckbox score={3} />
        <BoxStarScoreCheckbox score={2} />
        <BoxStarScoreCheckbox score={1} />
      </div>
    </>
  );
};
