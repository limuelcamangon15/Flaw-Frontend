interface RolePickerProps {
  role: "QA" | "DEVELOPER";
  setRole: (value: "QA" | "DEVELOPER") => void;
}

const roles = [
  {
    key: "QA" as const,
    label: "QA",
    activeClass:
      "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg",
  },
  {
    key: "DEVELOPER" as const,
    label: "DEVELOPER",
    activeClass:
      "bg-gradient-to-r from-orange-600 to-yellow-400 text-white shadow-lg",
  },
];

export default function RolePicker({ role, setRole }: RolePickerProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-xs font-medium text-white/50 tracking-wide uppercase">
        Role
      </label>
      <div className="flex w-full gap-2 p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
        {roles.map((r) => {
          const isActive = role === r.key;

          return (
            <button
              key={r.key}
              onClick={() => setRole(r.key)}
              className={[
                "flex-1 py-2 rounded-xl font-heading text-sm transition-all duration-300 hover:scale-102 active:scale-90 cursor-pointer",
                isActive
                  ? r.activeClass
                  : "bg-white/5 text-white/70 hover:bg-white/10",
              ].join(" ")}
            >
              {r.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
