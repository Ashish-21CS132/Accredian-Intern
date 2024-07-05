import React, { useState } from 'react'
import logo from '../assets/logo.png'
import malephotos from '../assets/male-female.png'
import HeroSection from '../components/Herosection'
import ReferralModal from '../components/Refferalmodal'
import circle1 from '../assets/circle1.png'


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* //Navbar */}
      <nav className="bg-white shadow-sm p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side: Logo and primary button */}
          <div className="flex items-center space-x-6">
            <img src={logo} alt="Logo" className="w-full h-12 cursor-pointer" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Courses
            </button>
          </div>

          {/* Right side: Secondary and primary buttons */}
          <div className="flex items-center space-x-6">
            <h1 className="cursor-pointer">Refer and earn</h1>
            <h1 className="cursor-pointer">Resources</h1>
            <h1 className="cursor-pointer">About us</h1>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              login
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Try for free
            </button>
          </div>
        </div>
      </nav>

      {/* small navbar */}
      <div className="flex justify-center items-center mt-4">
        <div className="w-[650px] mx-20 rounded-3xl bg-blue-100 flex justify-around p-3">
          <h1 className="cursor-pointer">Refer</h1>
          <h1 className="cursor-pointer">Benefits</h1>
          <h1 className="cursor-pointer">FAQs</h1>
          <h1 className="cursor-pointer">Support</h1>
        </div>
      </div>

      {/* refer now container */}
      <div className="flex justify-center items-center">
        <div className="mt-4 w-[1000px] h-[500px] flex shadow-lg">
          {/* Left Side - Text */}
          <div className="flex-1 p-4 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-7">
              <h1 className="text-5xl font-bold">Let's Learn & Earn</h1>

              <h1 className="text-3xl">
                Get a chance to win up-to
                <span className="text-blue-600 font-bold text-3xl"> Rs. 15,000</span>
              </h1>

              <HeroSection onReferNow={handleReferNow} />
              <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
            </div>
          </div>

          {/* Right Side - Background Image */}
          <div
            className="flex-2 "
            style={{
              flex: 2,
              backgroundImage: `url(${malephotos})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      {/* middleman */}
      <div className="flex flex-col gap-4 justify-center items-center mt-10">
        <h1 className='font-bold text-3xl'>How do I <span className='text-blue-500'>Refer?</span></h1>
        <img src={circle1} alt="img" />
      </div>
    </div>
  )
}

export default Home
