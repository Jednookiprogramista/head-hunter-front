import { Checkbox } from '@mui/material';
import { BoxStarScore } from './BoxStarScore';

type BoxStarScoreCheckboxProps = {
  score: number;
};

export const BoxStarScoreCheckbox = ({ score }: BoxStarScoreCheckboxProps) => {
  return (
    <Checkbox
      style={{ padding: 0 }}
      icon={<BoxStarScore score={score} />}
      checkedIcon={<BoxStarScore score={score} selected />}
    />
  );
};
