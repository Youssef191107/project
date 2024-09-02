import React, { Fragment } from "react";
import Rectangle21 from "../../images/Rectangl21.png";
import Ellipse6 from "../../images/Ellipse6.png";
import { LiaStarSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const About = () => {

  return (
    <Fragment>
 <Swiper
        slidesPerView={1.7} // Show 1.5 slides at a time
        centeredSlides={true} // Center the active slide
        spaceBetween={30} // Adjust space between slides
        loop={true} // Enable infinite loop
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        
<div className="flex">
<SwiperSlide>

        <div className="relative  mb-12">

       
      <div className="flex-col items-center justify-between mx-auto gap-y-5">
        <div className="flex items-center justify-between mx-auto w-fit">
          <div className="W-[740px] H-[505px] relative">
            <img
              src={Rectangle21}
              alt="Rectangle21"
              className="w-[740px] h-[400px]"
            />
          </div> 
          <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
          <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
              <div className="w-[548px]">
                <p className="text-[#1B1C57] text-xl font-semibold mb-4">
                  Best! I got the house I wanted through Hounter
                </p>
                <p className="text-[#626687] opacity-75 text-sm  mb-4">
                  Through this website I can get a house with the type and
                  specifications I want very easily, without a complicated
                  process to be able to find information on the house we want.
                </p>
              </div>
              <div className="flex justify-between items-center  w-[548px] ">
                <div className="flex justify-between items-center  w-full">
                  <div className="flex ">
                    <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
                    <div className="flex-col ">
                      <p className="text-[#1B1C57] text-lg font-semibold">
                        John Doe
                      </p>
                      <p className="text-[#626687] opacity-75 text-sm ">
                        CEO of Hounter
                      </p>
                    </div>
                  </div>

                  <div className="flex  gap-2">
                    <LiaStarSolid className="text-[#F59E0B] text-3xl" />
                    <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</SwiperSlide>
<SwiperSlide>

      <div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>
<SwiperSlide>

<div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="relative  mb-12">

       
<div className="flex-col items-center justify-between mx-auto gap-y-5">
  <div className="flex items-center justify-between mx-auto w-fit">
    <div className="W-[740px] H-[505px] relative">
      <img
        src={Rectangle21}
        alt="Rectangle21"
        className="w-[740px] h-[400px]"
      />
    </div> 
    <div className="absolute left-1/2 top-[256px] transform -translate-x-1/2 mb-4">
    <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white">
        <div className="w-[548px]">
          <p className="text-[#1B1C57] text-xl font-semibold mb-4">
            Best! I got the house I wanted through Hounter
          </p>
          <p className="text-[#626687] opacity-75 text-sm  mb-4">
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated
            process to be able to find information on the house we want.
          </p>
        </div>
        <div className="flex justify-between items-center  w-[548px] ">
          <div className="flex justify-between items-center  w-full">
            <div className="flex ">
              <img src={Ellipse6} alt="Ellipse6" className="w-16 h-16" />
              <div className="flex-col ">
                <p className="text-[#1B1C57] text-lg font-semibold">
                  John Doe
                </p>
                <p className="text-[#626687] opacity-75 text-sm ">
                  CEO of Hounter
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
              <p className="text-[#3C4563] text-xl font-semibold">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</SwiperSlide>

</div>
      
      
</Swiper>
    </Fragment>
  );
};

export default About;
