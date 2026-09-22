import React from 'react';
import Image from 'next/image';
import banner from '@/assets/hero.png';

const BannerPage = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 px-4 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1e293b] tracking-tight leading-tight mb-6">
          We Build <br />
          <span className="text-[#a855f7]">Productive</span> Apps
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our
          goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Google Play Button */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-gray-200 bg-white hover:bg-gray-50 text-gray-800 normal-case rounded-xl px-6 py-2.5 shadow-xs flex items-center gap-3 border font-semibold text-base"
          >
            <svg className="w-6 h-6" viewBox="0 0 512 512">
              <path
                fill="#410593"
                d="M7,23.327 C5.504,24.819 4.5,27.189 4.5,30.342 L4.5,481.658 C4.5,484.811 5.504,487.181 7,488.673 L7.886,489.518 L262.888,234.516 L262.888,277.484 L7.886,22.482 Z"
              />
              <path
                fill="#00e2ff"
                d="M347.534,319.162 L262.888,234.516 L7,488.673 C11.393,493.066 18.892,493.855 27.28,489.123 L347.534,319.162 Z"
              />
              <path
                fill="#ff3a44"
                d="M347.534,192.838 L27.28,22.877 C18.892,18.145 11.393,18.934 7,23.327 L262.888,277.484 L347.534,192.838 Z"
              />
              <path
                fill="#fbaa00"
                d="M433.91,241.137 L347.534,192.838 L262.888,277.484 L347.534,319.162 L433.91,270.863 C448.096,262.977 448.096,249.023 433.91,241.137 Z"
              />
            </svg>
            Google Play
          </a>

          {/* App Store Button */}
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-gray-200 bg-white hover:bg-gray-50 text-gray-800 normal-case rounded-xl px-6 py-2.5 shadow-xs flex items-center gap-3 border font-semibold text-base"
          >
            <svg className="w-6 h-6 fill-current text-sky-500" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-89.2-61.7-92.1zM263.8 91.2c27.1-32.9 23.8-63 22.8-71.2-23.8 1.4-52.1 16.3-68.5 35.5-18.3 21-23.7 50.8-22.3 71.2 26.6 2 52.3-13.6 68-35.5z" />
            </svg>
            App Store
          </a>
        </div>

        {/* Hero Image Container */}
        <div className="relative mx-auto max-w-2xl flex justify-center items-center">
          <Image src={banner} alt="Hero App Preview" priority className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
