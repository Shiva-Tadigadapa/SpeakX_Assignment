import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useMainDashContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import IconTweet from "../../assets/Twitter-new-logo.jpg";
import AuthSection from "./AuthUtils/AuthSection";
import SignUp from "./SignUp";
const SignIn = ({ CraModal, handleCraModalUpdate }) => {
  // const { authUser, setAuthUser } = useMainDashContext();
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  const [CraModal2, setCraModal2] = useState(false);

  return (
    <>
      <div className="flex items-center justify-around gap-10 h-screen w-full">
        <div className="hidden lg:block h-[20rem] w-[20rem]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="">
            <g>
              <path
                fill="white"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-10 mb-6">
            <h1 className="text-6xl font-extrabold tracking-wide text-[#e7e9ea]">
              Happening now
            </h1>
            <h2 className="text-3xl font-bold">Join today.</h2>
          </div>
          <AuthSection />
        </div>
      </div>

      {CraModal && (
        <SignUp
          setCraModal2={setCraModal2}
          handleCraModalUpdate={handleCraModalUpdate}
          CraModal2={CraModal2}
        />
      )}
    </>
  );
};

export default SignIn;
