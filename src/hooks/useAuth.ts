import { useCallback, useState } from 'react';

const AUTH_KEY = 'chat_demo_authenticated';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(AUTH_KEY) === 'true',
  );

  const login = useCallback(() => {
    localStorage.setItem(AUTH_KEY, 'true');
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
}
