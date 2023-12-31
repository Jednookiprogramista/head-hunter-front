import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';

import { useUserValidation } from '../../../hooks/useRegisterValidation';
import { axios } from '../../../api/axios';
import { getErrorMessage, ValidationErrorType } from '../utils/getErrorMessage';
import { MegaKLogo } from '../utils/megaKLogo';
import { PrimaryButton } from '../../Button/PrimaryButton';

import '../Auth.css';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepetition, setPasswordRepetition] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { emailError, passwordError, passwordRepetitionError } =
    useUserValidation({ email, password, passwordRepetition });

  useEffect(() => {
    setError('');
  }, [email, password, passwordRepetition]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (
        !email ||
        !password ||
        !passwordRepetition ||
        emailError ||
        passwordError ||
        passwordRepetitionError
      ) {
        return;
      }
      setLoading(true);
      await axios.post('auth/signup', { email, password });
      setError('');
      setPassword('');
      setPasswordRepetition('');
      setSuccess(true);
    } catch (err: any) {
      if (err.response.status === 409) {
        setError(getErrorMessage(ValidationErrorType.EMAIL_TAKEN));
      } else {
        setError(getErrorMessage(ValidationErrorType.DEFAULT));
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Ładowanie</p>;
  if (success)
    return (
      <div className="Auth__form">
        <img src={MegaKLogo} className="logo_header" alt="MegaK" />
        <Typography variant="body2" className="redirect-paraph success-paraph">
          Konto zostało utworzone <Link to="/login">Zaloguj się</Link>
        </Typography>
      </div>
    );

  return (
    <form className="Auth__form" onSubmit={handleSubmit}>
      <img src={MegaKLogo} className="logo_header" alt="MegaK" />
      <TextField
        label="Adres e-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        helperText={emailError && getErrorMessage(ValidationErrorType.EMAIL)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Hasło"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        helperText={
          passwordError && getErrorMessage(ValidationErrorType.PASSWORD)
        }
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Powtórz hasło"
        type="password"
        value={passwordRepetition}
        onChange={(e) => setPasswordRepetition(e.target.value)}
        error={passwordRepetitionError}
        helperText={
          passwordRepetitionError &&
          getErrorMessage(ValidationErrorType.PASSWORD_REP)
        }
        required
        fullWidth
        margin="normal"
      />
      <div className="Auth__button-container">
        {!success && (
          <Typography variant="body2" className="redirect-paraph">
            Posiadasz już konto? <Link to="/login">Zaloguj się</Link>
          </Typography>
        )}
        <PrimaryButton
          type="submit"
          disabled={
            !email ||
            !password ||
            !!error ||
            emailError ||
            passwordError ||
            passwordRepetitionError
          }
        >
          Zarejestruj się
        </PrimaryButton>
      </div>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
    </form>
  );
};
