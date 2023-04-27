import React, { FormEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { axios } from '../../../api/axios';
import { useUserValidation } from '../../../hooks/useRegisterValidation';
import { useAuth } from '../../../hooks/useAuth';
import { SettingsMode } from '../SettingsMode/SettingsMode';
import {
  getErrorMessage,
  ValidationErrorType,
} from '../../Auth/utils/getErrorMessage';

import './EmailEditor.css';

export const EmailEditor = () => {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { auth } = useAuth();

  const { emailError } = useUserValidation({
    email: newEmail,
  });

  useEffect(() => {
    setError('');
  }, [password, newEmail]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!newEmail || emailError || !password) {
        return;
      }
      setLoading(true);
      // await axios.patch(`user/${auth?.id}`, {
      //   newEmail,
      //   password,
      // });
      setError('');
      setNewEmail('');
      setPassword('');
      setLoading(false);
      setSuccess(true);
    } catch (err: any) {
      const message =
        err.response.data.message ||
        getErrorMessage(ValidationErrorType.DEFAULT);
      setSuccess(false);
      setError(message);
      setLoading(false);
    }
  };

  if (loading) return <p>ŁADOWANIE</p>;

  return (
    <SettingsMode>
      <form className="PasswordEditor__form" onSubmit={handleSubmit}>
        <h2 className="PasswordEditor__form__h2">Zmień email</h2>
        <TextField
          label="Nowy email"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
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
          required
          fullWidth
          margin="normal"
        />
        <button
          className="PasswordEditor__button"
          type="submit"
          disabled={!newEmail || emailError || !password || !!error}
        >
          Zapisz
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Zmiany zostały zapisane.</p>}
      </form>
    </SettingsMode>
  );
};
