import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const registerUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = () => {
      setLoading(true);
      signInWithPopup(auth, googleProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
            setLoading(false);
         }
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const logOutUser = () => {
      return signOut(auth);
   };

   const authInfo = {
      user,
      loading,
      registerUser,
      logInUser,
      googleSignIn,
      logOutUser,
   };

   return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
