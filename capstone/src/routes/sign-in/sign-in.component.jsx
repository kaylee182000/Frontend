/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //firebase google redirect ways
  // useEffect(() => {
  //   getRedirectResponse();
  // }, []);

  // const getRedirectResponse = async () => {
  //   const res = await getRedirectResult(auth);
  //   if (res) {
  //     const userDocRef = await createUserDocumentFromAuth(res.user);
  //   }
  // };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
