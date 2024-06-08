import React from "react";
import Feed from "./Components/Feed";
import Happening from "./Components/Happening";
import SideSection from "./Components/SideSection";

const Home = () => {
  return (
    <>
      <div className=" flex justify-between h-full items-start">
        <div className=" h-screen  sticky top-0">
          <SideSection />
        </div>
        <div className=" bg-[#2f3336] h-screen w-[1px] " />

        <Feed />
        <hr className="w-[1px] h-screen bg-[#2f3336]" />
        <Happening />
      </div>
    </>
  );
};

export default Home;
