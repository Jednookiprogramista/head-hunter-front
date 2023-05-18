import React, { ChangeEvent, useState } from 'react';
import { UploadInput } from './UploadInput';
import './UploadStudentsList.css';
import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

export const UploadStudentsList = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);
  const [uploadResponse, setUploadResponse] = useState('');

  async function uploadStudentsList(
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setLoading(true);
      try {
        if (auth) {
          const formData = new FormData();
          formData.append('csvFile', file);
          const res = await axiosPrivate.post(
            'http://localhost:3001/student/import',
            formData,
            {
              headers: { 'Content-Type': 'multipart/form-data' },
            },
          );
          setUploadResponse(
            `Plik został wysłany. Dodano ${res.data.savedUsers} kursantów. Nie zapisano ${res.data.rejectedUsers} kursantów z powodu błędów w pliku CSV.`,
          );
          setLoading(false);
        }
      } catch (err) {
        setUploadResponse('Wystąpił błąd. Spróbuj ponownie.');
        setLoading(false);
      }
    }
  }

  if (loading) return <h1>ładowanie</h1>;

  return (
    <div className="UploadImage__box">
      <div>
        <h3 className="UploadImage__h2">Dodaj studentów z pliku CSV.</h3>
      </div>
      <div className="UploadImage__upload-box">
        {uploadResponse && (
          <div>
            <p className="upload_response">{uploadResponse}</p>
          </div>
        )}
        <div>
          {loading ? null : (
            <div className="UploadImg">
              {/* eslint-disable-next-line react/jsx-no-bind */}
              <UploadInput upload={uploadStudentsList} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
