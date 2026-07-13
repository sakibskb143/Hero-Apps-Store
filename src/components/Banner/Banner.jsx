import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import hero from "../../assets/hero.png";
import Stat from "../Stat/Stat";

const Banner = () => {
  return (
    <div className=" pt-10 intel ">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-5 mb-5">
          <h1 className="text-5xl font-extrabold text-center ">
            We Build <br />
            <span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
              Productive </span>
            Apps
          </h1>
          <p className="text-center text-[#627382] ">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex gap-5 mb-10">
          <button className="flex gap-3 btn border-1 border-gray-400 text-xl">
            <FaGooglePlay className="text-2xl" />
            Google Play
          </button>
          <button className="flex gap-3 btn border-1 border-gray-400 text-xl">
            <IoLogoAppleAppstore className="text-2xl"></IoLogoAppleAppstore> App
            Store
          </button>
        </div>
        <div>
          <img src={hero} className="h-80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
