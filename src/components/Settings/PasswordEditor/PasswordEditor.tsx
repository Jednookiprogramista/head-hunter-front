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

import './PasswordEditor.css';

export const PasswordEditor = () => {
  const [newPassword, setNewPassword] = useState('');
  const [passwordRep, setPasswordRep] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { auth } = useAuth();

  const { passwordError, passwordRepetitionError } = useUserValidation({
    password: newPassword,
    passwordRepetition: passwordRep,
  });

  useEffect(() => {
    setError('');
  }, [oldPassword, passwordRep, newPassword]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (
        !newPassword ||
        passwordError ||
        !passwordRep ||
        passwordRepetitionError ||
        !oldPassword
      ) {
        return;
      }
      setLoading(true);
      await axios.patch(`user/${auth?.id}`, {
        newPassword,
        password: oldPassword,
      });
      setError('');
      setNewPassword('');
      setPasswordRep('');
      setOldPassword('');
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
        <h2 className="PasswordEditor__form__h2">Zmień hasło</h2>
        <TextField
          label="Nowe hasło"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
          value={passwordRep}
          onChange={(e) => setPasswordRep(e.target.value)}
          error={passwordError}
          helperText={
            passwordError && getErrorMessage(ValidationErrorType.PASSWORD_REP)
          }
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Podaj stare hasło"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <button
          className="PasswordEditor__button"
          type="submit"
          disabled={
            !newPassword ||
            passwordError ||
            !passwordRep ||
            passwordRepetitionError ||
            !oldPassword ||
            !!error
          }
        >
          Zapisz
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Zmiany zostały zapisane.</p>}
      </form>
    </SettingsMode>
  );
};
