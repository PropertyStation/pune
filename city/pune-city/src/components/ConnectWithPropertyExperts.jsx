import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';
import { form } from '../data';
const ConnectPropertyExperts = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleEnquireClick = () => setIsFormOpen(true);
    const handleCloseForm = () => setIsFormOpen(false);

    return (
        <div className='w-full bg-gradient-to-r from-gray-400 to-gray-500  py-5 px-8'>
            <div className='flex flex-col items-center text-center'>
                <motion.h1
                    className='text-4xl text-white font-bold mb-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Connect with the Property Expert
                </motion.h1>
                <motion.p
                    className='text-lg text-white mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Get a dedicated relationship manager.
                </motion.p>
                <motion.button
                    type='button'
                    className='text-white flex items-center gap-2 bg-gray-500 text-white-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 mt-2'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnquireClick}
                >
                    Connect Now <FaArrowRightLong className='' />
                </motion.button>
            </div>
            {isFormOpen && (
                <div className='fixed inset-0 backdrop-blur-md bg-white/5 flex items-center justify-center  z-50'>
                    <EnquiryForm onClose={handleCloseForm} form={form} />
                </div>
            )}
        </div>
    )
}

export default ConnectPropertyExperts
