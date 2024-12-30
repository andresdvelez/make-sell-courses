"use server";

import { signIn, signOut } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_EMAIL_QUERY } from "@/sanity/lib/queries";

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};

export const googlelogIn = async () => {
  await signIn("google");
};

export const credentialslogIn = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    // Fetch the user by email
    const dbUser = await client
      .withConfig({ useCdn: false })
      .fetch(AUTHOR_BY_EMAIL_QUERY, { email });

    return dbUser;
  } catch (error) {
    throw error;
  }
};
