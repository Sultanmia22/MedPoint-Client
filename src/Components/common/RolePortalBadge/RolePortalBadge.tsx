import type { UserRole } from "@/lib/types/User.Interface";

interface RolePortalBadgeProps {
  role: UserRole;
}

const RolePortalBadge = ({ role }: RolePortalBadgeProps) => {
  const label =
    role === "doctor"
      ? "Doctor Portal"
      : role === "patient"
        ? "Patient Portal"
        : role === "admin"
          ? "Admin Portal"
          : null;

  if (!label) {
    return null;
  }

  return (
    <span
      aria-label={`${label} active`}
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success" />
      {label}
    </span>
  );
};

export default RolePortalBadge;
