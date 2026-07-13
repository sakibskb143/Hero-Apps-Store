import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import TApp from "../../components/TApp/TApp";
import appError from '../../assets/App-Error.png'

const Apps = () => {
  const softwareData = useLoaderData();

  // Initially show all apps
  const [softwareDatas, setSoftwareDatas] = useState(softwareData);

  const handleOnClick = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filteredApps = softwareData.filter((app) =>
      app.title.toLowerCase().includes(searchText),
    );

    setSoftwareDatas(filteredApps);
  };

  return (
    <div className="bg-[#F1F5E8] h-full">
      <div className="max-w-7xl mx-auto py-10">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-4xl text-[#001931] font-bold mb-3">
            Our All Applications
          </h1>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[#001931] text-xl font-bold">
              ({softwareDatas.length}) Apps Found
            </h1>
          </div>

          <div>
            <label className="input focus-within:outline-none focus-within:ring-0 focus-within:border-gray-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>

              <input
                type="search"
                placeholder="Search apps..."
                onChange={handleOnClick}
              />
            </label>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {softwareDatas.length > 0 ? (
            softwareDatas.map((softwareInfo) => (
              <TApp key={softwareInfo.id} softwareInfo={softwareInfo} />
            ))
          ) : (
            <div className="col-span-full text-center text-xl font-semibold  flex flex-col items-center justify-center">
              <img src={appError} alt="" />
              <p className="text-[#627382]">
                Explore All Apps on the Market developed by us. We code for
                Millions
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
