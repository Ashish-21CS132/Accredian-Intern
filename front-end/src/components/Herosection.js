// src/HeroSection.js
import React from 'react';

const HeroSection = ({ onReferNow }) => {
  return (
    <div className="">
      
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        onClick={onReferNow}
      >
        Refer Now
      </button>
    </div>
  );
};

export default HeroSection;
