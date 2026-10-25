"use client";

import { useSession } from "next-auth/react";
import type { UserRole } from "@/lib/types/User.Interface";
import { getValidRole } from "@/lib/utils/getValidRole";

const contentByRole: Record<Exclude<UserRole, null>, string> = {
  patient: "Trusted by 10,000+ Patients",
  doctor: "Join our network of trusted doctors",
  admin: "MedPoint platform overview",
};

const signedOutContent = "Trusted by 10,000+ Patients";

export default function TrustBadge() {
  const { data: session } = useSession();
  const role = getValidRole(session?.user.role);
  const content = role ? contentByRole[role] : signedOutContent;

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-primary" />
      <span>{content}</span>
    </div>
  );
}
