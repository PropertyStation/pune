import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';
import image1 from '../assets/image/projects/1.jpg';
import image2 from '../assets/image/projects/2.jpg';
import image3 from '../assets/image/projects/3.jpg';
import { form } from '../data';

const properties = [
  {
    id: 1,
    image: image1,
    title: 'Shapoorji Golfland',
    location: 'Bavdhan',
    bhk: '2, 3 & 4 BHK',
    price: '₹ 1.26 Cr*',
    redirectUrl: 'https://pune-properties.co/golfland-vanaha',
  },
  {
    id: 2,
    image: image2,
    title: 'Shapoorji Wildernest',
    location: 'Hadapsar',
    bhk: '3 & 4 BHK',
    price: '₹ 1.79 Cr*',
    redirectUrl: 'https://pune-properties.co/wildernest',
  },
  {
    id: 3,
    image: image3,
    title: 'Joyville Hadapsar',
    location: 'Hadapsar',
    bhk: '1, 2 & 3 BHK',
    price: '₹ On Request*',
    redirectUrl: 'https://pune-properties.co/joyville-hadapsar-pune',
  },
];

const ResidencialProjects = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEnquireClick = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="relative bg-gray-100 py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6">
        Residential Projects
      </h2>

      <div
        className={`${properties.length === 1
            ? "flex justify-center items-center"
            : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-5 md:ml-40 w-full items-center justify-center"
          }`}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white"
            onClick={() => window.open(property.redirectUrl, '_blank')}
          >
            <img className="w-full h-60 object-cover" src={property.image} alt={property.title} />
            <h2 className="flex items-center justify-center text-lg font-bold text-gray-800 mt-3">
              {property.title}
            </h2>
            <div className="p-4">
              <div className="flex items-center gap-1 text-gray-500 text-xl">
                <FaMapMarkerAlt className="text-[14px]" />
                <p className="text-sm text-gray-500">{property.location}</p>
              </div>

              <div className="flex justify-between items-center gap-1 mt-2">
                <p className="text-sm text-gray-500 ml-1">{property.price}</p>
                <button
                  className="bg-[#034EA1] text-white px-4 py-2 w-[170px] rounded-lg text-sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents redirect when clicking "Enquire Now"
                    handleEnquireClick();
                  }}
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
