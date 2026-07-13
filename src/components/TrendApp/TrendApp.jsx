import React from "react";

import TApp from "../TApp/TApp";
import { Link } from "react-router";
const TrendApp = ({softwareData}) => {
    console.log('this is software data',softwareData);
    
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="text-center mb-5">
        <h1 className="text-4xl text-[#001931] font-bold mb-3">
          Trending Apps
        </h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {
            softwareData.slice(0,8).map(softwareInfo => <TApp key={softwareInfo.id} softwareInfo={softwareInfo}></TApp>)
        }
      </div>
      <div className="flex justify-center items-center">
        <Link to={'/apps'} className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-lg font-bold text-white rounded-xl px-10 py-3">Show All</Link>
      </div>
     
    </div>
  );
};

export default TrendApp;
