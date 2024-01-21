import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers: { GET, POST }, 
    auth, // auth for user sessions
    signIn, 
    signOut
} = NextAuth({ 
    providers: [
        github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    callbacks: {
        async signIn(user, account, profile) {
            // Add any additional logic you need here
            return Promise.resolve(true); // Continue with the sign-in
        },
        async redirect(url, baseUrl) {
            // Redirect to the homepage (replace "/anasayfa" with your actual homepage route)
            return Promise.resolve("http://localhost:3000");
        },
    },
});