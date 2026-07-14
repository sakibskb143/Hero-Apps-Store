import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router";
import { getFromLS } from "../../Utilities/addToDB";
import InstallApp from "../../components/InstallApp/InstallApp";

const Installation = () => {
  const softwareData = useLoaderData();
  const [softwareDatas, setSoftwareDatas] = useState([]);

  useEffect(() => {
    const storeAppIds = getFromLS();

    const installedApps = softwareData.filter((software) =>
      storeAppIds.includes(software.id)
    );

    setSoftwareDatas(installedApps);
  }, [softwareData]);

 const handleHighToLow = () => {
  const data = [...softwareDatas].sort(
    (a, b) => b.downloads - a.downloads
  );

  setSoftwareDatas(data);
};

const handleLowToHigh = () => {
  const data = [...softwareDatas].sort(
    (a, b) => a.downloads - b.downloads
  );

  setSoftwareDatas(data);
};

  return (
    <div className="bg-[#F1F5E8] h-full">
      <div className="max-w-7xl mx-auto py-10 ">

        <div className="text-center mb-5">
          <h1 className="text-4xl text-[#001931] font-bold mb-3">
            Our All Applications
          </h1>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Sort */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[#001931] text-xl font-bold">
              ({softwareDatas.length}) Apps Found
            </h1>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 text-xl border border-gray-400 px-6 py-4 text-gray-400"
            >
              Sort By Size
              <RiArrowDropDownLine className="text-4xl" />
            </div>

            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
              <li className="hover:text-black text-gray-400" onClick={handleHighToLow}>
                <button>High to Low</button>
              </li>
              <li className="hover:text-black text-gray-400" onClick={handleLowToHigh}>
                <button>Low to High</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Installed Apps */}
        <div className="flex flex-col gap-5 ">
          {
            softwareDatas.length > 0 ? (
              softwareDatas.map((installApp) => (
                <InstallApp
                  key={installApp.id}
                  installApp={installApp}
                  setSoftwareDatas={setSoftwareDatas}
                />
              ))
            ) : (
              <h2 className="text-center text-xl font-bold text-gray-500">
                No installed apps found
              </h2>
            )
          }
        </div>

      </div>
    </div>
  );
};

export default Installation;