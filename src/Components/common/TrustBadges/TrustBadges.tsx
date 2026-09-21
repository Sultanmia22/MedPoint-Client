import { Clock, FolderLock, ShieldCheck } from "lucide-react";

const items = [
  { label: "Verified Doctors", icon: ShieldCheck },
  { label: "Secure & Private", icon: FolderLock },
  { label: "24/7 Support", icon: Clock },
];

type Props = {
  variant?: "default" | "onSecondary";
};

export default function TrustBadges({ variant = "default" }: Props) {
  const onSec = variant === "onSecondary";

  return (
    <div className="flex justify-center items-center flex-wrap gap-2">
      {items.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 ${
            onSec ? "bg-secondary-content/10" : "bg-secondary/10"
          }`}
        >
          <Icon size={18} className="shrink-0 text-accent" />
          <span
            className={`whitespace-nowrap text-xs ${
              onSec ? "text-secondary-content/70" : "text-base-content/70"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}