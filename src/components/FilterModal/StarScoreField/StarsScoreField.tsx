import StarIcon from '@mui/icons-material/Star';
import { useField } from 'formik';
import { FieldTitle } from '../components/FieldTitle';
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
      <div className="score">
        <input
          className="score-input"
          type="number"
          min={0}
          max={5}
          {...field}
        />
        / 5
        <StarIcon
          style={{
            color: '#e02735',
            fontSize: '16px',
          }}
        />
      </div>
    </>
  );
};
