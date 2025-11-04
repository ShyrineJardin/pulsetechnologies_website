import React from "react";
import Image from "next/image";
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo.png" alt="logo" width={100} height={100} priority />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#189677]">Contact Info</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold">
              <li className="text-white flex items-center">
                <FaPhoneAlt className="mr-2" />
                +639 678 372 893
              </li>
              <li className="text-white flex items-center">
                <FaClock className="mr-2" />
                Mon-Fri 7am-6pm
              </li>
              <li className="text-white flex items-center">
                <FaEnvelope className="mr-2" />
                flexclave@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#189677]">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold">
              <li className="text-white">FAQ</li>
              <li className="text-white">Terms and Condition</li>
              <li className="text-white">Classes</li>
              <li className="text-white">Program</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-200 text-sm ">
          <p className="text-center md:text-left">
            Copyright © 2025 Pulse Technologies. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Socials</span>
            <Link href="#" className="text-white hover:text-pink-500"><FaFacebook /></Link>
            <Link href="#" className="text-white hover:text-pink-500"><FaTwitter /></Link>
            <Link href="#" className="text-white hover:text-pink-500"><FaInstagram /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
