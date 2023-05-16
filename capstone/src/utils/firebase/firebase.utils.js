import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk_5OnOJgr7SYpEPp0Kqu_3_oLUsuqT5Q",
  authDomain: "capstone-db-5a52d.firebaseapp.com",
  projectId: "capstone-db-5a52d",
  storageBucket: "capstone-db-5a52d.appspot.com",
  messagingSenderId: "326995023541",
  appId: "1:326995023541:web:aaf02a1ea5d3e707e5d0fc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
