# AI Chat Website (Frontend Rebuild)

A clean frontend-only rebuild of an AI chat interface using **Vite + React + TypeScript**.

## Tech stack

- Vite
- React + TypeScript (strict mode)
- React Router
- CSS Modules
- Mock fetch-style API layer in `src/services/api.ts`

## Project structure

```text
src/
  components/
    Chat/
      ChatInput.tsx
      MessageList.tsx
    Auth/
      AuthContext.tsx
      LoginForm.tsx
      ProtectedRoute.tsx
    UI/
      PageShell.tsx
  pages/
    Login.tsx
    Chat.tsx
  services/
    api.ts
  hooks/
    useAuth.ts
  types/
    chat.ts
    cssmodule.d.ts
  styles/
    global.css
    Layout.module.css
    Login.module.css
    Chat.module.css
  main.tsx
  App.tsx
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Features included

- Login screen with localStorage-based session state.
- Protected chat route (`/chat`) that redirects to `/login` when logged out.
- Chat layout with user messages on the right and AI messages on the left.
- Input fixed at the bottom of the chat container.
- Simulated AI typing/loading state.
- Auto-scroll to latest message.
- Responsive design for desktop + mobile widths.

## Test on mobile

1. Run `npm run dev`.
2. Open the app in Chrome/Edge.
3. Open DevTools (`F12`).
4. Toggle device toolbar (`Ctrl + Shift + M` on Windows/Linux, `Cmd + Shift + M` on Mac).
5. Select a mobile device profile and interact with the login/chat flow.

## Replace mock API later

Update `requestAiReply` inside:

- `src/services/api.ts`

This is the single abstraction point for AI requests, so replacing the mock delay/response with a real endpoint is straightforward.
