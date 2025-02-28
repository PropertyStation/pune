import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import EnquiryForm from './EnquiryForm';
import { form } from '../data';
import logo from '../assets/image/logo/Logo.png';
import { FaPhoneVolume } from 'react-icons/fa';
const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-md text-black mt-[-1px]">
    <div className="max-w-screen mx-auto flex items-center justify-between md:justify-center p-0 md:p-2">
      {/* Logo - Align Left in Mobile View */}
      <a href="#" className="flex items-center">
        <img
          src={logo}
          className="w-[130px] sm:!w-[160px] xl:!w-[260px] h-[50px] xl:h-[60px] sm:ml-10  md:h-auto ml-2 xl:!ml-[-50px]"
          alt="Logo"
        />        </a>
        <div className="md:hidden flex items-center">
          <a href="tel:+918505990055" className="text-[#A18422]">
            <FaPhoneVolume className="text-4xl animate-bounce ml-[150px]" />
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none mt-5 md:mt-0 m-0 md:ml-20`}>
          <li><button onClick={() => scrollToSection('overview')} className="py-2 px-4">Overview</button></li>
          <li><button onClick={() => scrollToSection('residential')} className="py-2 px-4">Residential</button></li>
          <li><button onClick={openForm} className="py-2 px-4">Discount Offers</button></li>
          <li><button onClick={openForm} className="py-2 px-4">Book a Site Visit</button></li>
          <li><button onClick={openForm} className="py-2 px-4">Contact Us</button></li>
        </ul>
        <div className="md:flex hidden ml-20">
          <a href="tel:+918505990055" className="text-[#A18422]">
            <FaPhoneVolume className="text-4xl animate-bounce" />
          </a>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <EnquiryForm onClose={closeForm} form={form} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
