import React, { Fragment } from "react";
import { IoBedSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Ellipse7 from "../../images/Ellipse7.png";
import Rectangle17 from "../../images/Rectangle17.png";
import Rectangle18 from "../../images/Rectangle18.png";
import Rectangle19 from "../../images/Rectangle19.png";
import Rectangle20 from "../../images/Rectangle20.png";


const Ready = () => {
  return (
    <Fragment>
      <section className="flex w-5/6 items-center justify-between mx-auto mt-44 mb-12">
        <div className="flex-col">
          <div className="flex  items-center">
            <div className="bg-yellow-400 w-8 h-[1.5px] mr-2"> </div>
            <p className="font-medium text-[#F59E0B]">Ready to Sell!</p>
          </div>
          <div className="flex-col items-start  ">
            <h1 className="mb-2 text-3xl font-semibold">
              Let’s tour and see our house!
            </h1>
            <p className="w-[313px] opacity-75 text-[#626687] font-normal mb-2">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
          </div>
          <div className="flex-col items-start w-full ">
            <p className="opacity-75 font-semibold text-[#1B1C57] mb-2">
              House Detail
            </p>
            <div className=" flex-wrap items-start justify-between h-[124px]  ">
              <div className="flex-col items-center gap-16 w-[250px] ">
                <div className="flex justify-between mb-8">
                  <div className="flex items-center gap-2  ">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-medium">5 Bedrooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-medium">3 Bedrooms</p>
                  </div>
                </div>

                <div className="flex  justify-between">
                  <div className="flex items-center gap-2">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-medium">1 Bedrooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-medium">2 Bedrooms</p>
                  </div>
                </div>
                <div className=" flex  w-[250px] mt-8 mb-8 h-1 bg-[#888b978b] mx-auto"></div>
                <div className="flex items-center w-[440px]">
                    <div className="flex items-center gap-3 mr-4">
                        <img src={Ellipse7}/>
                        <div className="flex-col">
                            <p className="text-black">Dianne Russell</p>
                            <p className="">Manager Director</p>
                        </div>

                    </div>
                    <button className="w-[109px] h-[48px]  flex items-center justify-center rounded-[32px] p-3 px-4 gap-5  bg-[#10B981]">
                      <FaPhoneAlt/>  Contact
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit h-[459px] ">
            <div className=" relative">

            <img src={Rectangle17} alt="Rectangle17"  className="w-[488px] h-[416px] " />
            <img src={Rectangle18} alt="Rectangle18"  className="absolute w-[296px] h-[168px] left-[-40px] bottom-[-40px] rounded" />
            <img src={Rectangle19} alt="Rectangle19"  className="absolute w-[96px] h-[80px] bottom-[-40px] left-[280px] rounded" />
            <img src={Rectangle20} alt="Rectangle20"  className="absolute w-[96px] h-[80px] bottom-[-40px] right-[0px] rounded" />
            </div>


            

        </div>
      </section>
    </Fragment>
  );
};

export default Ready;
