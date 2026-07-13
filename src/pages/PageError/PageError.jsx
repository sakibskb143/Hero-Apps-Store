import React from "react";
import PageErrors from "../../assets/error-404.png";
import { Link } from "react-router";

const PageError = () => {
  return (
    <div className="col-span-full text-center text-xl font-semibold  flex flex-col items-center justify-center bg-[#F1F5E8] py-20">
      <img src={PageErrors} alt="" />
      <p className="text-3xl text-[#001931]">Oops, page not found!</p>
      <p className="text-[#627382]">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center items-center my-5">
        <Link
          to={"/"}
          className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-lg font-bold text-white rounded-xl px-10 py-3"
        >
          Go Back
        </Link>
       
      </div>
    </div>
  );
};

export default PageError;
