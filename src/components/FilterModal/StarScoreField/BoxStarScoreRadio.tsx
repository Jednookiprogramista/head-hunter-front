import { Radio } from '@mui/material';
import { BoxStarScore } from './BoxStarScore';

type BoxStarScoreRadioProps = {
  score: number;
};

export const BoxStarScoreRadio = ({ score }: BoxStarScoreRadioProps) => {
  return (
    <Radio
      value={score}
      style={{ padding: 0 }}
      icon={<BoxStarScore score={score} />}
      checkedIcon={<BoxStarScore score={score} selected />}
    />
  );
};
