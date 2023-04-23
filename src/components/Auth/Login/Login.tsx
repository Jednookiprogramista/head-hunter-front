import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';
import { axiosPrivate } from '../../../api/axios';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button/Button';

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
      if (!email || !password) {
        return;
      }
      setLoading(true);
      const { data } = (await axiosPrivate.post('session', {
        email,
        password,
      })) as { data: { id: string; accessToken: string } };
      localStorage.setItem('user', JSON.stringify({ id: data.id }));
      setAuth(data);
      setLoading(false);
      navigate('/');
    } catch (err: any) {
      const message = 'Nieprawidłowy e-mail lub hasło.';
      setError(message);
      setLoading(false);
    }
  };

  if (loading) return <p>ładowanie</p>;

  return (
    <form className="Auth__form" onSubmit={handleSubmit}>
      <img
        src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
        className="logo_header"
        alt="MegaK"
      />
      <TextField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit" disabled={!email || !password || !!error}>
          Zaloguj się
        </Button>
      </div>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
    </form>
  );
};
