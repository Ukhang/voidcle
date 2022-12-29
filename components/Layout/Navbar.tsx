import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VT323 } from '@next/font/google';
import { GoTriangleDown } from "react-icons/go";
import { HiMoon } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

// ==== Google Font ====
const vt323 = VT323({
    weight: '400',
    subsets: ['latin'] 
});

const Navbar = () => {

    // ==== Navbar Mobile and Tab toggle state ====
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            {/* ==== Dekstop Nav ==== */}
            <nav className="max-w-7xl mx-auto py-3.5 px-6 lg:flex hidden items-center justify-between lg:border-b-0 border-b">
                {/* ==== Left ==== */}
                <div className="flex items-center gap-14">
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            {/* ==== Logo ==== */}
                            <Image 
                                src="/images/logo.png" 
                                alt="Logo" 
                                width={35} 
                                height={29}
                            />
                            <h3 className={`${vt323.className} text-3xl`}> 
                                Voidcle 
                            </h3>
                        </Link>
                    </div>

                    {/* ==== Menu List ==== */}
                    <ul className="flex items-center gap-7 relative">
                        <li className="cursor-pointer flex items-center gap-0.5 text-[#1F2937] hover:text-black">
                            Tech <GoTriangleDown className="mt-1"/>
                        </li>
                        <li className="cursor-pointer flex items-center gap-0.5 text-[#1F2937] hover:text-black">
                            How To <GoTriangleDown className="mt-1"/>
                        </li>
                    </ul>
                </div>

                {/* ==== Right ==== */}
                <div className="flex items-center gap-x-3">
                    <button className="text-xl text-[#1F2937] hover:text-black">
                        <HiMoon/>
                    </button>
                </div>
            </nav>

            {/* ==== Mobile and Tab Nav ==== */}
            <nav className="max-w-7xl mx-auto py-3.5 md:px-6 px-3 lg:hidden flex items-center justify-between lg:border-b-0 border-b">
                {/* ==== Left ==== */}
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        {/* ==== Logo ==== */}
                        <Image 
                            src="/images/logo.png" 
                            alt="Logo" 
                            width={35} 
                            height={29}
                        />
                        <h3 className={`${vt323.className} text-3xl`}> 
                            Voidcle 
                        </h3>
                    </Link>
                </div>

                {/* ==== Menu List ==== */}
                <div className={`absolute w-full bg-gray-100 left-0 right-0 flex flex-col gap-4 pt-2 pb-8 top-[65px] shadow-xl z-10 transition duration-150 ${toggle ? "translate-x-0" : "translate-x-[-100%]"}`}>
                    <ul className="flex flex-col">
                        <li className="cursor-pointer flex justify-between items-center gap-0.5 text-[#1F2937] hover:text-black py-3 md:px-6 px-4 hover:bg-gray-200">
                            Tech <GoTriangleDown className="mt-1"/>
                        </li>
                        <li className="cursor-pointer flex items-center gap-0.5 text-[#1F2937] hover:text-black py-3 md:px-6 px-4 justify-between hover:bg-gray-200">
                            How To <GoTriangleDown className="mt-1"/>
                        </li>
                    </ul>

                    <button className="text-xl text-[#1F2937] hover:text-black md:px-6 px-4">
                        <HiMoon/>
                    </button>
                </div>

                {/* ==== Right ==== */}
                <div className="flex items-center gap-x-3" onClick={() => setToggle(!toggle)}>
                    <button className="text-xl text-[#1F2937] hover:text-black">
                        {toggle ? <RxCross1/> : <FaBars/>}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;