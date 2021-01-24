import React, { createContext, useState, useEffect } from 'react'
import firebase from 'firebase'

import { auth } from '../firebase'

export interface AuthContextType {
  currentUser: firebase.User|null;
  signup(email: string, password: string): Promise<firebase.auth.UserCredential>;  
  login(email: string, password: string): Promise<firebase.auth.UserCredential>;  
}

export const AuthContext = createContext<Partial<AuthContextType>>({})

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<firebase.User|null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const signup = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password)
  const login = (email: string, password: string) => auth.signInWithEmailAndPassword(email, password)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{currentUser, signup, login}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
