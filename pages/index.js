import Head from "next/head";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/profile.jpg";
import Image from "next/image";
import bimbel from "../public/bimbel.png";
import gunung from "../public/gunung.png";
import tsunami1 from "../public/tsunami1.png";
import tsunami2 from "../public/tsunami2.png";

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
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Jeremy</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
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
              Developer and designer.

            </h3>
            <p className="font-mono text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer Programmers
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto: jeremykenneth7@gmail.com"><AiFillMail /> </a>
              <a href="https://www.linkedin.com/in/jeremykenneth7/"><AiFillLinkedin /></a>
              <a href="https://github.com/jeremykenneth7"><AiFillGithub /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-72 md:w-72">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="font-burtons text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="font-mono text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
              Crafting a compelling portfolio website to showcase my extensive experience in front-end development has been a rewarding journey. Through a dynamic blend of creativity and technical prowess, I have meticulously curated a collection of projects that encapsulate my proficiency in crafting seamless user experiences. From responsive designs that adapt flawlessly to diverse screen sizes to interactive interfaces that engage users intuitively, my portfolio reflects a deep-rooted passion for translating concepts into captivating visual narratives. Each project stands as a testament to my mastery of HTML, CSS, JavaScript, and other cutting-edge technologies, which I seamlessly integrate to breathe life into my designs.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"110%"}
                layout="responsive"
                src={bimbel}
                alt="bimbel"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"110%"}
                layout="responsive"
                src={tsunami1}
                alt="tsunami1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"110%"}
                layout="responsive"
                src={tsunami2}
                alt="tsunami2"  
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"110%"}
                layout="responsive"
                src={gunung}
                alt="gunung"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
