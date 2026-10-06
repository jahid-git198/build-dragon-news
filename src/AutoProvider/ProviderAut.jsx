import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase auth/Firebase.config";
import {
  ActionCodeOperation,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AutContext = createContext();

function ProviderAut({ children }) {
  const [user, setuser] = useState(null);

  const [loading, setloading] = useState(true);

  //  create user with email and password
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  sign in with eamil and  password
  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  ubdate user profile
  const updateDetails = (UpdateData) => {
    return updateProfile(auth.currentUser, UpdateData);
  };
  //  save user to database
  useEffect(() => {
    const unsubcrib = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });
    return () => {
      unsubcrib();
    };
  });
  //  sign out user

  const signOot = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      });
  };

  //  forgate password
  const sendResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //   google sign in

  const googlesignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  //  sing in with github

  const githubProvidere = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  //  reset password

  const AutInfo = {
    user,
    setuser,
    createUser,
    signIn,
    signOot,
    loading,
    setloading,
    updateDetails,
    sendResetEmail,

    googlesignIn,
    githubProvidere,
  };
  return <AutContext value={AutInfo}>{children}</AutContext>;
}

export default ProviderAut;
