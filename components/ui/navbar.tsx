"use client"
import { useState } from 'react';
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-3 w-full text-white bg-[#1a1757] mx-auto py-4 md:px-5 lg:px-12">
      <div className="logo flex items-center">
        <div>
          <Image src={'/logo.png'} width={120} height={75} alt="logo" />
        </div>
      </div>
      <div className="nav-items hidden md:flex gap-x-3">
        <ul className="flex items-center justify-between gap-x-7 text-xs">
          <li className="text-medium px-3 uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Home</li>
          <li className="text-medium px-3 uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Upcoming Events</li>
          <li className="text-medium px-3 uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Previous Events</li>
          <li className="text-medium px-3 uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Blog</li>
          <li className="text-medium px-3 uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">About Us</li>
          <li className="text-medium px-3 uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Contact</li>
        </ul>
        <div>
          <button className="text-white bg-blue-500 py-4 px-3 flex items-center justify-center w-[150px] h-[40px]">Register Now</button>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
          {isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1a1757] text-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-y-5 py-5 text-xs ">
            <li className="text-medium uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Home</li>
            <li className="text-medium uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Upcoming Events</li>
            <li className="text-medium uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Previous Events</li>
            <li className="text-medium uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Blog</li>
            <li className="text-medium uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">About Us</li>
            <li className="text-medium uppercase leading-tight hover:border-b-2 hover:border-blue-500 hover:scale-110">Contact</li>
            <li>
              <button className="text-white bg-blue-500 py-2 px-3 flex items-center justify-center w-[150px] h-[40px]">Register Now</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
