import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../Firebase/firebase.init'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const ContextProvider = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const userLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch((err) => { })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        userRegister,
        userLogin,
        userLoginWithGoogle,
        userLogout,
        userUpdateProfile
    }

    return (
        <ContextProvider.Provider value={userInfo}>
            {children}
        </ContextProvider.Provider>
    )
}

export default AuthProvider