import React, { useState } from "react";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Title Centered */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6">
          Elevate Your Living Experience
        </h2>

        {/* Content Left-Aligned */}
        <div className="text-left leading-relaxed ml-0 md:ml-[-190px]">
          <p className="text-lg text-gray-800">
          Find your dream home in Pune with Lodha Properties, your trusted real estate partner. Explore exclusive deals and premium residences crafted by Lodha, one of Pune’s most renowned developers. Experience luxury, comfort, and exceptional investment opportunities with us.
          </p>

          {isExpanded && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Why choose us?</h3>
              <ul className="mt-2 text-gray-700 space-y-2">
                <li><strong>Expert Guidance:</strong> Our team provides in-depth insights and personalized assistance to help you find the perfect property.</li>
                <li><strong>Best Deals:</strong> Unlock premium offers and unbeatable prices on luxurious residential and commercial spaces.</li>
                <li><strong>Top Developers:</strong> Partnered with Lodha Group, a name synonymous with quality, innovation, and excellence.</li>
                <li><strong>Customer Satisfaction:</strong> Your satisfaction is our priority; we ensure a seamless and rewarding real estate experience.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Our Services</h3>
              <ul className="mt-2 text-gray-700 space-y-2">
                <li><strong>Residential Properties:</strong> Discover elegantly designed homes in Pune’s most prestigious locations.</li>
                <li><strong>Commercial Properties:</strong> Invest in world-class business hubs that promise growth and success.</li>
                <li><strong>Investment Advice:</strong> Get expert guidance on lucrative real estate investments tailored to your goals.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Featured Properties</h3>
              <p className="mt-2 text-gray-700">
              Explore a curated selection of Lodha’s finest properties, offering unmatched comfort, modern amenities, and exceptional investment potential in Pune.
              </p>
            </>
          )}
        </div>

        {/* Read More / Read Less Button */}
        <div className="mt-6 text-left ml-0 md:ml-[-190px]">
          <button
            className="px-6 py-3 bg-[#A18422] text-white rounded-lg font-medium hover:bg-[#A18422] transition-all"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Overview;
