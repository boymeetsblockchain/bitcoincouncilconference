import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="container py-6 bg-[#1a1757] text-white flex items-center justify-center flex-col text-center">
      <div className="footer-logo mb-4">
        <a href="#">
          <Image src="/logo.png" alt="logo" width={100} height={75} />
        </a>
      </div>
      <ul className="event-social flex justify-center gap-4 mb-4">
        <li><a href="#"><FaFacebook size={24} /></a></li>
        <li><a href="#"><FaTwitter size={24} /></a></li>
        <li><a href="#"><FaLinkedin size={24} /></a></li>
        <li><a href="#"><FaYoutube size={24} /></a></li>
        <li><a href="#"><FaInstagram size={24} /></a></li>
        <li><a href="#"><FaTelegram size={24} /></a></li>
      </ul>
      <p className="text-sm">
        © 2024 Bitcoin Events Pty Ltd.<br />
        <a href="#" className="text-blue-500">About Us</a> | <a href="#" className="text-blue-500">Code Of Conduct</a> | <a href="#" className="text-blue-500">Terms & Conditions</a> | <a href="#" className="text-blue-500">Privacy Policy</a> | <a href="#" className="text-blue-500">Subscribe Now</a> | <a href="#" className="text-blue-500">Volunteer | Become an Intern</a> | <a href="#" className="text-blue-500">Contact Us</a><br />
        <FaEnvelope className="inline" /> <a href="mailto:info@bitcoinevents.co.za" className="text-blue-500">blockchaincouncil@gmail.com</a>
      </p>
    </div>
  );
};

export default Footer;
