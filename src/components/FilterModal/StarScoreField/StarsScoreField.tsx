import { Box } from '@mui/material';
import { BoxStarScoreCheckbox } from './BoxStarScoreCheckbox';
import './starsScoreField.css';

type StarsScoreFieldProps = {
  title: string;
};

export const StarsScoreField = ({ title }: StarsScoreFieldProps) => {
  return (
    <>
      <Box
        sx={{
          margin: '20px 0 5px 0',
        }}
      >
        {title}
      </Box>
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
