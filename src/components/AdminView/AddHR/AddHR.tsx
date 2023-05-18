import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Header } from '../../layout/header/Header';
import { AddHRForm } from './AddHRForm';

export const AddHR = () => {
  const { auth } = useAuth();

  const [selected, setSelected] = useState<number | null>(2);
  if (auth?.role !== 'admin') {
    localStorage.removeItem('user');
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="first-bar">
          <Link to="/admin/add-students" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="first-bar-buttons"
              onClick={() => setSelected(1)}
              style={
                selected === 1 || null ? { borderBottom: '2px solid red' } : {}
              }
            >
              <span className="des-button">Dodaj kursantów</span>
            </button>
          </Link>
          <Link to="/admin/add-hr" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="first-bar-buttons"
              onClick={() => setSelected(2)}
              style={
                selected === 2 || null ? { borderBottom: '2px solid red' } : {}
              }
            >
              <span className="des-button">Dodaj HR</span>
            </button>
          </Link>
        </div>
        <div className="second-bar-conv">
          <AddHRForm />
        </div>
      </div>
    </>
  );
};
