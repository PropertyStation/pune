import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';
import image1 from '../assets/image/projects/1.jpg';
import { form } from '../data';

const properties = {
  pune: [
    {
      id: 1,
      image: image1,
      title: 'Lodha Giardino',
      location: 'Kharadi',
      bhk: '3 & 4 BHK',
      price: '₹ 2.07 Cr*',
      redirectUrl: 'https://pune-properties.co/lodha-giardino',
    },
  ],
  mumbai: [
    {
      id: 1,
      image: image1,
      title: 'Lodha Divino',
      location: 'Matunga',
      bhk: '2, 3 & 4 BHK',
      price: '₹ 3.49 Cr*',
      redirectUrl: 'https://pune-properties.co/lodha-divino-matunga-mumbai',
    },
  ],
};

const ResidencialProjects = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(Object.keys(properties)[0] || 'pune');

  const handleEnquireClick = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="relative bg-gray-100 py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6">
        Residential Projects
      </h2>
      <div className='flex justify-center space-x-4 mb-6 mt-10'>
        {Object.keys(properties).map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-6 py-2 text-white text-[14px] leading-[20px] md:font-semibold rounded-lg transition whitespace-nowrap ${selectedCity === city
              ? 'bg-gray-600 shadow-lg transform scale-110'
              : 'bg-gray-500 hover:bg-gray-700'
              }`}
          >
            {city}
          </button>

        ))}
      </div>
      <div
        className={`${properties[selectedCity].length === 1
          ? "flex justify-center items-center"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }`}
      >
        {properties[selectedCity].map((property) => (
          <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white' onClick={() => window.open(property.redirectUrl, "_blank")}>
            <img
              className='w-full h-60 object-cover'
              src={property.image}
              alt={property.title}
            />
            <h2 className='flex items-center justify-center text-lg font-bold text-gray-800 mt-3'>
              {property.title}
            </h2>
            <div className='p-4'>
              <div className='flex items-center gap-1 text-gray-500 text-xl'>
                <FaMapMarkerAlt className='text-[14px]' />
                <p className='text-sm text-gray-500'>{property.location}</p>
              </div>

              <div className='flex justify-between items-center gap-1'>
                <p className='text-sm text-gray-500 ml-1'>
                  {property.price}
                </p>
                <button
                  className='bg-gray-500 text-white px-4 py-1 w-[150px] rounded-lg text-sm'
                  onClick={() => handleEnquireClick(property.id)}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <EnquiryForm onClose={handleCloseForm} form={form} />
        </div>
      )}
    </div>
  );
};

export default ResidencialProjects;
