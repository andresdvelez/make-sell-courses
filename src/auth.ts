import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { client } from "./sanity/lib/client";
import {
  AUTHOR_BY_EMAIL_QUERY,
  AUTHOR_BY_GOOGLE_ID_QUERY,
} from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";
import { ZodError } from "zod";
import { comparePass } from "./utils/hashPass";
import { signInSchema } from "./lib/schemas/sign-in";
import { useAuthStore } from "./stores/user-store";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          // Fetch the user by email
          const existingUser = await client
            .withConfig({ useCdn: false })
            .fetch(AUTHOR_BY_EMAIL_QUERY, { email });

          if (!existingUser) {
            throw new Error("User not found");
          }

          const isPasswordValid = await comparePass(
            password,
            existingUser.hashPassword
          );

          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }

          useAuthStore.setState({ user: existingUser });

          return existingUser;
        } catch (error) {
          console.error("Login error:", error);

          if (error instanceof ZodError) {
            return null;
          }

          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider !== "google") {
        return true;
      }

      const googleId = profile?.sub;
      if (!googleId) {
        return false;
      }

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, {
          id: googleId,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: googleId,
          name: user.name,
          username: profile?.nickname,
          hashPassword: "",
          email: user.email,
          image: user.image,
          bio: profile?.bio || "",
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account?.provider === "google" && profile) {
        const googleId = profile?.sub;
        if (!googleId) {
          return token;
        }

        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, {
            id: googleId,
          });

        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
