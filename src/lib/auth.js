import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const {handlers, auth, signIn, signOut} = NextAuth({
    //auth for user sessions
    providers:[
        github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
})