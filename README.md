# AI Chat Website (Rebuilt)

A clean rebuild of the frontend-only AI chat website using Vite + React + TypeScript.

## Tech stack

- Vite
- React + TypeScript (strict mode)
- React Router
- CSS Modules
- Mocked fetch-style API abstraction (`src/services/api.ts`)

## Project structure

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
  types/
  styles/
  main.tsx
  App.tsx
```

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open the URL shown by Vite (usually `http://localhost:5173`).

## Test on mobile layout

1. Run `npm run dev`.
2. Open the app in Chrome/Edge.
3. Open DevTools → Toggle Device Toolbar.
4. Pick a mobile device profile (e.g., iPhone 12).
5. Verify:
   - Login form fits screen width.
   - Chat has no horizontal overflow.
   - Input and send button are easy to tap.

## Auth and routing flow

- Login state is stored in `localStorage` (`ai-chat-authenticated`).
- Username is stored in `localStorage` (`ai-chat-username`).
- `/chat` is protected and redirects to `/` if user is not logged in.

## Where to replace mock API later

- Edit `src/services/api.ts`.
- Replace `sendMessageToAssistant(prompt)` internals with a real `fetch()` call.
- Keep the same function signature to avoid changing UI code.
