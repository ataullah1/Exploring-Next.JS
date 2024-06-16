'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navber = () => {
  const pathName = usePathname();
  const router = useRouter();
  // console.log(pathName);
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blogs' },
  ];

  const handleLogin = () => {
    console.log('Login Now');
    router.push('/login');
  };

  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto py-3">
      <span className="text-3xl font-bold">Logo</span>
      <ul className="flex justify-between items-center space-x-7">
        {links?.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-3 ${pathName === link.path && 'text-yellow-400'}`}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button
        onClick={handleLogin}
        className="bg-yellow-400 py-2 px-6 rounded-md text-slate-800 font-bold hover:bg-yellow-500 duration-300"
      >
        Login
      </button>
    </nav>
  );
};

export default Navber;
