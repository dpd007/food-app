import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCRFSTS8pbOirNi4LtTzn_dVtKyahFe-uw",
  authDomain: "foodie-6bf6f.firebaseapp.com",
  projectId: "foodie-6bf6f",
  storageBucket: "foodie-6bf6f.appspot.com",
  messagingSenderId: "147044091073",
  appId: "1:147044091073:web:71bceda51751ebcba40040",
  measurementId: "G-72RHH5JGQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
    });
};
export const logout = () => {
  signOut(auth);
};
