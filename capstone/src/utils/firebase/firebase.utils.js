import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//firestore
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

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

//firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  //use userSnapshot.exists() to check whether the user is already in the database
  //if user not exists (create/set the document with the data from userAuth in my collection)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  //if user exists
  return userDocRef;
};
