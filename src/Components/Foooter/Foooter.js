import React from 'react';
import logo from '../../images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10 mt-20">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
          <img src={logo}/>
            <span className="font-bold text-lg text-[#0E1735]">Hounter</span>
          </div>
          <p className="text-sm text-[#888B97]">
            We provide information about properties such as houses, villas, and apartments to help people find their dream home.
          </p>
          <div className='w-36 h-8 flex justify-between items-center p-1'>
               <FaFacebook />
               <FaTwitter />
               <FaInstagramSquare />
               </div>
        </div>

        {/* Property Column */}
        <div>
          <h4 className="font-semibold mb-4 text-[#0E1735]">Property</h4>
          <ul>
            <li className="mb-2 text-[#888B97]"><a href="#">House</a></li>
            <li className="mb-2 text-[#888B97]"><a href="#">Apartment</a></li>
            <li className="mb-2 text-[#888B97]"><a href="#">Villa</a></li>
          </ul>
        </div>

        {/* Article Column */}
        <div>
          <h4 className="font-semibold mb-4 text-[#0E1735]">Article</h4>
          <ul>
            <li className="mb-2 text-[#888B97]"><a href="#">New Article</a></li>
            <li className="mb-2 text-[#888B97]"><a href="#">Popular Article</a></li>
            <li className="mb-2 text-[#888B97]"><a href="#">Most Read</a></li>
            <li className="mb-2 text-[#888B97]"><a href="#">Tips & Tricks</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-semibold mb-4 text-[#0E1735]">Contact</h4>
          <ul>
            <li className="mb-2 text-[#888B97]">2448 Royal Ln. Mesa, New Jersey 45463</li>
            <li className="mb-2 text-[#888B97]">(671) 555-0110</li>
            <li className="mb-2 text-[#888B97]">info@hounter.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
