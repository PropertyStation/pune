import React from 'react'
import image1 from '../assets/image/hot-location/1.webp'
import image2 from '../assets/image/hot-location/2.webp'
import image3 from '../assets/image/hot-location/3.webp'
import backgroundImage from '../assets/image/backgroundimage/2.jpg'
import { useNavigate } from 'react-router-dom'

const HotLocation = () => {
  const cities = [
    { id: 1, name: 'EAST PUNE', image: image1, route: '/east-pune' },
    { id: 2, name: 'CENTRAL PUNE', image: image2,},
    { id: 3, name: 'WEST PUNE', image: image3, route: '/west-pune' }
  ]
  
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    window.open(route,'_blank');
  }

  return (
    <div className='relative py-16 px-5 flex flex-col items-center'>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#374151] via-[#374151]/80 to-[#374151]/30"></div>
      <div className='max-w-6xl w-full text-white text-center'>
        <h2 className='text-2xl font-bold mb-10 text-white drop-shadow-lg'>
          Hot Locations
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10'>
          {cities.map(city => (
            <div
              key={city.id}
              className='relative group bg-white bg-opacity-50 border rounded-2xl overflow-hidden backdrop-blur-lg shadow-lg transition-all duration-300 transform opacity-90 hover:scale-105 hover:shadow-2xl'
              onClick={() => handleCardClick(city.route)}  // Handle the click and navigate
            >
              <img
                src={city.image}
                alt={city.name}
                className='w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-opacity-40 transition-opacity duration-300'>
                <h3 className='text-2xl font-semibold text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300'>
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotLocation
