import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu--wvDBon6Za52Sd-D00s5C_KeNLiPrk",
  authDomain: "login-b068c.firebaseapp.com",
  projectId: "login-b068c",
  storageBucket: "login-b068c.appspot.com",
  messagingSenderId: "226146898157",
  appId: "1:226146898157:web:15d87db6d3af41940cfce4",
  measurementId: "G-1DV69PETE5"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export const auth = getAuth(fire);


export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}