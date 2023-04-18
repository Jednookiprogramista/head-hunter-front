import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAxiosPrivate } from './hooks/useAxiosPrivate';
import { useAuth } from './hooks/useAuth';

export const AxiosExampleUsage = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any[] | null>(null);

  const refreshUserData = async () => {
    setUserData(null);
    try {
      if (auth) {
        const { data } = await axiosPrivate.get(`getURL/?user=${auth.id}`);
        // await axiosPrivate.post(`postURL/?user=${auth.id}`);
        // await axiosPrivate.delete(`deleteURL/?user=${auth.id}`);
        // await axiosPrivate.patch(`patchURL/?user=${auth.id}`);
        // await axiosPrivate.put(`putURL/?user=${auth.id}`);
        setUserData(data);
      }
    } catch (err) {
      localStorage.removeItem('user');
      window.location.reload();
      const { response } = err as AxiosError;
      if (response !== undefined && response.status === 404) {
        navigate('/404');
      } else {
        navigate('/error');
      }
    }
  };

  useEffect(() => {
    (async () => {
      await refreshUserData();
    })();
  }, [auth, setUserData, axiosPrivate]);

  if (userData === null) return <p>Czekaj...</p>;

  return <h1>{userData}</h1>;
};
