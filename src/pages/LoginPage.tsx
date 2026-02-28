import { FormEvent, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface LoginPageProps {
  isAuthenticated: boolean;
  onLogin: () => void;
}

function LoginPage({ isAuthenticated, onLogin }: LoginPageProps) {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/chat';

  if (isAuthenticated) {
    return <Navigate to="/chat" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }

    onLogin();
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-900">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Enter any name to continue to chat.</p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
