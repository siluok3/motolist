import React, { createContext, useState, useEffect } from 'react'
import firebase from 'firebase'

import { auth } from '../firebase'

export interface AuthContextType {
  currentUser: firebase.User|null;
  signup(email: string, password: string): Promise<firebase.auth.UserCredential>;  
}

export const AuthContext = createContext<Partial<AuthContextType>>({})

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<firebase.User|null>(null)

  const signup = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{currentUser, signup}}>
      {children}
    </AuthContext.Provider>
  )
}
