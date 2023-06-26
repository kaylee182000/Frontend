import React from "react";
import { Icon } from "./";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icon.logo className="mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Radishes account and agree to our
          <br />
          <span className="font-bold">User Agreement and Privacy Policy</span>
        </p>

        {/* sign in form */}

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Already a Radishtor?{" "}
          <Link
            href={"/sign-in"}
            className="hover:text-zinc-800 text-sm underline-offset-4 font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
