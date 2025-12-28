import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-full justify-center items-center ">
            {/* background */}
            <div className="pt-20 w-full h-full absolute top-0 left-0 flex items-center z-0 bg  bg-linear-to-tr from-gray-800 via-gray-400 to-gray-200">
                <div className="bg-black h-50 w-full"></div>
            </div>
            {/* content */}
            import Link from "next/link";
            <div className="w-full h-full z-10 flex items-center justify-center bg-white">
                <Link href="/about">
                    <img
                        src="/svgs/introduction-card.svg"
                        alt="profile-card"
                        className="
        h-100 
        transition-all duration-300 
        hover:scale-105 hover:shadow-2xl 
        hover:-translate-y-1 hover:rotate-1
        transform-gpu
        cursor-pointer
      "
                    />
                </Link>
            </div>
        </div>
    );
}
