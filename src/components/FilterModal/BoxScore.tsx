import { Box, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

type BoxScoreProps = {
  children: React.ReactNode;
};

export const BoxScore = ({ children }: BoxScoreProps) => {
  return (
    <Box
      sx={{
        width: 42.06,
        height: 27,
        backgroundColor: '#292A2B',
      }}
    >
      <Grid
        style={{
          display: 'flex',
          padding: '3px 5px',
          margin: '5px 0',
          justifyContent: 'center',
        }}
      >
        {children}
        <StarIcon
          style={{
            color: '#e02735',
            fontSize: '16px',
          }}
        />
      </Grid>
    </Box>
  );
};
