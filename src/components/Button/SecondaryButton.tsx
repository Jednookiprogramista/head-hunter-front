import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type SecondaryButtonProps = MuiButtonProps;

export const SecondaryButton = ({
  children,
  ...buttonProps
}: SecondaryButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        ':hover': { backgroundColor: '#13232d' },
        backgroundColor: '#172A35',
        color: '#f7f7f7',
        padding: '4px 10px',
        fontFamily: 'Catamaran',
        fontWeight: 'regular',
        fontSize: '16px',
        textTransform: 'none',
        borderRadius: '0px',
      }}
      {...buttonProps}
    >
      {children}
    </MuiButton>
  );
};
