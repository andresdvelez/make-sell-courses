"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@nextui-org/react";
import React from "react";

export const SignInBtn = () => {
  return (
    // <form action={googlelogIn}>
    //   <Button
    //     radius="full"
    //     className="hover-btn"
    //     variant="bordered"
    //     type="submit"
    //   >
    //     <span className="z-10 font-medium">Sign in</span>
    //   </Button>
    // </form>
    <Button
      as={Link}
      href="/auth/sign-in"
      className="hover-btn"
      radius="full"
      variant="bordered"
      type="submit"
    >
      <span className="z-10 font-medium">Sign in</span>
    </Button>
  );
};
