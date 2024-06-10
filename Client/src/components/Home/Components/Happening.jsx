import React from "react";
import { IoSearch } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useMainDashContext } from "../../../Context/AppContext";
const Happening = () => {
  const { SideSec } = useMainDashContext();
  return (
    <>
      <div className={`py-2 sticky top-0 border-l border-[#2f3336]   md:hidden sm:hidden lg:block hidden h-screen px-6 ${SideSec?'w-[30%]':'w-[55%]'}`}>
        <div className=" ">
          <div className="bg-[#202327] flex items-center justify-start  mt-2 rounded-full  w-[18rem] h-11 px-4 gap-3 ">
            <IoSearch className="text-2xl text-gray-500" />
            <input
              type="text"
              placeholder="Search Twitter"
              className=" h-10 text-sm   border-none active:outline-none outline-none bg-[#202327] focus:border-none   text-white"
            />
          </div>
        </div>
        <div className="  border-[1px] px-4 py-2 border-[#2f3336] rounded-xl  gap-4 flex flex-col mt-4 w-full ">
          <h1 className=" text-xl font-semibold">What's Happening</h1>
          <div className=" flex flex-col gap-3  ">
            <div className="    flex flex-col items-start justify-start  ">
              <p className=" text-sm -mb-1 text-[#71767b]">Trending in India</p>
              <h1 className="font-semibold text-[1.05rem]">
                Rest in peace sir
              </h1>
              <p className=" text-sm text-[#71767b]">41.4k posts</p>
            </div>
            <div className="    flex flex-col items-start justify-start  ">
              <p className=" text-sm -mb-1 text-[#71767b]">Trending in India</p>
              <h1 className="font-semibold text-[1.05rem]">
                #NeetUG24Controversy
              </h1>
              <p className=" text-sm text-[#71767b]">51.4k posts</p>
            </div>
            <div className="    flex flex-col items-start justify-start  ">
              <p className=" text-sm -mb-1 text-[#71767b]">
                Trending in Cricket
              </p>
              <h1 className="font-semibold text-[1.05rem]">#2024BTSFESTA</h1>
              <p className=" text-sm text-[#71767b] ">151.4k posts</p>
            </div>
          </div>
        </div>
        <div className="  border px-4 py-2 border-[#2f3336] rounded-xl  gap-4 flex flex-col mt-4 w-full ">
          <h1 className=" text-xl font-semibold">Who to follow</h1>
          <div>
            <div className="flex  h-14 gap-8 w-full rounded-full  text-lg items-center mb-2  justify-start text-white  font-semibold">
              <div className=" flex  items-center gap-2">
                <img
                  src="https://avatars.githubusercontent.com/u/77129645?v=4"
                  className="h-8 w-8 rounded-full"
                  alt="profile"
                />
                <div>
                  <h1 className="text-sm font-semibold">Shiva hello</h1>
                  <h2 className="text-gray-500 text-sm">@shivatadigadapa</h2>
                </div>
              </div>
              <button className="bg-white h-8 w-20  rounded-full text-xs items-center flex justify-center text-black font-semibold">
                Follow
              </button>
            </div>
            <div className="flex  h-14 gap-8 w-full rounded-full  text-lg items-center mb-2  justify-start text-white  font-semibold">
              <div className=" flex  items-center gap-2">
                <img
                  src="https://avatars.githubusercontent.com/u/77129645?v=4"
                  className="h-8 w-8 rounded-full"
                  alt="profile"
                />
                <div>
                  <h1 className="text-sm font-semibold">Shiva hello</h1>
                  <h2 className="text-gray-500 text-sm">@shivatadigadapa</h2>
                </div>
              </div>
              <button className="bg-white h-8 w-20  rounded-full text-xs items-center flex justify-center text-black font-semibold">
                Follow
              </button>
            </div>
            <div className="flex  h-14 gap-8 w-full rounded-full  text-lg items-center mb-2  justify-start text-white  font-semibold">
              <div className=" flex  items-center gap-2">
                <img
                  src="https://avatars.githubusercontent.com/u/77129645?v=4"
                  className="h-8 w-8 rounded-full"
                  alt="profile"
                />
                <div>
                  <h1 className="text-sm font-semibold">Shiva hello</h1>
                  <h2 className="text-gray-500 text-sm">@shivatadigadapa</h2>
                </div>
              </div>
              <button className="bg-white h-8 w-20  rounded-full text-xs items-center flex justify-center text-black font-semibold">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Happening;
