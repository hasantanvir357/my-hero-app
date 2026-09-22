'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Apps', href: '/apps' },
    { name: 'Installation', href: '/installation' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold text-purple-600">HERO.IO</span>
        </Link>

        <ul className="flex items-center gap-8 font-medium text-gray-700">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`transition hover:text-purple-600 ${
                    isActive ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="bg-linear-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:opacity-90 transition">
          Contribute
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
