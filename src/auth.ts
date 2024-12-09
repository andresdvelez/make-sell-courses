// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user: { name, email, image }, profile }) {
      const googleId = profile?.sub;
      if (!googleId) {
        console.error("Profile ID is undefined");
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
          name,
          username: profile?.nickname,
          email,
          image,
          bio: profile?.bio || "",
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const googleId = profile?.sub;
        if (!googleId) {
          console.error("Profile ID is undefined");
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
