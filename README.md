# AI Chat Website (Rebuilt)

A clean frontend-only rebuild of the reference chat project using **Vite + React + TypeScript**.

## Why this architecture?

- **Vite + React + TypeScript (strict mode)** for stable and fast local development.
- **React Router** keeps login and chat flows separated and easy to understand.
- **Mock API layer (`src/services/api.ts`)** keeps network logic in one place so a real API can be plugged in later.
- **CSS Modules** provide simple styling without global naming conflicts.
- **Beginner-friendly folders** separate UI components, pages, hooks, services, and shared types.

## Folder structure

```txt
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

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (usually `http://localhost:5173`).

## Feature overview

- Login page with localStorage state (`ai_chat_logged_in`, `ai_chat_username`)
- Protected `/chat` route (redirects to `/login` if not logged in)
- Chat UI with user messages on the right and assistant messages on the left
- Loading/typing indicator while waiting for mock response
- Input disabled during assistant response
- Auto-scroll to newest message
- Responsive layout for desktop and mobile widths

## Test on mobile

1. Run `npm run dev`.
2. Open the app in Chrome.
3. Open DevTools (`F12` / `Cmd+Option+I`).
4. Toggle device toolbar (`Ctrl+Shift+M` / `Cmd+Shift+M`).
5. Pick a mobile preset and verify:
   - Full-width chat layout
   - Input remains accessible at bottom
   - No horizontal overflow

## Swap mock API for real API later

- File: `src/services/api.ts`
- Replace the `sendMessage` function internals with a real `fetch` request.
- Keep the same return shape:

```ts
export async function sendMessage(request: ChatRequest): Promise<ChatResponse>
```

This lets the rest of the app work without page/component changes.
