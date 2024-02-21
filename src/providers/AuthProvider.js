import React, { useEffect, useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const signIn = (user, password) => {
    if (user === "hackthenorth" && password === "2024!") {
      setUser(true);
      return true;
    } else {
      alert("Username or password is incorrect! Try again.");
      return false;
    }
  };

  const signOut = () => {
    console.log("signed out");
    setUser(false);
  };

  const isSignedIn = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ signOut, signIn, isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );

  //screen
};
