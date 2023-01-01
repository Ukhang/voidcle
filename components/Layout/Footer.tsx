import Image from "next/image";
import Link from "next/link";
import { VT323 } from '@next/font/google';

// ==== Google Font ====
const vt323 = VT323({
    weight: '400',
    subsets: ['latin'] 
});

// ==== Company List Type ====
type CompanyListType = {
    id: number,
    name: string,
    link: string
}

// ==== Company List Menu ====
const companyList: CompanyListType[] = [
    { id: 1, name: "About", link: "/" }
];

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-[#E8DEDE] dark:border-[#443D3D] bg-[#e0f1f8] dark:bg-[#262d30] md:px-6 px-3 md:py-6 py-4">
            <div className="max-w-3xl mx-auto flex sm:flex-row flex-col justify-between gap-5 items-start w-full">
                {/* ==== First ==== */}
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

                {/* ==== Second ==== */}
                <div className="space-y-3">
                    <h4 className="font-semibold capitalize text-[#0F172A] dark:text-[#CBD5E1]"> Company </h4>
                    <ul className="flex flex-col gap-y-3">
                        {companyList.map((menu) => (
                            <li className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#0F172A] dark:hover:text-white" key={menu.id}>
                                <Link href={menu.link}> {menu.name} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <p className="text-center text-[#303030] dark:text-gray-400 text-sm"> copyright &copy; 2022 <Link href="/" className="hover:underline hover:text-[#0F172A] dark:hover:text-[#CBD5E1]"> voidcle.tech </Link> </p>
            </div>
        </footer>
    )
}

export default Footer;