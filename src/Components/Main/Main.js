import React, { Fragment } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import logo2 from "../../images/traveloka_logo2.png";
import logo3 from "../../images/traveloka_logo3.png";
import logo4 from "../../images/traveloka_logo4.png";
import logo5 from "../../images/traveloka_logo5.png";
import Ellipse4 from "../../images/Ellipse4.png";
import Ellipse5 from "../../images/Ellipse5.png";
import Ellipse6 from "../../images/Ellipse6.png";
import Rectangle12 from "../../images/Rectangle12.png";

const Main = () => {
  return (
    <Fragment>
      <main className="flex w-full items-center mx-auto">
        <div className="flex-col ml-32 ">
          <div className="flex-col ">
            <h1
              className="w-[240px] h-[150px] text-[#1B1C57] font-semibold text-4xl"
              style={{ lineHeight: "50px" }}
            >
              find the place to live your dreams easily here
            </h1>
            <p
              className="w-[386px] h-[56] opacity-75 text- #626687] font-normal text-lg mt-3"
              style={{ lineHeight: "28px" }}
            >
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </p>
          </div>
          <div className="flex justify-between w-[496px] h-[56px] border-1 border-solid border-gray-500 rounded-[32px] p-1 pl-6 pr-6  gap-4 mb-3">
            <input
              type="text"
              placeholder="Search for the location you want!"
              className=""
            />
            <button className="w-[109px] h-[48px]  flex items-center justify-center rounded-[32px] p-3 px-4 gap-1 bg-[#10B981]">
              Search
              <FaGreaterThan />
            </button>
          </div>
          <div className="flex-col gap-y-3 ">
            <p className="w-[120px] font-normal text-[#888B97]">
              Our Partnership{" "}
            </p>
            <div className="flex gap-x-8 ">
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
            </div>
          </div>
        </div>
        <div
          className="bg-[url('/image6.png')] bg-cover w-[720px] h-[720px] relative"
          style={{ marginLeft: "auto" }}
        >
          <span className="absolute   w-1 h-[66px] top-[141.5px] left-32 z-10 bg-[#EF4444] "></span>
          <span className="absolute   w-[50px] h-1 top-[141.5px] left-32 z-10 bg-[#EF4444] "></span>
          <span className="absolute   w-[50px] h-1 top-[204.5px] right-48 z-10 bg-[#F59E0B] "></span>
          <span className="absolute   w-1 h-[66px] top-[204.5px] right-48 z-10 bg-[#F59E0B] "></span>
          <span className="absolute   w-[50px] h-1 top-[409.5px] right-48 z-10 bg-[#3B82F6] "></span>
          <span className="absolute   w-1 h-[66px] top-[409.5px] right-48 z-10 bg-[#3B82F6] "></span>

          <div className="absolute top-[568px]  left-14">
            <div className="flex gap-4">
              <div className="w-[328px] h-[104px] rounded-[32px] p-6 bg-white relative">
                <img
                  className="absolute w-[95px] h-[95px] top-[9px] left-[14px] border-3 border-white"
                  src={Ellipse4}
                />
                <img
                  className="absolute w-[95px] h-[95px] top-[9px] left-[42px] border-3 border-white"
                  src={Ellipse5}
                />
                <img
                  className="absolute w-[95px] h-[95px] top-[9px] left-[70px] border-3 border-white"
                  src={Ellipse6}
                />
                <div className="absolute top-[25px] left-[150px]">
                  <p className="w-[152px] h-[24px] font-lexend font-semibold text-[16px] leading-[24px] text-[#1B1C57]">
                    1K+ People
                  </p>{" "}
                  <p className="w-[172px] h-[20px] font-lexend font-normal text-[12px] leading-[20px] text-[#68799F]">
                    Successfully Getting Home
                  </p>
                </div>
              </div>
              <div className="w-[201px] h-[104px] rounded-[32px] p-6 bg-white relative">
                <img src={Rectangle12} className="w-[65px] h-[65px]" />
                <div className="absolute top-[25px] left-[100px]">
                  <p className="w-[95px] h-[24px] font-lexend font-semibold text-[16px] leading-[24px]">
                    56 Houses
                  </p>
                  <p className="w-[94px] h-[20px] font-lexend font-normal text-[12px] leading-[20px] text-[#68799F]">
                    Sold Monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
