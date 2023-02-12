import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkruG4lXvix1BkNckNKYvHBAcmAhyJqSI",
  authDomain: "pokedex-react-c6a03.firebaseapp.com",
  projectId: "pokedex-react-c6a03",
  storageBucket: "pokedex-react-c6a03.appspot.com",
  messagingSenderId: "851383423177",
  appId: "1:851383423177:web:8388ee10ef203615cc3d18",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInAuthWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const createUserDocumentFromAuth = async (
  userAuth,
  otherDetails = {}
) => {
  const userRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    const { displayName, email } = userAuth;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...otherDetails,
      });
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }
  return userRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInAuthWithUserAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);
