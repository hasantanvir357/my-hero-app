import React from 'react';

const BannerPage = () => {
  return (
    <>
      <div>
        <h2>
          We Build <br />
          <span className="text-purple-600">Productive</span> for <br />
          Apps
        </h2>
        <p className="text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our
          goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div>
        <button className="bg-linear-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:opacity-90 transition">
          Play Store
        </button>
        <button className="bg-linear-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:opacity-90 transition">
          App Store
        </button>
      </div>
    </>
  );
};

export default BannerPage;
