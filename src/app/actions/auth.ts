"use server";

import { signIn, signOut } from "@/auth";

export const logOut = async () => {
  await signOut({ redirectTo: "/app" });
};

export const logIn = async () => {
  await signIn("google");
};
