import { GitHub } from "@material-ui/icons";
import NextAuth from "next-auth";

export const {handlers, auth, signIn, signOut} = NextAuth({
    //auth for user sessions
    providers:[
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
})