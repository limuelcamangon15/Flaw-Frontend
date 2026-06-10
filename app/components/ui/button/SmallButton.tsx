import React from "react";

interface SmallButtonProps {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  color: "green" | "red" | "gray" | "blue";
}

const COLORS = {
  green: "from-emerald-900 to-green-800",
  red: "from-red-900 to-red-700",
  gray: "from-gray-700 to-gray-500",
  blue: "from-indigo-900 to-blue-700",
};

export default function SmallButton({
  label,
  onClick,
  icon,
  color,
}: SmallButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`font-sans cursor-pointer px-4 py-3 rounded-xl 
                w-fit flex items-center justify-center gap-2
                bg-linear-to-r ${COLORS[color]}
                text-sm font-semibold text-white shadow-lg 
                transition-all duration-300 hover:scale-103 active:scale-80`}
    >
      {icon}
      {label}
    </button>
  );
}
