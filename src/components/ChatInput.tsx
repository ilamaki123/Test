import { FormEvent, useState } from 'react';

interface ChatInputProps {
  disabled: boolean;
  onSend: (message: string) => Promise<void>;
}

function ChatInput({ disabled, onSend }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = value.trim();
    if (!trimmed || disabled) {
      return;
    }

    setValue('');
    await onSend(trimmed);
  };

  return (
    <form className="flex w-full gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-slate-100 sm:text-base"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300 sm:text-base"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
