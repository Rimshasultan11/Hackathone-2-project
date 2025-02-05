import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <FaUserCircle className=" text-3xl cursor-pointer" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* <FaUserCircle className=" text-2xl cursor-pointer" /> */}
    </div>
  );
};

export default Login;