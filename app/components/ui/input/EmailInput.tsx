interface EmailInputProps {
  onChange: (value: string) => void;
}

export default function EmailInput({ onChange }: EmailInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor="email"
        className="font-sans text-xs font-medium text-white/50 tracking-wide"
      >
        EMAIL
      </label>
      <input
        onChange={(e) => onChange(e.currentTarget.value)}
        type="email"
        id="email"
        name="email"
        placeholder="flaw@example.com"
        className="w-full rounded-xl bg-white/6 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 font-sans focus:border-red-600/60 focus:ring-2 focus:ring-red-600/10"
      />
    </div>
  );
}
