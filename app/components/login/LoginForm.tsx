"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmailInput from "../ui/input/EmailInput";
import PasswordInput from "../ui/input/PasswordInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit() {
    alert(email + "  " + password);
  }

  return (
    <div className="m-auto flex items-center justify-center min-h-screen px-6 py-24">
      <div className="w-full max-w-sm flex flex-col gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <Image src="/flaw-logo.svg" alt="Flaw" width={44} height={44} />
          <h1 className="font-heading font-black text-white text-3xl tracking-tighter">
            FLAW
          </h1>
          <p className="font-sans text-white/40 text-sm">
            Log in to your workspace
          </p>
        </div>

        {/* Card */}
        <div className="flex flex-col gap-5 rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
          {/* Email */}
          <EmailInput onChange={setEmail} />

          {/* Password */}
          <PasswordInput
            onChange={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* Submit */}
          {password.trim() !== "" && email.trim() !== "" ? (
            <button
              onClick={handleSubmit}
              type="submit"
              className="cursor-pointer mt-1 w-full rounded-xl bg-linear-to-r from-red-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-103 active:scale-80"
            >
              Log in
            </button>
          ) : (
            <button
              type="submit"
              className="mt-1 w-full rounded-xl bg-linear-to-r from-red-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-md opacity-50"
            >
              Log in
            </button>
          )}
        </div>

        {/* Sign up */}
        <p className="text-center font-sans text-sm text-white/30">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-orange-400/80 hover:text-orange-400 transition-colors font-medium"
          >
            Signup for free
          </Link>
        </p>
      </div>
    </div>
  );
}
