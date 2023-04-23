import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';

import { useUserValidation } from '../../../hooks/useRegisterValidation';
import { axios } from '../../../api/axios';
import { PrimaryButton } from '../../Button/PrimaryButton';

import '../Auth.css';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepetition, setPasswordRepetition] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const loginLinkRef = useRef<HTMLAnchorElement>(null!);
  const { emailError, passwordError, passwordRepetitionError } =
    useUserValidation({ email, password, passwordRepetition });

  useEffect(() => {
    setError('');
  }, [email, password, passwordRepetition]);

  useEffect(() => {
    if (success) {
      loginLinkRef.current.focus();
    }
  }, [success]);

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
        const message =
          'Podany adres email jest już zajęty, jeśli masz już konto zaloguj się.';
        setError(message);
      } else {
        const message =
          'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.';
        setError(message);
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Ładowanie</p>;

  return (
    <form className="Auth__form" onSubmit={handleSubmit}>
      <img
        src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
        className="logo_header"
        alt="MegaK"
      />
      <TextField
        label="Adres e-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        helperText={emailError && 'Podany adres e-mail jest nieprawidłowy.'}
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
          passwordError &&
          'Hasło musi zawierać conajmniej 8 znaków, w tym jedną zwykłą literę, dużą literę, cyfrę oraz któryś ze znaków specjalnych - "?", "!", "@", "#", "$", "%"'
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
        helperText={passwordRepetitionError && 'Podane hasła nie są jednakowe.'}
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
        {success && (
          <Typography variant="body2" className="redirect-paraph">
            Konto zostało utworzone <Link to="/login">Zaloguj się</Link>
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
