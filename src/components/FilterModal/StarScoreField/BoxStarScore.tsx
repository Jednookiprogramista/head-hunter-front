import StarIcon from '@mui/icons-material/Star';
import './boxStarScore.css';

type BoxScoreProps = {
  score: number;
  selected?: boolean;
};

export const BoxStarScore = ({ score, selected }: BoxScoreProps) => {
  return (
    <div className={`box-star-score-container ${selected ? 'selected' : ''}`}>
      {score}
      <StarIcon
        style={{
          color: selected ? '#f7f7f7' : '#e02735',
          fontSize: '16px',
        }}
      />
    </div>
  );
};
