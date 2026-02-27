const AUTH_KEY = 'ai-chat-auth';

export const useAuth = () => {
  const isLoggedIn = (): boolean => localStorage.getItem(AUTH_KEY) === 'true';

  const login = (): void => {
    localStorage.setItem(AUTH_KEY, 'true');
  };

  const logout = (): void => {
    localStorage.removeItem(AUTH_KEY);
  };

  return { isLoggedIn, login, logout };
};
