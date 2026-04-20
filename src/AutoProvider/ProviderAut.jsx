import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase auth/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AutContext = createContext();
const Auth = auth;

function ProviderAut({ children }) {
  const [user, setuser] = useState(null);

  const [loading, setloading] = useState(true);

  //  create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
    setloading(true);
  };
  //  sign in with eamil and  password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
    setloading(true);
  };
  //  ubdate user profile
  const updateDetails = (UpdateData) => {
    return updateProfile(Auth.currentUser, UpdateData);
  };
  //  save user to database
  useEffect(() => {
    const unsubcrib = onAuthStateChanged(Auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });
    return () => {
      unsubcrib();
    };
  });
  //  sign out user

  const signOot = () => {
    return signOut(Auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const AutInfo = {
    user,
    setuser,
    createUser,
    signIn,
    signOot,
    loading,
    setloading,
    updateDetails,
  };
  return <AutContext value={AutInfo}>{children}</AutContext>;
}

export default ProviderAut;
