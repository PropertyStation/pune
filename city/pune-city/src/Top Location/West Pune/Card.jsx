
import { FaRupeeSign, FaHome } from "react-icons/fa";
import { useState } from "react";
import EnquiryForm from "../../components/EnquiryForm";
const Card = ({ carddata,form }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formOpen,setFormOpen] = useState(null);
  const handleEnquiryForm=()=>{
    setFormOpen(true);
  }
  const handleFormClose=()=>{
    setFormOpen(false);
  }
  const itemsPerPage = 6;
  const totalPages = Math.ceil(carddata.length / itemsPerPage);

  const currentProperties = Array.isArray(carddata)
    ? carddata.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col items-center bg-white py-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Residential Projects in West-Pune
      </h2>

      {/* Render the property cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10">
        {currentProperties.map((property, index) => (
          <div key={index} className="w-84 bg-gray-100 shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-4" onClick={()=>window.open(property.redirectUrl,"_blank")}>
            <img src={property.image} alt={property.title} className="w-full h-50 object-cover rounded-lg mb-2" />
            <h3 className="text-[16px] font-semibold mt-3 text-navy-700">{property.title}</h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FaRupeeSign className="text-[14px] font-normal text-navy-500" />
                <span className="text-[14px]">{property.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaHome className="text-[14px] font-normal text-navy-500" />
                <span className="text-[14px]">{property.bhk}</span> {/* Use bhk here */}
              </div>
            </div>
            <button className="text-[14px] font-normal w-full bg-gray-600 hover:bg-navy-700 text-white py-2 rounded-lg mt-4" onClick={handleEnquiryForm}>
              Enquire Now
            </button>
          </div>
        ))}
      </div>
        {
          formOpen && (
            <div className="fixed inset-0 backdrop-blur-md bg-white/5 flex items-center justify-center z-50">
              <EnquiryForm onClose={handleFormClose} form={form}/>
            </div>
          )
        }
      {/* Pagination buttons */}
      <div className="flex justify-between items-center mt-6 gap-2">
        <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50">
          &lt; {/* This represents the < symbol */}
        </button>
        
        <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50">
          &gt; {/* This represents the > symbol */}
        </button>
      </div>
    </div>
  );
};

export default Card;
