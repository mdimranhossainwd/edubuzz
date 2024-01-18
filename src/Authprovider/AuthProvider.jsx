import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../config/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleAuthentication = () => {
    return signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const firebaseData = {
    googleAuthentication,
    user,
    createUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={firebaseData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
