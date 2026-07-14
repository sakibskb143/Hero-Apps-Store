import React from "react";
import hero from "../../assets/logo.png";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      <div className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                className="w-12 h-12" 
                src={hero} 
                alt="Hero IO" 
              />
              <h2 className="text-2xl font-bold text-[#9F62F2]">
                Hero.IO
              </h2>
            </div>

            <p className="text-gray-300 leading-7">
              Discover, install, and manage your favorite applications.
              Built for millions of users with powerful and reliable
              technology.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-[#9F62F2] cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#9F62F2] cursor-pointer">
                Apps
              </li>
              <li className="hover:text-[#9F62F2] cursor-pointer">
                Installation
              </li>
              <li className="hover:text-[#9F62F2] cursor-pointer">
                About Us
              </li>
            </ul>
          </div>


          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Follow Us
            </h3>

            <p className="text-gray-300 mb-5">
              Stay connected with Hero.IO
            </p>

            <div className="flex gap-5 text-2xl">
              <a className="hover:text-[#9F62F2]">
                <FaGithub />
              </a>

              <a className="hover:text-[#9F62F2]">
                <FaFacebook />
              </a>

              <a className="hover:text-[#9F62F2]">
                <FaLinkedin />
              </a>

              <a className="hover:text-[#9F62F2]">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Hero.IO. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;