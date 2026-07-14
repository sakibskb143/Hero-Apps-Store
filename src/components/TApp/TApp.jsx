import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { addToLocalS } from "../../Utilities/addToDB";
import { Link } from "react-router";

const TApp = ({ softwareInfo }) => {
  const { id, image, title, ratingAvg, downloads } = softwareInfo;

  

  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-base-100  shadow-2xl rounded-sm p-4 gap-5">
        <figure className="">
          <img
            className="rounded-sm h-55"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex flex-col gap-5">
          <h2 className="card-title text-[#001931]">{title}</h2>
          <div className="flex justify-between items-center  ">
            <button
            
              className="text-[#00D390] font-bold flex items-center gap-3 rounded-sm bg-[#F1F5E8] px-3 py-2"
            >
              <FiDownload />
              {`${(downloads / 1000000).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              })}M`}
            </button>
            <button className="text-[#FF8811] font-bold flex items-center gap-3 bg-[#F1F5E8] rounded-sm px-3 py-2">
              <FaStar></FaStar> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TApp;
