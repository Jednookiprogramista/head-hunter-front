import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';

import { PrimaryButton } from '../../Button/PrimaryButton';
import { useUserValidation } from '../../../hooks/useRegisterValidation';
import { axiosPrivate } from '../../../api/axios';
import { getErrorMessage, ValidationErrorType } from '../utils/getErrorMessage';
import { MegaKLogo } from '../utils/megaKLogo';

import '../Auth.css';

export const PasswordRecover = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const loginLinkRef = useRef<HTMLAnchorElement>(null!);
  const { emailError } = useUserValidation({ email });

  useEffect(() => {
    if (success) {
      loginLinkRef.current.focus();
    }
  }, [success]);

  useEffect(() => {
    setError('');
  }, [email]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!email || emailError) {
        return;
      }
      setLoading(true);
      await axiosPrivate.get(`auth/recover/${email}`);
      setLoading(false);
      setSuccess(true);
    } catch (err: any) {
      setError(getErrorMessage(ValidationErrorType.DEFAULT));
      setLoading(false);
      setSuccess(false);
    }
  };

  if (loading) return <p>Ładowanie</p>;

  return (
    <form className="Auth__form" onSubmit={handleSubmit}>
      <img src={MegaKLogo} className="logo_header" alt="MegaK" />
      <h3>Zapomniałeś hasła?</h3>
      <p className="pass-recover-info">
        Podaj swój adres email, aby zresetować hasło
      </p>
      <TextField
        label="E-mail"
        type="email"
        value={email}
        error={emailError}
        helperText={emailError && getErrorMessage(ValidationErrorType.EMAIL)}
        onChange={(e) => setEmail(e.target.value)}
        required
        margin="normal"
        fullWidth
      />
      <div className="Auth__button-container">
        {!success && (
          <Typography variant="body2" className="redirect-paraph">
            Nie masz konta? <Link to="/register">Zarejestruj się</Link>
          </Typography>
        )}
        {success && (
          <Typography variant="body2" className="redirect-paraph">
            Link do zrestowania hasła przesłano na e-mail{' '}
            <Link to="/login">Zaloguj się</Link>
          </Typography>
        )}
        <PrimaryButton type="submit" disabled={!email || !!error || emailError}>
          Wyślij
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
