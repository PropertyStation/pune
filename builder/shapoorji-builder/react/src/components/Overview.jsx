import React, { useState } from "react";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">

        {/* Title Centered */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6">
          Find Your Dream Home in Pune with Shapoorji Pallonji – A Legacy of Excellence
        </h2>

        {/* Content Left-Aligned */}
        <div className="text-left leading-relaxed ml-0 md:ml-[-190px]">
          <p className="text-lg text-gray-800">
            Discover premium residences and exclusive deals with Shapoorji Pallonji, a trusted name in real estate for over 150 years.
            Experience luxury, innovation, and unmatched quality in Pune’s most sought-after locations. 
            Whether you're looking for a dream home or a smart investment, we offer the perfect blend of comfort and opportunity.</p>

          {isExpanded && (
            <>
              <h3 className="mt-6 text-xl font-semibold">Why choose us?</h3>
              <ul className="mt-2 text-gray-700 space-y-2">
                <li><strong>Expert Guidance:</strong>Our team provides personalized assistance and deep market insights to help you make the best property decisions.</li>
                <li><strong>Best Deals:</strong>Unlock exclusive offers and competitive prices on luxurious residential and commercial properties.</li>
                <li><strong>Top Developers:</strong>Backed by Shapoorji Pallonji, a brand known for its commitment to quality, innovation, and excellence.</li>
                <li><strong>Customer Satisfaction:</strong>We prioritize your needs, ensuring a seamless and rewarding real estate experience.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Our Services</h3>
              <ul className="mt-2 text-gray-700 space-y-2">
                <li><strong>Residential Properties:</strong>Explore beautifully designed homes in Pune’s most prime locations.</li>
                <li><strong>Commercial Properties:</strong>Invest in world-class business spaces that offer exceptional growth potential.</li>
                <li><strong>Investment Advice:</strong>Get expert insights and strategies for high-return real estate investments.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Featured Properties</h3>
              <p className="mt-2 text-gray-700">
              Discover a handpicked selection of Shapoorji Pallonji’s finest properties in Pune, featuring modern amenities, unparalleled comfort, and outstanding investment potential.
              Let’s help you find the perfect home or investment with Shapoorji Pallonji Properties. Contact us today!
              </p>
            </>
          )}
        </div>

        {/* Read More / Read Less Button */}
        <div className="mt-6 text-left ml-0 md:ml-[-190px]">
          <button
            className="px-6 py-3 bg-[#034EA1] text-white rounded-lg font-medium hover:bg-[#034EA1] transition-all"
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
