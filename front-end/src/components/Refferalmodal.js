// src/ReferralModal.js
import React, { useState } from 'react';
import { axiosClient } from '../axiosClient';

const ReferralModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add form validation and submit logic here
    console.log('Form data submitted:', formData);
    try {
      const result=await axiosClient.post('/api/referrals', formData);
      console.log('Form data submitted successfully',result);
    } catch (error) {
      console.log('Failed to submit form data:', error)
    }


  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="referrerName"
            placeholder="Your Name"
            value={formData.referrerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="referrerEmail"
            placeholder="Your Email"
            value={formData.referrerEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="refereeName"
            placeholder="Friend's Name"
            value={formData.refereeName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="refereeEmail"
            placeholder="Friend's Email"
            value={formData.refereeEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <button
          className="mt-4 text-red-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
