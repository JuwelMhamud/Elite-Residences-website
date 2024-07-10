import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState(null)

    // create User
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User state
   useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('auth state changed')
        setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
   },[])
    // Login User

    const logInUser = ( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut User

    const logOutUser = ()=>{
        return signOut(auth)
    }
    const authValues = {
        user,
        createUser,
        logInUser,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={authValues} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;