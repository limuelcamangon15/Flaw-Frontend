"use client";

import { useState } from "react";
import Input from "../components/ui/input/Input";
import PageLayout from "../components/ui/layout/PageLayout";
import Image from "next/image";
import Link from "next/link";
import EmailInput from "../components/ui/input/EmailInput";
import PasswordInput from "../components/ui/input/PasswordInput";

export default function Signup() {
  // data
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // ui
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleSubmit() {
    alert(email + "  " + password);
  }

  return (
    <PageLayout>
      <div className="m-auto flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-sm flex flex-col gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <Image src="/flaw-logo.svg" alt="Flaw" width={44} height={44} />
            <h1 className="font-heading font-black text-white text-3xl tracking-tighter">
              FLAW
            </h1>

            <p className="font-sans text-white/40 text-sm">
              Sign up and experience seamless AI-powered bug tracking
            </p>
          </div>

          {/* Card */}
          <div className="flex flex-col gap-5 rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <Input
              label="First Name"
              onChange={setFirstName}
              htmlFor="firstName"
              id="firstName"
              name="firstName"
              placeholder="Your First Name"
            />

            <Input
              label="Last Name"
              onChange={setLastName}
              htmlFor="lastName"
              id="lastName"
              name="lastName"
              placeholder="Your Last Name"
            />

            <EmailInput onChange={setEmail} />

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
                Sign up
              </button>
            ) : (
              <button
                type="submit"
                className="mt-1 w-full rounded-xl bg-linear-to-r from-red-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-md opacity-50"
              >
                Sign up
              </button>
            )}
          </div>

          <p className="text-center font-sans text-sm text-white/30">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-400/80 hover:text-orange-400 transition-colors font-medium"
            >
              Log in to your workspace
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
