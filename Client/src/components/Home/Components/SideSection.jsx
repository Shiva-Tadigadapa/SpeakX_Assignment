import React from "react";
import Xicon from "../../../assets/Twitter-new-logo.jpg";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { useMainDashContext } from "../../../Context/AppContext";
import { Link } from "react-router-dom";

const SideSection = () => {
  const { authUser } = useMainDashContext();
  return (
    <>
      {/* bg-[#181818]  */}
      <div className=" px-10 lg:flex flex-col items-start  w-full    sm:hidden md:hidden  hidden justify-between  h-full py-2">
        <div className=" flex flex-col  gap-6   ">
          <img src={Xicon} className="h-14  w-14 -ml-2" alt="profile" />
          <button className=" flex    rounded-full w-full  items-center gap-3 text-2xl font-semibold">
            {" "}
            <GoHomeFill className="text-3xl " />
            Home
          </button>
          <button className=" flex  items-center gap-3 text-xl  text-gray-300">
            <IoSearch className="text-2xl" />
            Explore
          </button>
          <button className=" flex  items-center gap-3 text-xl ">
            <IoNotificationsOutline className="text-2xl" /> Notifications
          </button>
          <button className=" flex  items-center gap-3 text-xl ">
            <MdMailOutline className="text-2xl" />
            Messages
          </button>
          <button className=" flex  items-center gap-3 text-xl ">
            <IoBookmarksOutline className="text-2xl" />
            Bookmarks
          </button>
          <Link to={`/profile/${authUser.handle}`}>
            <button className=" flex  items-center gap-3 text-xl ">
              <IoPersonOutline className="text-2xl" />
              Profile
            </button>
          </Link>
          <button className=" flex  items-center gap-3 text-xl ">
            {" "}
            <CiCircleMore className="text-2xl" />
            More
          </button>
          <Link to={`/post/new`} className=" flex  items-center gap-3 text-xl ">
            <button className=" bg-[#1d9bf0] h-12 w-48  rounded-full ">
              Post
            </button>
          </Link>
        </div>
        <Link to={`/logout`}>
          <div className="flex   pl-2 w-56  h-14 gap-3 hover:bg-[#181818] cursor-pointer      items-center rounded-full  text-lg  justify-center mb-2   text-white font-semibold">
            <img
              src={authUser?.picture}
              className="h-10 w-10 rounded-full"
              alt="profile"
            />
            <div className="   w-full ">
              <h1 className="text-[16px] font-semibold">{authUser?.name}</h1>
              <h2 className="text-gray-500 text-sm">@{authUser?.handle}</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideSection;
