import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
const Login = () => {
  return (
    <div>
      {/* <SignedOut>
      <FaUserCircle className=" text-2xl cursor-pointer" />
      </SignedOut> */}
      <SignedOut>
        <SignInButton>
          <FaUserCircle className=" text-3xl cursor-pointer" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Login;
