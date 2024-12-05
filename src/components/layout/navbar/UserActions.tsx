import { Link } from "@/i18n/routing";
import React from "react";
import { LogOut } from "./LogOut";
import { auth } from "@/auth";
import { SignIn } from "./SignIn";

export const UserActions = async () => {
  const session = await auth();

  return (
    <div className="flex items-center gap-6">
      {session && session?.user ? (
        <>
          <Link href="/course/create">
            <span>Create</span>
          </Link>
          <LogOut />
          <Link href={`/user/${session?.user?.id}`}>
            <span>{session?.user?.name}</span>
          </Link>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};
