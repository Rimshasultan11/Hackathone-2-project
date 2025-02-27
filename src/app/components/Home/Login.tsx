"use client";
import dynamic from "next/dynamic";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { FaUserCircle } from "react-icons/fa";

// Dynamically import SignedIn and SignedOut
const SignedIn = dynamic<{ children?: React.ReactNode }>(
  () => import("@clerk/nextjs").then((mod) => mod.SignedIn as unknown as React.ComponentType),
  { ssr: false }
);
const SignedOut = dynamic<{ children?: React.ReactNode }>(
  () => import("@clerk/nextjs").then((mod) => mod.SignedOut as unknown as React.ComponentType),
  { ssr: false }
);

const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <FaUserCircle className="text-3xl cursor-pointer" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Login;

