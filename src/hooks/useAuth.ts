import { useCallback, useMemo, useState } from 'react';

const LOGIN_STORAGE_KEY = 'isLoggedIn';

const getInitialAuthState = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(LOGIN_STORAGE_KEY) === 'true';
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getInitialAuthState);

  const login = useCallback(() => {
    window.localStorage.setItem(LOGIN_STORAGE_KEY, 'true');
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(LOGIN_STORAGE_KEY);
    setIsLoggedIn(false);
  }, []);

  return useMemo(
    () => ({ isLoggedIn, login, logout }),
    [isLoggedIn, login, logout]
  );
};
