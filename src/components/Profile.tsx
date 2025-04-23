"use client";

import { useAuth } from "@/shared/context/AuthContextP";
import MenuDropdown from "./MenuDropdown";
import { UserIdentity } from "./UserIdentity";

export function Profile() {
  const { session } = useAuth();

  if (!session) {
    return null;
  }

  const { user } = session;
  return (
    <div className="flex items-center gap-4">
      <UserIdentity user={user} />
      <MenuDropdown />
    </div>
  );
}
