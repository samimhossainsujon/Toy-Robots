import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup,
    signOut, onAuthStateChanged
} from 'firebase/auth';

import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [User, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);





    //==================================
    //creating user user email and password
    //==================================

    const CreateNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };



    //==================================
    // user email and password login function
    //==================================

    const UserLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };



    //==================================
    //User login by Google account
    //==================================

    const GoogleProvider = new GoogleAuthProvider();
    const UserGoogleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const LoggedGoogleUser = result.user;
               
            })
            .catch((error) => {
                // console.log(error);
            });
    };



    //===============================
    //User LogOut Account
    //===============================

    const UserLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    //==============================
    // user on state change function
    //================================


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (UserLogged) => {
            setUser(UserLogged);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);







    const AuthInfo = {
        CreateNewUser,
        UserLogin,
        UserGoogleLogin,
        UserLogOut,
        Loading,
        User,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
