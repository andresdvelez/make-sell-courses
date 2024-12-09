import { Link } from "@/i18n/routing";
import React from "react";
import { LogOut } from "./LogOut";
import { auth } from "@/auth";
import { SignIn } from "./SignIn";
import { Avatar } from "@nextui-org/react";

export const UserActions = async () => {
  const session = await auth();

  return (
    <div className="flex items-center gap-6">
      {session && session?.user ? (
        <>
          <Link
            href="/course/create"
            className="flex items-center justify-center"
          >
            <span className="max-sm:hidden">Create</span>
            <i
              className="icon-[lucide--badge-plus] size-6 sm:hidden"
              role="img"
              aria-hidden="true"
            ></i>
          </Link>
          <LogOut />
          <Link
            href={`/user/${session?.id}`}
            className="flex items-center justify-center"
          >
            <Avatar
              fallback="AV"
              src={session.user?.image || ""}
              alt={`${session.user?.name} avatar` || ""}
            />
          </Link>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};
