"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="w-full fixed h-20 z-999 bg-zinc-900 flex items-center justify-between border-b border-gray-500 px-100px px-25">
            {/* left */}
            <div
                id="logo"
                className="w-64 p-4 border-gray-500 h-full flex justify-start items-center text-zinc-500 font-extrabold gap-2 hover:text-white hover:bg-zinc-900 hover:border-white">
                <h1 className="text-white text-md font-thin"></h1>
            </div>

            {/* mid */}
            <div className="flex-1 h-full text-gray-500 font-bold">
                <ul className="flex items-center justify-center gap-4 w-full h-full">
                    {navlinks.map((link) => (
                        <li key={link.name} className="rounded-[5px] w-22 h-8">
                            <Link
                                href={link.to}
                                className={`rounded-[5px] w-full h-full flex justify-center items-center nav-hover transition-colors duration-200 ease-in-out ${
                                    pathname === link.to
                                        ? "text-white border-zinc-400 border"
                                        : "text-gray-500"
                                }`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* right */}
            <div className="w-64 h-full flex items-center justify-end pr-10 gap-4 text-white font-bold">
                <h1 className="text-white text-md font-thin"></h1>
            </div>
        </nav>
    );
};

export default Navbar;
