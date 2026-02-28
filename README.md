# Chat UI Demo (Frontend-only)

A beginner-friendly demo app built with **Vite + React + TypeScript + Tailwind + React Router**.
It recreates a ChatGPT-like layout and behavior with a mock chat API.

## Features

- `/login` route with a simple login form
- `/chat` protected route (redirects to login when not authenticated)
- Auth state stored in `localStorage`
- Responsive chat layout:
  - Desktop: centered container with max width
  - Mobile: full width
- Chat behavior:
  - User message appears instantly
  - Input disabled while waiting
  - Typing indicator shown while waiting
  - Mock assistant reply after artificial delay
  - Auto-scroll to latest message

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Project structure

```text
src/
  api/chat.ts            # mock chat API (replace later)
  components/
    ChatInput.tsx
    ChatMessage.tsx
    ProtectedRoute.tsx
    TypingIndicator.tsx
  hooks/useAuth.ts       # login/logout + localStorage auth state
  pages/
    ChatPage.tsx
    LoginPage.tsx
  App.tsx
  main.tsx
```

## Where to replace the mock API later

Replace `getMockChatResponse` in `src/api/chat.ts` with a real network call (for example using `fetch`):

1. Keep `handleSend` in `ChatPage` as-is.
2. Update `getMockChatResponse` to call your backend endpoint.
3. Return the assistant reply text from your backend and map it to the same function return type.
