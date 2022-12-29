import HeadTag from '../components/HeadTag';
import Navbar from '../components/Layout/Navbar';
import { Inter } from '@next/font/google';

// ==== Google Font ====
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-[#F9F9FB] ${inter.className}`}>
      {/* ==== Heading Tag ==== */}
      <HeadTag
        des="We share a lot of software related things here. We do coding editions for software developers"
        kew="Software Devloper, How to become a Software Developer, Data Structure and Algorithm, Coding, DSA, C++, Full Stack Developer, Frontend Developer, Coding interview, Software Developer big tech software companies, Coding pixal art website, Beautiful software developer website"
        auth="Ukhang Marma"
        title="Voidcle - The World Software Developer Edition"
      />

      {/* ==== Header ==== */}
      <header>
        {/* ==== Navbar ==== */}
        <Navbar/>
      </header>
    </div>
  )
}
