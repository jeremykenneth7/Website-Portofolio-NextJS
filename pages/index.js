import Head from "next/head";
import Link from 'next/link';
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/profile.jpg";
import Image from "next/image";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jeremy Kenneth Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">

        <nav className="py-5 md:py-10 mb-4 md:mb-12 flex flex-col md:flex-row justify-between dark:text-white">
          <div className="md:flex md:items-center md:justify-between">
            {/* Mobile View */}
            <div className="md:hidden">
              {/* Home Link */}
              <Link href="/">
                <a className="mr-4 font-burtons text-lg py-1 dark:text-white hover:border-teal-500">Jeremy</a>
              </Link>
              {/* Portfolio and Certificates Links */}
              <div className="flex flex-col">
                <Link href="/portofolio">
                  <a className="font-burtons text-lg py-1 dark:text-white hover:border-teal-500">Portfolio</a>
                </Link>
                <Link href="/certificates">
                  <a className="font-burtons text-lg py-1 mb-5 dark:text-white hover:border-teal-500">Certificates</a>
                </Link>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex md:items-center">
              {/* Home Link */}
              <Link href="/">
                <a className="mr-4 font-burtons text-lg py-1 dark:text-white hover:border-teal-500">Jeremy</a>
              </Link>
              {/* Portfolio Link */}
              <Link href="/portofolio">
                <a className="ml-8 font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Portfolio</a>
              </Link>
              {/* Certificates Link */}
              <Link href="/certificates">
                <a className="ml-8 font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Certificates</a>
              </Link>
            </div>
          </div>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-blue-500 text- to-yellow-700 text-white px-4 py-2 border-none rounded-md ml-8"
                href="CV-Jeremy-Kenneth.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >CV</a>
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-red-500 text- to-teal-700 text-white px-4 py-2 border-none rounded-md ml-8"
                href="Resume-Jeremy-Kenneth.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="font-mono text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-2xl">
            Hi, I’m Jeremy and I’m a
          </h2>
          <h3 className="font-burtons text-5xl py-2 dark:text-white md:text-5xl">
            Full-Stack Developer.
          </h3>
          <p className="font-mono text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I also have a passion for Mobile Development
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="mailto: jeremykenneth7@gmail.com"><AiFillMail /> </a>
            <a href="https://www.linkedin.com/in/jeremykenneth7/"><AiFillLinkedin /></a>
            <a href="https://github.com/jeremykenneth7"><AiFillGithub /></a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-72 md:w-72">
            <Image src={deved} layout="fill" objectFit="cover" alt="deved" />
          </div>
        </div>
      </main>
    </div>
  );
}
