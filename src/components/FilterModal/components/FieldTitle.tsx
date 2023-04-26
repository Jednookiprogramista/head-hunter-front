import { Box } from '@mui/material';

type FieldTitleProps = {
  title: string;
};

export const FieldTitle = ({ title }: FieldTitleProps) => (
  <Box
    sx={{
      margin: '20px 0 5px 0',
      '&:hover': {
        cursor: 'default',
      },
    }}
  >
    {title}
  </Box>
);
