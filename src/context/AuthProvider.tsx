import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';

interface State {
  id: string;
  accessToken: string;
}

export const AuthContext = createContext<{ auth: State | null, setAuth: Dispatch<SetStateAction<State | null>> }>({
  auth: null,
  setAuth: () => {
  },
});

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<State | null>(null);

  useEffect(() => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const user = JSON.parse(userJSON);
      setAuth(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      { children }
    </AuthContext.Provider>
  );
};
