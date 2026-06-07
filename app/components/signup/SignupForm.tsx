"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "../ui/input/Input";
import EmailInput from "../ui/input/EmailInput";
import PasswordInput from "../ui/input/PasswordInput";
import { Check, X } from "lucide-react";
import PageLayout from "../ui/layout/PageLayout";

export default function SignupForm() {
  // data
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // ui
  const [emailInteracted, setEmailInteracted] = useState(false);
  const [passwordInteracted, setPasswordInteracted] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = password.length >= 8 && password.length <= 15;
  const allowSubmit =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    isPasswordValid;

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

            <EmailInput
              onChange={(value) => {
                setEmail(value);

                if (!emailInteracted) {
                  setEmailInteracted(true);
                }
              }}
            />
            <span className="-mt-4 flex gap-1">
              {!isEmailValid && emailInteracted && (
                <>
                  <X className="text-red-800" size={15} />

                  <p
                    className={`${
                      isPasswordValid ? "text-green-500" : "text-red-800"
                    } text-xs`}
                  >
                    Invalid Email
                  </p>
                </>
              )}
            </span>

            <PasswordInput
              onChange={(value) => {
                setPassword(value);

                if (!passwordInteracted) {
                  setPasswordInteracted(true);
                }
              }}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            {/* Password Validation Hint */}
            {passwordInteracted && (
              <span className="-mt-4 flex gap-1">
                {isPasswordValid ? (
                  <Check
                    className={`${
                      isPasswordValid ? "text-green-500" : "text-red-800"
                    } `}
                    size={15}
                  />
                ) : (
                  <X className="text-red-800" size={15} />
                )}
                <p
                  className={`${
                    isPasswordValid ? "text-green-500" : "text-red-800"
                  } text-xs`}
                >
                  8-15 characters
                </p>
              </span>
            )}

            {/* Submit */}
            {allowSubmit ? (
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
