import React, { VFC } from 'react';
import Link from 'next/link';

const Header: VFC = () => {
  return (
    <header className="w-full h-24 border-b border-gray-300 flex justify-around items-center">
      <Link href="/">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          ホーム
        </a>
      </Link>
      <Link href="/tailwindcss/lesson1">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson1
        </a>
      </Link>
      <Link href="/tailwindcss/lesson2">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson2
        </a>
      </Link>
      <Link href="/tailwindcss/lesson3">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson3
        </a>
      </Link>
      <Link href="/tailwindcss/lesson4">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson4
        </a>
      </Link>
      <Link href="/tailwindcss/lesson5">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson5
        </a>
      </Link>
      <Link href="/tailwindcss/lesson6">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson6
        </a>
      </Link>
      <Link href="/tailwindcss/lesson7">
        <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">
          lesson7
        </a>
      </Link>
    </header>
  );
};

export default Header;
