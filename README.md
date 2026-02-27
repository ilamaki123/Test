# AI Chat Website (Rebuilt)

A clean rebuild of the original `ai_chat_website` frontend using a stable, beginner-friendly setup.

## Tech Stack

- Vite
- React + TypeScript (strict mode)
- React Router
- CSS Modules
- Mock fetch-style API layer

## Project Structure

```text
src/
  components/
    Chat/
    Auth/
    UI/
  pages/
    Login.tsx
    Chat.tsx
  services/
    api.ts
  hooks/
    useAuth.ts
  types/
    chat.ts
  styles/
    global.css
    LoginPage.module.css
    ChatPage.module.css
  main.tsx
  App.tsx
```

## Features

- Login page with localStorage auth state
- Protected chat route (`/chat` requires login)
- ChatGPT-like chat layout
- User messages on right, AI messages on left
- Typing indicator and disabled input while waiting
- Auto-scroll to latest message
- API abstraction in `src/services/api.ts`

## Run Locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Test Responsive/Mobile View

1. Open app in browser.
2. Open DevTools.
3. Toggle device toolbar (mobile emulation).
4. Test login + chat flow on narrow widths.

The chat view becomes full-width on mobile and keeps touch-friendly spacing.

## Where to Replace API Later

Update `sendMessageToAi` in:

- `src/services/api.ts`

Right now it returns a delayed mock reply. Replace that function with a real `fetch` call when backend is ready.
