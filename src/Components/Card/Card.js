import React from 'react'
import { AiOutlineSafety } from 'react-icons/ai'

const Card = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[380px] h-[400px] flex bg-white text-black rounded-lg  justify-center">
          <div className="flex-col items-center">
            <div className="w-[80px] h-[80px] bg-blue-500  flex items-center justify-center   rounded-full  mt-9">
              <AiOutlineSafety className="text-white text-4xl flex m-auto  justify-center     " />
            </div>
            <div className="text-2xl flex items-center justify-center  font-bold mt-4">Identify Verifactoin</div>
          </div>
        </div>
      </div>
  )
}

export default Card
