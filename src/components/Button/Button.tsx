import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type ButtonProps = MuiButtonProps;

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        ':hover': { backgroundColor: '#d12332' },
        backgroundColor: '#e02735',
        color: '#f7f7f7',
        padding: '6px 10px',
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
