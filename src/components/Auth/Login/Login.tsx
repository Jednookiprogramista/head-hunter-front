import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { axiosPrivate } from '../../../api/axios';
import { useAuth } from '../../../hooks/useAuth';
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
        <Link to="/register">Zapomniałeś hasła?</Link>
      </Typography>
      <Button
        type="submit"
        variant="contained"
        disabled={!email || !password || !!error}
        fullWidth
      >
        Zaloguj się
      </Button>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <Typography variant="body2" className="redirect-paraph">
        Nie masz konta? <Link to="/register">Zarejestruj się</Link>
      </Typography>
    </form>
  );
};
