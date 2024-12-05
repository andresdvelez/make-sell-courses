"use client";

import { logIn } from "@/app/actions/auth";
import { Button } from "@nextui-org/react";
import React from "react";

export const SignIn = () => {
  return (
    <form action={logIn}>
      <Button className="text-black" type="submit">
        Sign In
      </Button>
    </form>
  );
};
