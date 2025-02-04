import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      
        <SignInButton>
          <FaUserCircle className=" text-2xl cursor-pointer" />
        </SignInButton>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Login;
