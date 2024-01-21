"use server"
import {signIn, signOut} from '@/lib/auth'

export const handleGithubLogin = async () =>{
    "use server"
    await signIn("github", {
      redirectTo:"http://localhost:3000"
    });
}

export const handleLogout = async () =>{
  "use server"
  await signOut();
}
