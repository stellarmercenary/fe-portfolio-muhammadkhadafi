import Link from "next/link";
export default function AboutPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-225 h-100 rounded-md  border-[0.4px] border-white flex bg-linear-to-tr from-black via-gray-800 to-blue-600">
                {/* description  */}
                <div className="w-1/2 p-8 flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl font-bold text-white">
                        Muhammad Khadafi
                    </h2>
                    <p className="text-gray-300">
                        I'm a front-end developer with a focus on creating sleek
                        and interactive web experiences. Passionate about modern
                        UI/UX and building efficient, scalable interfaces.
                    </p>
                    <Link
                        href="/project"
                        className="mt-4 w-40 flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:font-black hover:text-black transition-colors">
                        View Projects
                    </Link>
                </div>

                {/*  kanan */}
                <div className="w-1/2 flex items-center p-8 justify-end">
                    <img
                        src="/image/user-1.jpeg"
                        alt="profile"
                        className=" h-[80%] object-cover border border-white rounded-sm"
                    />
                    {/* <div className="absolute inset-0 bg-liniear-to-t from-black/50 via-transparent to-black/0"></div> */}
                </div>
            </div>
        </div>
    );
}
