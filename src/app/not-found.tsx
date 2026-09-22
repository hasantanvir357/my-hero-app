import Link from 'next/link';
import Image from 'next/image';

import errorImg from '@/assets/App-Error.png';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-[320px] sm:max-w-100 mb-6">
        <Image src={errorImg} alt="404 Page Not Found" priority className="w-full h-auto object-contain mx-auto" />
      </div>

      <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
