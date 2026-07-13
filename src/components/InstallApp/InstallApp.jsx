import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { removeFromLS } from "../../Utilities/addToDB";

const InstallApp = ({ installApp,setSoftwareDatas }) => {
  const {
    id,
    image,
    title,
    downloads,
    ratingAvg,
    size,
  } = installApp;

  const handleRemoveFromLocalStorage = (id) => {
    removeFromLS(id);

    setSoftwareDatas((preData)=> preData.filter(predata => predata.id !== id));
  };

  return (
    <div className="flex flex-row gap-5 p-4 bg-white rounded-2xl">
      
      {/* Image */}
      <div>
        <img
          className="w-25 h-25 rounded-xl"
          src={image}
          alt={title}
        />
      </div>

      {/* Details */}
      <div className="flex justify-between items-center flex-1">
        <div className="flex flex-col gap-5">
          
          <h1 className="text-[#001931] text-2xl font-bold">
            {title}
          </h1>

          <div className="flex items-center gap-5 text-xl">

            {/* Downloads */}
            <button className="text-[#00D390] font-bold flex items-center gap-3 rounded-sm bg-[#F1F5E8] px-3 py-2">
              <FiDownload />
              {(downloads / 1000000).toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })}
              M
            </button>


            {/* Rating */}
            <button className="text-[#FF8811] font-bold flex items-center gap-3 bg-[#F1F5E8] rounded-sm px-3 py-2">
              <FaStar />
              {ratingAvg}
            </button>


            {/* Size */}
            <h1 className="text-gray-400">
              {size} MB
            </h1>

          </div>

        </div>


        {/* Remove Button */}
        <button
          onClick={() => handleRemoveFromLocalStorage(id)}
          className="btn bg-[#00D390] text-white text-xl"
        >
          Uninstall
        </button>

      </div>
    </div>
  );
};

export default InstallApp;