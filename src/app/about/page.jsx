import Link from 'next/link';
import React from 'react';

const aboutPage = () => {
  return (
    <div>
      <h1 className="text-3xl">This is about page.</h1>
      <div className="flex items-center gap-6">
        <Link
          href={'/about/company'}
          className="py-2 px-7 border shadow-md shadow-yellow-200s"
        >
          Company About
        </Link>
        <Link
          href={'/about/product'}
          className="py-2 px-7 border shadow-md shadow-yellow-200s"
        >
          About Product
        </Link>
      </div>
    </div>
  );
};

export default aboutPage;
