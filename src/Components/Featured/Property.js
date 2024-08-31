import React, { useState } from "react";
import PropertySlider from "./PropertySlider";

import { FaHouse } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import { MdOutlineApartment } from "react-icons/md";



const Property = () => {
  const [selectedType, setSelectedType] = useState("House");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <div className="relative">
        <div className="flex items-center justify-between w-full p-4">
          <div>
          <div className="flex items-center">
          <div className="bg-yellow-400 w-8 h-[1.5px] mr-2"> </div>
          <p className="font-medium text-[#F59E0B]">Ready to Sell!</p>
          </div>
          <h1 className="flex-1 text-4xl font-bold text-left">Featured House</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedType("House")}
              className={`${
                selectedType === "House" ? "bg-green-300" : "bg-gray-200"
              } px-4 py-2 rounded-full flex items-center `}
            >
              <FaHouse className="inline-block mr-1" />
              House
            </button>
            <button
              onClick={() => setSelectedType("Villa")}
              className={`${
                selectedType === "Villa" ? "bg-green-300" : "bg-gray-200"
              } px-4 py-2 rounded-full flex items-center `}
            >
              <MdVilla className="inline-block mr-1" />
              Villa
            </button>
            <button
              onClick={() => setSelectedType("Apartment")}
              className={`${
                selectedType === "Apartment" ? "bg-green-300" : "bg-gray-200"
              } px-4 py-2 rounded-full flex items-center `}
            >
              <MdOutlineApartment className="inline-block mr-1" />
              Apartment
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevClick}
              className="w-[40px] h-[32px] bg-[#E0E3EB] text-[#3C4563] p-2 rounded-full text-3xl"
            >
              &lt;
            </button>
            <button
              onClick={handleNextClick}
              className="w-[40px] h-[32px] bg-[#10B981] text-white p-2 rounded-full text-3xl"
            >
              &gt;
            </button>
          </div>
        </div>

        <PropertySlider
          selectedType={selectedType}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default Property;