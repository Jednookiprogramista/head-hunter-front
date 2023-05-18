import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';

import { axiosPrivate } from '../../../api/axios';
import { useAuth } from '../../../hooks/useAuth';
import { useUserValidation } from '../../../hooks/useRegisterValidation';
import { PrimaryButton } from '../../Button/PrimaryButton';
import { getErrorMessage, ValidationErrorType } from '../utils/getErrorMessage';
import { MegaKLogo } from '../utils/megaKLogo';

import '../Auth.css';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location?.state as { from: string })?.from || '/';
  const { emailError } = useUserValidation({ email });

  useEffect(() => {
    setError('');
  }, [email, password]);

  useEffect(() => {
    if (auth) {
      navigate(from);
    }
  }, [auth, from, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!email || !password || emailError) {
        return;
      }
      setLoading(true);
      const { data } = (await axiosPrivate.post('auth/signin', {
        email,
        password,
      })) as { data: { id: string; accessToken: string; role: string | null } };
      localStorage.setItem('user', JSON.stringify({ id: data.id }));
      setAuth(data);
      setLoading(false);
      navigate('/');
    } catch (err: any) {
      setError(getErrorMessage(ValidationErrorType.LOGIN));
      setLoading(false);
    }
  };

  if (loading) return <p>ładowanie</p>;

  return (
    <form className="Auth__form" onSubmit={handleSubmit}>
      <img src={MegaKLogo} className="logo_header" alt="MegaK" />
      <TextField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        helperText={emailError && getErrorMessage(ValidationErrorType.EMAIL)}
        required
        margin="normal"
        fullWidth
      />
      <TextField
        label="Hasło"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <Typography variant="body2" className="forgot-pass">
        <Link to="/pass-recover">Zapomniałeś hasła?</Link>
      </Typography>
      <div className="Auth__button-container">
        <Typography variant="body2" className="redirect-paraph">
          Nie masz konta? <Link to="/register">Zarejestruj się</Link>
        </Typography>
        <PrimaryButton
          type="submit"
          disabled={!email || !password || !!error || emailError}
        >
          Zaloguj się
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
