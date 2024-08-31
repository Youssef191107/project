import React from 'react';
import { IoMdFlame } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";


const colorClasses = {
    red: 'bg-red-200 text-red-800',
    blue: 'bg-blue-200 text-blue-800',
    green: 'bg-green-200 text-green-800',
    // Add more colors as needed
  };
  
const PropertyCard = ({ image, statusLabel, statusColor, title, price, agent, location, agentImage }) => {

    const statusClasses = statusColor === 'red' ? 'bg-red-200 text-red-800' :
    statusColor === 'blue' ? 'bg-blue-200 text-blue-800' :
    'bg-green-200 text-green-800';

    const renderIcon = () => {
        switch (statusLabel) {
          case 'Popular':
            return <IoMdFlame className="inline-block mr-1" />;
          case 'New House':
            return <FaHouse className="inline-block mr-1" />;
          case 'Best Deals':
            return <FaWallet className="inline-block mr-1" />;
          default:
            return null;
        }
      };

  return (
    <div className="min-w-[250px] m-4  bg-white  rounded-lg">
      <div className="relative">
        <img src={image} alt={title} className="rounded-lg w-[240px] h-[282px] " />
        <span className={`absolute bottom-5 left-4  px-3 py-1 text-sm rounded-full ${colorClasses[statusColor]}`}>
        {renderIcon()} {statusLabel}
        </span>
      </div>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-lg font-semibold text-blue-900">${price}</p>
      <div className="flex items-center mt-3">
        <img src={agentImage} alt={agent} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-sm text-gray-700">{agent}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
