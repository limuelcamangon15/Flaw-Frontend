interface PasswordInputProps {
  onChange: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}

export default function PasswordInput({
  onChange,
  showPassword,
  setShowPassword,
}: PasswordInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="font-sans text-xs font-medium text-white/50 tracking-wide"
        >
          PASSWORD
        </label>
        {/*  <Link
                  href="/forgot-password"
                  className="font-sans text-xs text-red-400/70 hover:text-red-400 transition-colors"
                >
                  Forgot password?
                </Link>*/}
      </div>
      <div className="relative">
        <input
          onChange={(e) => onChange(e.currentTarget.value)}
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="••••••••"
          className="w-full rounded-xl bg-white/6 border border-white/10 px-4 py-3 pr-16 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 font-sans tracking-wide focus:border-red-600/60 focus:ring-2 focus:ring-red-600/10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors text-xs font-mono"
        >
          {showPassword ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}
