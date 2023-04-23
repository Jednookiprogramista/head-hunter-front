import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type TextButtonProps = MuiButtonProps;

export const TextButton = ({ children, ...buttonProps }: TextButtonProps) => {
  return (
    <MuiButton
      variant="text"
      sx={{
        ':hover': { backgroundColor: 'transparent' },
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
