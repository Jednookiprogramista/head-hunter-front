import { useEffect, useState } from 'react';

const ISO_MAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!@#$%]).{8,100}$/;

export const useUserValidation = ({
  email, password, passwordRepetition, emailRepetition,
}: { email?: string, password?: string, passwordRepetition?: string, emailRepetition?: string }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRepetitionError, setPasswordRepetitionError] = useState(false);
  const [emailRepetitionError, setEmailRepetitionError] = useState(false);

  useEffect(() => {
    if (email && !ISO_MAIL_REGEX.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password && !PASSWORD_REGEX.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (passwordRepetition && password !== passwordRepetition) {
      setPasswordRepetitionError(true);
    } else {
      setPasswordRepetitionError(false);
    }
    if (emailRepetition && email !== emailRepetition) {
      setEmailRepetitionError(true);
    } else {
      setEmailRepetitionError(false);
    }
  }, [email, password, passwordRepetition, emailRepetition]);

  return {
    emailError, passwordError, passwordRepetitionError, emailRepetitionError,
  };
};
