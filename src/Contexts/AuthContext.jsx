import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBaseStuffs/FirebaseConfig';
export const ContextProvider = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUSer => {
            setUser(currentUSer)
        })
        return () => unSubscribe()
    }, [])

    const createNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loggedUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    const data = { user,createNewUser,loggedUser,logOut }
    return (
        <ContextProvider.Provider value={data}>
            {children}
        </ContextProvider.Provider>
    )
};

export default AuthContext;