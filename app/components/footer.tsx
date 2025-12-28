import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-10 border-white border-t-[0.4px]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* left img */}
                <div className="flex flex-col items-center justify-center md:items-start gap-4 h-full">
                    <img
                        src="vercel.svg"
                        alt="vercel"
                        className=""
                    />
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white">Navigation</h2>
                    <div className="flex flex-col gap-1 text-gray-400">
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-white">
                            About
                        </Link>
                        <Link href="/project" className="hover:text-white">
                            project
                        </Link>
                        <Link href="/contact" className="hover:text-white">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white">Contact Me</h2>
                    <a
                        href="mailto:mkhadafi0001@gmail.com"
                        className="text-gray-400 hover:text-blue-300">
                        Email: mkhadafi0001@gmail.com
                    </a>
                    <a
                        href="https://wa.me/6289509374889"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-300">
                        Phone/WhatsApp: +62 895 0937 4889
                    </a>
                    <a
                        href="https://github.com/stellarmercenary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-300">
                        GitHub: stellarmercenary
                    </a>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                © 2025. Muhammad Khadafi
            </div>
        </footer>
    );
};

export default Footer;
