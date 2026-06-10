import React from "react";

interface SmallButtonProps {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export default function SmallButton({
  label,
  onClick,
  icon,
}: SmallButtonProps) {
  return (
    <button
      onClick={onClick}
      className="font-sans cursor-pointer px-3 py-3 rounded-xl 
                w-fit flex items-center justify-center gap-2
                bg-linear-to-r from-red-600 to-orange-500 
                text-sm font-semibold text-white shadow-lg 
                transition-all duration-300 hover:scale-103 active:scale-80"
    >
      {icon}
      {label}
    </button>
  );
}
