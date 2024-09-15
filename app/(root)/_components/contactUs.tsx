"use client"; // Mark as Client Component

import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="w-full md:w-[48%] bg-white rounded-lg shadow-lg p-6 mb-8 h-full flex flex-col justify-between mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <hr className="border-t-2 w-[80%] mx-auto border-black mb-6" /> {/* Horizontal line under title */}
      <p className="text-lg mb-4 text-center">
        We'd love to hear from you! Reach out to us via email or Instagram.
      </p>

      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="text-lg text-blue-500">
            <a href="mailto:qsbsu.sr@sabanciuniv.edu">qsbsu.sr@sabanciuniv.edu</a>
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold">Instagram</h2>
          <p className="text-lg text-pink-500">
            <a href="https://www.instagram.com/qsb_su" target="_blank" rel="noopener noreferrer">
              @qsb_su
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
