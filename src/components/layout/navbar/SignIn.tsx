"use client";

import { logIn } from "@/app/actions/auth";
import { Button } from "@nextui-org/react";
import React from "react";

export const SignIn = () => {
  return (
    <form action={logIn}>
      <Button
        radius="full"
        className="hover-btn"
        variant="bordered"
        type="submit"
      >
        <span className="z-10 font-medium">Sign in</span>
      </Button>
    </form>
  );
};
