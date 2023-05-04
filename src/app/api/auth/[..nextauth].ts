import NextAuth from "next-auth";

export default NextAuth({
  providers: [],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user);
      return false;
    },
  },
});
