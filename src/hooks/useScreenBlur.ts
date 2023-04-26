import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScreenBlur = (backTo = '/'): { (e: SyntheticEvent): void } => {
  const navigate = useNavigate();

  return (e: SyntheticEvent) => {
    const target = e.currentTarget;
    setTimeout(() => {
      if (!target.contains(document.activeElement)) {
        navigate(backTo);
      }
    }, 0);
  };
};
