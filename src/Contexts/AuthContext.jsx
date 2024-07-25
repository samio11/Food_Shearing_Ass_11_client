import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBaseStuffs/FirebaseConfig';
const AuthProvider = createContext(null)
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUSer=>{
            setUser(currentUSer)
        })
        return ()=>unSubscribe()
    },[])
    
  const data = {user}
  return (
    <AuthProvider.Provider value={data}>
      {children}
    </AuthProvider.Provider>
  )
};

export default AuthContext;