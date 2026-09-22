import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';

import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white py-8 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-6">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="HERO.IO Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg tracking-wider text-white">HERO.IO</span>
          </Link>

          <div className="flex flex-col items-center sm:items-end gap-2">
            <span className="text-sm font-medium text-slate-300">Social Links</span>
            <div className="flex items-center gap-4 text-slate-300">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/80 my-2" />

        <div className="text-center pt-4">
          <p className="text-xs text-slate-400">Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
