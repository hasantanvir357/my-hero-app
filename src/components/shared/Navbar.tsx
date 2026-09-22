'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const navItems = ['Home', 'Apps', 'Installation'];

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold text-purple-600">HERO.IO</span>
        </div>

        <ul className="flex items-center gap-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer transition hover:text-purple-600 ${
                active === item ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="bg-linear-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:opacity-90 transition">
          Contribute
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
