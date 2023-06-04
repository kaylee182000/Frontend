/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
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

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
