'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {
  const pathName = usePathname();
  console.log(pathName);
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto py-3">
      <span className="text-3xl font-bold">Logo</span>
      <ul className="flex justify-between items-center space-x-7">
        {links?.map((link) => (
          <Link key={link.path} href={link.path} className="px-3">
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
