import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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
initializeApp(firebaseConfig);
export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      return result.user;
    })
    .catch((error) => {
      console.log(error);
    });
};
// export const logout = () => {
//   signOut(auth).then(() => {
//     console.log("user signed out");
//   });
// };
