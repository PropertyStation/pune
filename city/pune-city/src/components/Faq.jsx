import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  { question: "What is the name of your company?", answer: "Our company is Property Station." },
  { question: "Where is your company located?", answer: "We are based in Pune, India." },
  { question: "Do you provide site visits?", answer: "Yes, we offer guided site visits for all properties." },
  { question: "What types of properties do you deal with?", answer: "We specialize in residential and commercial properties in Pune." },
  { question: "How can I contact your team?", answer: "You can reach us via WhatsApp or call at +91 9560773669." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100  flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">FAQ</h1>
      <div className="w-full max-w-2xl space-y-4 mt-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-gray-700 font-medium text-lg bg-white border-b hover:bg-gray-50 transition"
            >
              {item.question}
              <FaChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-600 text-base">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
