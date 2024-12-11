import { Link } from "@/i18n/routing";
import React from "react";
import { LogOut } from "./LogOut";
import { auth } from "@/auth";
import { SignIn } from "./SignIn";
import { Avatar } from "@nextui-org/react";

export const UserActions = async () => {
  const session = await auth();

  return (
    <div className="flex items-center">
      {session && session?.user ? (
        <>
          <Link
            href="/app/course/create"
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
            href={`/app/user/${session?.id}`}
            className="flex items-center justify-center"
          >
            <Avatar
              src={session.user?.image}
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
