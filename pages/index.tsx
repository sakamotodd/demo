import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson1">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson1</a>
        </Link>
      </div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson2">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson2</a>
        </Link>
      </div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson3">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson3</a>
        </Link>
      </div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson4">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson4</a>
        </Link>
      </div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson5">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson5</a>
        </Link>
      </div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson6">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson6</a>
        </Link>
      </div>
      <div className="mx-auto ml-24 mr-24 mt-4">
        <Link href="/tailwindcss/lesson7">
          <a className=" text-blue-400 hover:text-blue-300 cursor-pointer">lesson7</a>
        </Link>
      </div>
    </div>
  );
}
