import React from 'react'
import col2 from '../../images/Rectangle23.png'
import imgg from "../../images/Elli6.png"
import Rectangle23 from '../../images/Rectangle22.png'
import Ellipse6 from '../../images/Ellipse7.png'
import col5 from "../../images/rec22.png"
import col6 from "../../images/Ellipse8.png"
import col7 from "../../images/rec23.png"
import col8 from "../../images/Ellopse9.png"
import { FaClock } from "react-icons/fa6";

const Section = () => {
  return (
    <div className='mb-[50px] overflow-hidden'>
       <div className=' w-[500px] h-[189px] top-[2985px] flex justify-center items-center gap-3 flex-col left-[509px] mt-10 mx-auto'>
       <div className=' w-8 h-[1px] bg-[#F59E0B] top-[2985px] left-[701px] flex justify-center items-center mx-auto '></div>
       <p className=' w-[350px] h-[18px] top-[2994px] left-[583px] text-center font-medium size-[14px] m-0 p-0 leading-[17.5px] text-[#F59E0B]'>See tips and trick from our partnership</p>
       <h2 className='w-[200px] h-[80px] font-bold size-[50px] leading-8 text-center  text-[#1B1C57] '>Find out more about selling and buying homes</h2>
       <button className='w-[150px] h-[46px] rounded-3xl size-3 px-4 py-3 bg-[#10B981] text-white'>More Artikel</button>
       </div>
       <div className='w-[1200px] h-[524px] mt-8 flex justify-between items-start mx-auto '>
        <div className='w-[572px] h-full'>
          <div className='w-[572px] h-[148px] flex justify-between items-center mb-4'>
            <div className='w-[200px] h-[144px] rounded-2xl '>
              <img src={Rectangle23}/>
            </div>
            <div className='w-[340px] h-[148px] '>
             <div className='w-full flex justify-between mb-3 items-center'>
             <img src={Ellipse6}/>
             <p className='w-[292px] h-[22px] font-normal text-[14px] leading-[22px] text-[#3C4563]'>Dianne Russell</p>        
            </div>
            <h2 className='w-[275px] h-[64px] mb-3 font-medium text-[18px] leading-8 text-[#1B1C57]'>The things we need to check when we want to buy a house</h2>
            <div className='w-full h-6 mb-3 flex gap-3 items-center '>
            <FaClock />
            <p className='w-[304px] h-6 font-normal text-[14px]  text-[#888B97]  '>4 min read | 25 Apr 2021</p>

            </div>
            </div>
            
          </div>       
          <div className='w-[572px] h-[148px] flex justify-between items-center mb-4'>
            <div className='w-[200px] h-[144px] rounded-2xl '>
              <img src={col5}/>
            </div>
            <div className='w-[340px] h-[148px] '>
             <div className='w-full flex justify-between items-center mb-3'>
             <img src={col6}/>
             <p className='w-[292px] h-[22px] font-normal text-[14px] leading-[22px] text-[#3C4563]'>Courtney Henry</p>        
            </div>
            <h2 className='w-[275px] h-[64px] font-medium text-[18px] mb-3 leading-8 text-[#1B1C57]'>7 Ways to distinguish the quality of the house we want to buy</h2>
            <div className='w-full h-6 flex gap-3 items-center mb-3 '>
            <FaClock />
            <p className='w-[304px] h-6 font-normal text-[14px] text-[#888B97]  '>6 min read | 24 Apr 2021</p>

            </div>
            </div>
            
          </div>       
          <div className='w-[572px] h-[148px] flex justify-between items-center mb-3'>
            <div className='w-[200px] h-[144px] rounded-2xl'>
              <img src={col7}/>
            </div>
            <div className='w-[340px] h-[148px] '>
             <div className='w-full flex justify-between items-center mb-3'>
             <img src={col8}/>
             <p className='w-[292px] h-[22px] font-normal text-[14px] leading-[22px] text-[#3C4563]'>Darlene Robertson</p>        
            </div>
            <h2 className='w-[275px] h-[64px] font-medium text-[18px] mb-3 leading-8 text-[#1B1C57]'>The best way to know the quality of the house we want to buy</h2>
            <div className='w-full h-6 flex gap-3 items-center mb-3'>
            <FaClock />
            <p className='w-[304px] h-6 font-normal text-[14px] text-[#888B97]'>2 min read | 24 Apr 2021</p>

            </div>
            </div>
            
          </div>       
        </div>
        <div className='w-fit h-[480px]'>
          <img className='w-full h-[280px] rounded-2xl' src={col2}/>
          <div className='w-[560px] h-[176px] mt-4 flex flex-col gap-4 '>
            <div className='flex w-full h-8 items-center justify-between'> 
              <img className='' src={imgg}/>
              <p className='font-normal text-[14px] w-[512px] h-[22px] text-[#3C4563] '>Cameron Williamson</p>
            </div>
            <h2 className='w-full h-8 font-medium size-6 text-[#1B1C57] leading-[32px] ' >12 Things to know before buying a house</h2>
            <p className='w-[560px] h-[48px] opacity-[75%] font-normal text-[14px] leading-[24px] text-[#626687] '>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
            <div className='w-[650px] h-6 flex gap-3 items-center '>
            <FaClock />
            <p className='w-[524px] h-[24px] font-normal size-[14px] leading-[24px] text-[#888B97]'>8 min read | 25 Apr 2021</p>


            </div>
          </div>

        </div>
        

       </div>
      
    </div>
  )
}

export default Section
