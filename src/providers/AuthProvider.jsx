
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

 const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState (true);

    //create user
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //sign in
    const signInUser =(email,password)=>{
        setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
    }

    //signinwithGoogle
    const signInWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    //Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    
    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('observing current user inside useEffect of AuthProvider', currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])



    const authInfo = {user, createUser, signInUser,logOut,loading,signInWithGoogle};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}

/**
 * 
 * 1. create contex and export it (karon ata onno component a use korbo import kore)
 * 2. set provider with valueimport auth from './../firebase/firebase.config';

 * 3. use the AuthProvider in the main.jsx
 * 4. access children in the AuthProvider component as children and 
 * use it in the middle of the Provider
 * 
 * 
 * ** */