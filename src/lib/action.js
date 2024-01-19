"use server"
import {signIn} from '@/lib/auth'

export const handleGithubLogin = async () =>{
    "use server"
    await signIn("github");
}

export const handleLogout = async () =>{
  "use server"
  await signIn();
}
