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
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-md text-black">
      <div className="max-w-screen mx-auto flex items-center justify-between  relative">
        <div className='flex flex-col items-start ml-[-40px] mt-2'>
          <img src={logo} alt='' className='w-[100px] md:w-[120px] ml-[60px] md:ml-60  h-auto md:h-[70px] mb-3' />
        </div>
        <div className="md:hidden flex items-center">
          <a href="tel:+918505990055" className="text-[#034EA1]">
            <FaPhoneVolume className="text-4xl animate-bounce ml-20" />
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none mt-5 md:mt-0`}>
          <li><button onClick={() => scrollToSection('overview')} className="py-2 px-4">Overview</button></li>
          <li><button onClick={() => scrollToSection('residential')} className="py-2 px-4">Residential</button></li>
          <li><button onClick={openForm} className="py-2 px-4">Discount Offers</button></li>
          <li><button onClick={openForm} className="py-2 px-4">Book a Site Visit</button></li>
          <li><button onClick={openForm} className="py-2 px-4">Contact Us</button></li>
        </ul>
        <div className="md:flex hidden md:mr-10 mr-0">
          <a href="tel:+918505990055" className="text-[#034EA1]">
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
