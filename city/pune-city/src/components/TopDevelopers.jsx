import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Logo Images
import logo1 from "../assets/image/top-developers/1.png";
import logo2 from "../assets/image/top-developers/2.png";
import logo3 from "../assets/image/top-developers/3.png";
import logo4 from "../assets/image/top-developers/4.png";
import logo5 from "../assets/image/top-developers/5.png";
import logo6 from "../assets/image/top-developers/6.png";
import logo7 from "../assets/image/top-developers/7.png";
import logo8 from "../assets/image/top-developers/8.png";
import logo9 from "../assets/image/top-developers/9.png";
// import logo10 from "../assets/image/logo10.png";

const TopDevelopers = () => {
    const settings = {
        infinite: true, // Loop the slider
        speed: 1000, // Transition speed
        slidesToShow: 5, // Show 5 logos at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Hide slider buttons
        dots: false, // Hide dots
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
      const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
    
      return (
        <div className="max-w-6xl mx-auto py-10 px-5">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Top Developers</h2>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center mt-10">
                <img src={logo} alt={`Logo ${index + 1}`} className="w-72 h-30 object-contain outline-none" />
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default TopDevelopers