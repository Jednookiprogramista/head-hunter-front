import { axios } from '../api/axios';
import { useAuth } from './useAuth';

export const useRefresh = (): (() => Promise<string | null>) => {
  const { setAuth } = useAuth();

  return async (): Promise<string | null> => {
    try {
      const { data } = (await axios.patch(
        'session',
        {},
        { withCredentials: true },
      )) as { data: string };
      setAuth((prev) => {
        if (!prev) return prev;
        return { ...prev, accessToken: data };
      });
      return data;
    } catch (err) {
      await axios.delete('session', { withCredentials: true });
      localStorage.removeItem('user');
      setAuth(null);
      return null;
    }
  };
};
