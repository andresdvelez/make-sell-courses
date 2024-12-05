"use client";

import { logOut } from "@/app/actions/auth";
import { Button } from "@nextui-org/react";
import React from "react";

export const LogOut = () => {
  return (
    <form action={logOut}>
      <Button type="submit">Log out</Button>
    </form>
  );
};
