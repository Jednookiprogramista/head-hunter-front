import React, { FormEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { PrimaryButton } from '../../Button/PrimaryButton';
import { useUserValidation } from '../../../hooks/useRegisterValidation';
import {
  getErrorMessage,
  ValidationErrorType,
} from '../../Auth/utils/getErrorMessage';
import './AddHRForm.css';

export const AddHRForm = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [hr, setHR] = useState({
    email: '',
    fullName: '',
    company: '',
    maxReservedStudents: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { emailError } = useUserValidation({ email: hr.email });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError('');
  }, [hr.email]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!hr.email || emailError) {
        return;
      }
      if (auth) {
        setLoading(true);
        await axiosPrivate.post(`hr?user=${auth.id}`, hr);
        setError('');
        setSuccess(true);
        setLoading(false);
        setHR({
          email: '',
          fullName: '',
          company: '',
          maxReservedStudents: '',
        });
      }
    } catch (err) {
      setError('Wystąpił błąd. Spróbuj ponownie.');
      setLoading(false);
    }
  };

  if (loading) return <h1>ładowanie</h1>;

  return (
    <form className="AddHR__form" onSubmit={handleSubmit}>
      <TextField
        id="mail"
        label="Adres email"
        type="email"
        name="mail"
        value={hr.email}
        onChange={(e) => setHR({ ...hr, email: e.target.value })}
        error={emailError}
        helperText={emailError && getErrorMessage(ValidationErrorType.EMAIL)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="fullName"
        label="Imię i nazwisko"
        type="text"
        name="fullName"
        value={hr.fullName}
        onChange={(e) => setHR({ ...hr, fullName: e.target.value })}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="company"
        label="Firma"
        type="text"
        name="company"
        value={hr.company}
        onChange={(e) => setHR({ ...hr, company: e.target.value })}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="maxReservedStudents"
        label="Maksymalna liczba zarezerwowanych studentów"
        type="number"
        name="maxReservedStudents"
        value={hr.maxReservedStudents}
        onChange={(e) => setHR({ ...hr, maxReservedStudents: e.target.value })}
        required
        fullWidth
        margin="normal"
        inputProps={{ min: 1 }}
      />
      <PrimaryButton
        type="submit"
        disabled={!hr.email || !!error || emailError}
      >
        Dodaj
      </PrimaryButton>
      {success && (
        <p>Dodano użytkownika, możesz dodać kolejnego użttkownika HR.</p>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};
