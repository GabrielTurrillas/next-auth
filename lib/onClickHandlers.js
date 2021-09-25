import { signIn, signOut } from 'next-auth/client'

export const handleSignIn = (event) => {
  event.preventDefault()
  signIn()
}

export const handleSignOut = (event) => {
  event.preventDefault()
  signOut()
}