import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { useUserValidation } from '../../../hooks/useRegisterValidation';
import { axios } from '../../../api/axios';

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
      await axios.post('user', { email, password });
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

  if (loading) return <p>ładowanie</p>;

  return (
    <form className="Auth__form" onSubmit={handleSubmit}>
      <h2>Zarejestruj się</h2>
      <TextField
        label="Adres email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        helperText={emailError}
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
        helperText={passwordError}
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
        helperText={passwordRepetitionError}
        required
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!email || !password || !passwordRepetition || !!error}
        fullWidth
      >
        Zarejestruj się
      </Button>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <Typography variant="body2" className="redirect-paraph">
        Posiadasz już konto? <Link to="/login">Zaloguj się</Link>
      </Typography>
    </form>
  );
};
