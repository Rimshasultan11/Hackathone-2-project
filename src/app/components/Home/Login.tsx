// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import React from "react";
// import { FaUserCircle } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div>
//       <SignedOut>
//         <SignInButton>
//           <FaUserCircle className=" text-2xl cursor-pointer" />
//         </SignInButton>
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </div>
//   );
// };

// export default Login;
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { FaUserCircle } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div>
//       <SignedOut>
//         <SignInButton mode="modal">
//           <FaUserCircle className="text-3xl cursor-pointer" />
//         </SignInButton>
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </div>
//   );
// };

// export default Login;

"use client";

import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  const { isSignedIn } = useAuth(); // Clerk Authentication State

  return (
    <div>
      {!isSignedIn ? (
        <SignInButton mode="modal">
          <FaUserCircle className="text-3xl cursor-pointer" />
        </SignInButton>
      ) : (
        <UserButton />
      )}
    </div>
  );
};

export default Login;

