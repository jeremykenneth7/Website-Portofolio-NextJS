import Head from "next/head";
import Link from 'next/link';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import js from "../public/js.png";
import cloud from "../public/cloud.png";
import backend from "../public/backend.png";
import software from "../public/software.png";
import logic from "../public/logic.png";
import github from "../public/github.png";
import preparing from "../public/preparing.png";
import bits from "../public/bits.png";
import sysmin from "../public/sysmin.png";
import dart from "../public/dart.png";

export default function Certificates() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Jeremy Kenneth Portofolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
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

                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        {/* Display the certificate images */}
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/53XE4N95RZRN" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={js}
                                    alt="js"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/0LZ0QD0NNZ65" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={web1}
                                    alt="web1"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/98XWV1NMJPM3" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={cloud}
                                    alt="cloud"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/GRX52O6J2X0M" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={backend}
                                    alt="backend"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/L4PQGVWVOZO1" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={software}
                                    alt="software"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/0LZ097MOKZ65" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={logic}
                                    alt="logic"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/N9ZO6VG2DXG5" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={github}
                                    alt="github"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://www.dicoding.com/certificates/81P2VVWQYPOY" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={"200%"}
                                    height={"110%"}
                                    layout="responsive"
                                    src={dart}
                                    alt="dart"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://coursera.org/share/9e4673e59337bc071397c37e0a3a2671" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={160}
                                    height={100}
                                    layout="responsive"
                                    src={preparing}
                                    alt="preparing"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://coursera.org/share/122c87baf0ad5961654cf058510f82ae" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={160}
                                    height={100}
                                    layout="responsive"
                                    src={bits}
                                    alt="bits"
                                />
                            </a>
                        </div>
                        <div className="basis-1/5 flex-1">
                            <a href="https://coursera.org/share/63e902db5f6180058c884b70ff020496" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="rounded-lg overflow-hidden shadow-md"
                                    width={160}
                                    height={100}
                                    layout="responsive"
                                    src={sysmin}
                                    alt="sysmin"
                                />
                            </a>
                        </div>
                    </div>
            </main>
        </div>
    );
}