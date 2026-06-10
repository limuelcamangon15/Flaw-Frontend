import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  color: "green" | "red" | "gray" | "blue";
  width?: string;
  disabled?: boolean;
}

const COLORS = {
  green: "from-emerald-900 to-green-800",
  red: "from-red-900 to-red-700",
  gray: "from-gray-700 to-gray-500",
  blue: "from-indigo-900 to-blue-700",
};

export default function Button({
  label,
  onClick,
  icon,
  color,
  width = "w-fit",
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={disabled ? () => {} : onClick}
      className={`${
        disabled
          ? "opacity-40 cursor-default"
          : "hover:scale-103 active:scale-80 cursor-pointer"
      } 
                font-sans px-4 py-3 rounded-xl 
                flex items-center justify-center gap-2
                bg-linear-to-r ${COLORS[color]} ${width}
                text-sm font-semibold text-white shadow-lg 
                transition-all duration-300`}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
}
