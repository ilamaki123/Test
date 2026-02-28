function TypingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="max-w-[70%] rounded-2xl bg-white px-4 py-3 text-sm text-slate-500 shadow-sm sm:text-base">
        Assistant is typing...
      </div>
    </div>
  );
}

export default TypingIndicator;
