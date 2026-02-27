import { useEffect, useState } from 'react';

const AUTH_KEY = 'ai-chat-authenticated';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return window.localStorage.getItem(AUTH_KEY) === 'true';
  });

  useEffect(() => {
    if (isAuthenticated) {
      window.localStorage.setItem(AUTH_KEY, 'true');
      return;
    }

    window.localStorage.removeItem(AUTH_KEY);
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout
  };
}
