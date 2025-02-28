import React, { useState } from "react";
import image from "../assets/image/logo/logo.png";
import EnquiryForm from "./EnquiryForm";
import { FaPhoneVolume } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; // Using FiMenu for hamburger icon

const NavManu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
    document.getElementById("banner")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  }
  const closeForm = () => setShowForm(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-md text-black mt-[-1px]">
      <div className="max-w-screen mx-auto flex items-center justify-between md:justify-center p-0 md:p-2">
        {/* Logo - Align Left in Mobile View */}
        <a href="#" className="flex items-center">
          <img
            src={image}
            className="w-[130px] md:w-[160px] h-[50px]  md:h-auto ml-2 sm:ml-30 xl:ml-5"
            alt="Logo"
          />        </a>
        {/* Mobile View: Phone Icon + Hamburger Menu on Right */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Phone Icon - Left of Hamburger */}
          <a href="tel:+918505990055" className="text-black">
            <FaPhoneVolume className="text-3xl animate-bounce" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 w-10 h-10 text-black rounded-lg hover:bg-gray-200 focus:ring-2"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Desktop View: Navigation Links & Phone Icon */}
        <div className="hidden md:flex items-center justify-between ml-[200px]">
          <ul className=" text-[15px] flex flex-row items-center space-x-6 text-center text-black px-6 md:px-12">
            <li><a href="#" className="py-2 px-4 whitespace-nowrap">Home</a></li>
            <li><button onClick={() => scrollToSection('location')} className="py-2 px-4 whitespace-nowrap">Hot Location</button></li>
            <li><button onClick={() => scrollToSection('developer')} className="py-2 px-4 whitespace-nowrap">Top Developer</button></li>
            <li><button onClick={openForm} className="py-2 px-4 whitespace-nowrap">Discount Offers</button></li>
            <li><a href="#" onClick={openForm} className="py-2 px-4 whitespace-nowrap">Latest Offer</a></li>
            <li><a href="#" onClick={openForm} className="py-2 px-4 whitespace-nowrap">Contact</a></li>
          </ul>

          {/* Phone Icon (Desktop) */}
          <div className="mr-8">
            <a href="tel:+918505990055" className="text-black">
              <FaPhoneVolume className="text-4xl animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" className="py-2 px-4 whitespace-nowrap">Home</a></li>
            <li><button onClick={() => scrollToSection('location')} className="py-2 px-4 whitespace-nowrap">Hot Location</button></li>
            <li><button onClick={() => scrollToSection('developer')} className="py-2 px-4 whitespace-nowrap">Top Developer</button></li>
            <li><button onClick={openForm} className="py-2 px-4 whitespace-nowrap">Discount Offers</button></li>
            <li><a href="#" onClick={openForm} className="py-2 px-4 whitespace-nowrap">Latest Offer</a></li>
            <li><a href="#" onClick={openForm} className="py-2 px-4 whitespace-nowrap">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/5 flex justify-center items-center z-50 p-4">
          <EnquiryForm onClose={closeForm} />
        </div>
      )}
    </nav>
  );
};

export default NavManu;
