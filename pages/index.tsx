import HeadTag from '../components/HeadTag';
import Navbar from '../components/Layout/Navbar';
import { Inter, VT323 } from '@next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';

// ==== Google Font ====
const inter = Inter({ subsets: ['latin'] });

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'] 
});

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-[#F9F9FB] dark:bg-[#1B1717] ${inter.className}`}>
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

      {/* ==== Main ==== */}
      <main className="lg:my-6 my-4">
        {/* ==== Banner ==== */}
        <div className="max-w-3xl mx-auto md:px-6 px-3 lg:mt-8 mt-4">
          {/* ==== Heading text ==== */}
          <h1 className="text-[#0F172A] dark:text-[#FFFFFF] font-semibold md:text-6xl sm:text-5xl text-4xl">
            Know Better About The 
            <span className={`${vt323.className} md:text-7xl sm:text-6xl text-5xl flex flex-wrap items-center gap-5`}> 
              Software World
              <img src="https://thumbs.gfycat.com/YearlyLoneBarnowl.webp" loading="lazy" alt="Typing moneky" className="md:w-[72px] sm:w-[62px] w-[52px]" width={72} height={72} />
            </span>
          </h1>
          <p className="md:text-2xl sm:text-xl text-lg text-[#374151] dark:text-[#E2E8F0] mt-2">
            Read tech world information and learn coding at  one place. Improve yourself for Future skills.
          </p>

          <div className="mt-10 relative">
            {/* ==== Binary Text ==== */}
            <motion.span 
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{duration:0.5, type: "spring"}} 
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl ${vt323.className}`}
            >
                0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.1, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl right-0 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.2, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-0 ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.3, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-0 right-3 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.4, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-2xl top-10 right-24 ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.5, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-20 right-20 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.6, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-20 right-36 left-20 ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.7, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-20 left-20 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.8, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-14 left-[17rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:0.9, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-36 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-[15rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.1, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-8 left-[10rem] ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.2, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-1 left-[21rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.3, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-20 right-5 ${vt323.className}`}
            >
              1
            </motion.span> 

            {/* ==== Banner Image ==== */}
            <Image src="/images/banner.png" alt="Old Man" className="mx-auto" width={500} height={443}/>

            {/* ==== Binary Text ==== */}
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.4, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl left-16 bottom-[10rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.5, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl right-0 top-[13rem] ${vt323.className}`}
            >
              1
            </motion.span>
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.6, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-[4rem] left-4 ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.7, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-0 left-[14rem] ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.8, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-28 right-20 ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:1.9, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-1 right-20 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-3 left-20 ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.1, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-[4rem] left-7 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.2, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-[5rem] left-[8rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.3, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-4 right-10 ${vt323.className}`}
            >
                1
              </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.4, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-0 left-[8rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.5, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl bottom-28 right-9 ${vt323.className}`}
            >
              1
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.6, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-20 left-[21rem] ${vt323.className}`}
            >
              0
            </motion.span> 
            <motion.span
              initial={{y:"100%", opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay:2.7, duration:0.5, type: "spring"}}
              className={`absolute text-[#3AC648] font-semibold md:text-5xl sm:text-4xl text-3xl top-36 right-10 ${vt323.className}`}
            >
              1
            </motion.span> 
          </div>
        </div>

        {/* ==== Global Software Company and Blog Part ==== */}
        <div className="max-w-7xl mx-auto md:px-6 px-3 sm:my-10 my-8">
          <div className="grid lg:grid-cols-2 gap-5">
            {/* ==== Left ==== */}
            <section>
              {/* ==== Global Eartch rotate section ==== */}
              <section className="relative">
                <div className="flex justify-center items-center lg:m-36 m-5">
                  <div className="absolute left-[7.5rem] right-[1rem] lg:flex hidden rotate-[30deg]">
                    {/* ==== Bar ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.5, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[2rem]"
                    ></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.4, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[1.3rem]"></motion.div>
                    <motion.div 
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.3, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.2, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.1, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-1.3rem]"></motion.div>
                    {/* ==== Image ==== */}
                    <motion.div
                       initial={{y:"10%", opacity: 0 }}
                       whileInView={{y:0, opacity: 1}}
                       viewport={{ once: true }}
                       transition={{delay:0.6, type: "spring"}}
                    >
                      <Image src="/images/bitcoin.png" className="relative right-[10.3rem] top-[-1rem]" alt="Bitcoin" width={48} height={48}/>
                    </motion.div>
                  </div>

                  <div className="absolute left-[-5.5rem] right-[7.5rem] lg:flex hidden rotate-[150deg]">
                    {/* ==== Bar ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.5, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[2rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.4, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[1.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.3, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.2, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-0.3rem]"></motion.div>
                    <motion.div 
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.1, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-1.3rem]"></motion.div>
                    {/* ==== Image ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.6, type: "spring"}}
                    >
                      <Image src="/images/amazon.png" className="relative right-[10.3rem] top-[-1rem] rotate-[210deg]" alt="Amazon" width={48} height={48}/>
                    </motion.div>
                  </div>

                  <div className="absolute left-[14rem] right-[6.1rem] lg:flex hidden rotate-[200deg]">
                    {/* ==== Bar ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.5, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[2rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.4, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[1.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.3, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.2, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.1, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-1.3rem]"></motion.div>
                    {/* ==== Image ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.6, type: "spring"}}
                    >
                      <Image src="/images/tesla.png" className="relative right-[10.3rem] top-[-1rem] rotate-[170deg]" alt="Tesla" width={48} height={48}/>
                    </motion.div>
                  </div>

                  <div className="absolute left-[6.5rem] right-[0rem] lg:flex hidden rotate-[360deg]">
                    {/* ==== Bar ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.5, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[2rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.4, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[1.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.3, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.2, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.1, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-1.3rem]"></motion.div>
                    {/* ==== Image ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.6, type: "spring"}}
                    >
                      <Image src="/images/google.png" className="relative right-[10.3rem] top-[-1rem] rotate-[360deg]" alt="Google" width={48} height={48}/>
                    </motion.div>
                  </div>

                  <div className="absolute left-[7.5rem] right-[0rem] lg:flex hidden rotate-[320deg]">
                    {/* ==== Bar ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.5, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[2rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.4, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[1.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.3, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.2, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.1, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-1.3rem]"></motion.div>
                    {/* ==== Image ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.6, type: "spring"}}
                    >
                      <Image src="/images/microsoft.png" className="relative right-[10.3rem] top-[-1rem] rotate-[360deg]" alt="Microsoft" width={48} height={48}/>
                    </motion.div>
                  </div>

                  <div className="absolute left-[7rem] right-[6.5rem] lg:flex hidden rotate-[250deg]">
                    {/* ==== Bar ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.5, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[2rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.4, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[1.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.3, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.2, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-0.3rem]"></motion.div>
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.1, type: "spring"}}
                      className="w-4 h-1.5 bg-[#374151] dark:bg-white relative right-[-1.3rem]"></motion.div>
                    {/* ==== Image ==== */}
                    <motion.div
                      initial={{y:"10%", opacity: 0 }}
                      whileInView={{y:0, opacity: 1}}
                      viewport={{ once: true }}
                      transition={{delay:0.6, type: "spring"}}
                    >
                      <Image src="/images/twitter.png" className="relative right-[10.3rem] top-[-1rem] rotate-[100deg]" alt="Twitter" width={48} height={48}/>
                    </motion.div>
                  </div>

                  {/* ==== Earth Image ==== */}
                  <img 
                    src="https://media.tenor.com/_MytJr5kjiAAAAAi/earth-pixel-pixel-art.gif" 
                    width={192} 
                    height={192} 
                    loading="lazy" 
                    alt="Earth Image"
                    className="animate-rotate-glob" 
                  />
                </div>
              </section>

              {/* ==== Card ==== */}
              <section className="flex justify-center">
                <div className="max-w-[436px] bg-transparent border border-[#CFC3C3] dark:border-[#5E5656] rounded-2xl shadow-sm dark:shadow-gray-800 mt-16">
                  <div className="relative">
                    <Image src="/images/google.png" className="absolute top-5" width={40} height={40} alt="Google" />
                    <Image src="/images/amazon.png" className="absolute top-7 left-14" width={40} height={40} alt="Amazon" />
                    <Image src="/images/microsoft.png" className="absolute left-28 top-3" width={40} height={40} alt="Microsoft" />
                    <img src="https://play-lh.googleusercontent.com/a4Xrc-8oQLu05mOrNPuvA_o2nZEIEnOoTH4wB91Slw_hCvuIu_Qgi440bK9mC8ml-KA" className="absolute left-[10rem] top-1" width={40} height={40} alt="DSA" />
                    <img src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif" width={436} height={260} className="rounded-t-2xl" alt="Coding Image" />
                  </div>
                  <div className="p-5 flex flex-col gap-y-5">
                    <h2 className="sm:text-2xl text-xl text-[#0F172A] dark:text-[#F1F5F9] font-[500]"> Why DSA is important for big tech companies </h2>
                    <button className="bg-[#CCE8F4] dark:bg-[#2C3539] py-2.5 hover:bg-[#c2e0ec] px-3 rounded-2xl sm:text-lg border border-[#A89494] dark:border-[#C0BCBC] dark:hover:bg-[#242c30]"> Read More... </button>
                  </div>
                </div>
              </section>
            </section>

          {/* ==== Right ==== */}
           <section className="flex flex-col border-l border-[#E8DEDE] dark:border-[#443D3D]">
              {/* ==== Blog Part 1 ==== */}
              <Link href="/" className="flex sm:flex-row flex-col items-center gap-5 sm:pl-5 pl-3 pt-0 sm:pb-5 pb-3 border-b border-[#E8DEDE] dark:border-[#443D3D] hover:text-blue-700 relative">
                {/* ==== circle border beauty === */}
                <span className="absolute w-[7px] h-[7px] rounded-full bg-[#E8DEDE] dark:bg-[#443D3D] left-[-4px] bottom-[-4px]"></span>
                <div className="bg-[#CCE8F4] rounded-[10px]">
                  <img src="https://thumbs.gfycat.com/AngelicConcreteHypsilophodon.webp" loading="lazy" alt="typeing image" width={181} height={144} />
                </div>
                <div className="space-y-1">
                  {/* title */}
                  <h2 className="sm:text-[22px] text-xl font-[500]"> Why do Most people Fall to learn at code </h2>
                  {/* des */}
                  <p className="text-[#534E4E] dark:text-[#CBD5E1] text-sm">Some people are they fail because  they are not good feeling about code......</p>
                </div>
              </Link>

              {/* ==== Blog Part 2 ==== */}
              <Link href="/" className="flex sm:flex-row flex-col items-center gap-5 sm:pl-5 pl-3 sm:py-5 py-3 border-b border-[#E8DEDE] dark:border-[#443D3D] hover:text-blue-700 relative">
                {/* ==== circle border beauty === */}
                <span className="absolute w-[7px] h-[7px] rounded-full bg-[#E8DEDE] dark:bg-[#443D3D] left-[-4px] bottom-[-4px]"></span>
                <div className="bg-[#dad4b1] rounded-[10px]">
                  <img src="https://user-images.githubusercontent.com/5713670/87202985-820dcb80-c2b6-11ea-9f56-7ec461c497c3.gif" loading="lazy" alt="Github Image" className="px-2" width={181} height={131} />
                </div>
                <div className="space-y-1">
                  {/* title */}
                  <h2 className="sm:text-[22px] text-xl font-[500]"> Github provide the free student developer pacek </h2>
                  {/* des */}
                  <p className="text-[#534E4E] dark:text-[#CBD5E1] text-sm">We will cover here future the masterplane microsoft developer controll........</p>
                </div>
              </Link>

              {/* ==== Blog Part 3 ==== */}
              <Link href="/" className="flex sm:flex-row flex-col items-center gap-5 sm:pl-5 pl-3 sm:py-5 py-3 border-b border-[#E8DEDE] dark:border-[#443D3D] hover:text-blue-700 relative">
                {/* ==== circle border beauty === */}
                <span className="absolute w-[7px] h-[7px] rounded-full bg-[#E8DEDE] dark:bg-[#443D3D] left-[-4px] bottom-[-4px]"></span>
                <div className="bg-[#303030] rounded-[10px]">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMAX_AhN--QaHqJjdrnmEUDMVhEyz_JzbtA&usqp=CAU" loading="lazy" alt="Microsoft Image" className="rounded-[10px] py-3 px-6" width={181} height={131} />
                </div>
                <div className="space-y-1">
                  {/* title */}
                  <h2 className="sm:text-[22px] text-xl font-[500]"> Will future developers become dependent on Microsoft? </h2>
                  {/* des */}
                  <p className="text-[#534E4E] dark:text-[#CBD5E1] text-sm">We will cover here future the masterplane microsoft developer controll........</p>
                </div>
              </Link>

              {/* ==== Blog Part 3 ==== */}
              <Link href="/" className="flex sm:flex-row flex-col items-center gap-5 sm:pl-5 pl-3 sm:py-5 py-3 border-b border-[#E8DEDE] dark:border-[#443D3D] hover:text-blue-700 relative">
                {/* ==== circle border beauty === */}
                <span className="absolute w-[7px] h-[7px] rounded-full bg-[#E8DEDE] dark:bg-[#443D3D] left-[-4px] bottom-[-4px]"></span>
                <div className="bg-[#303030] rounded-[10px] max-w-[181px] max-h-[144px] relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" loading="lazy" alt="C plus plus" className="absolute top-3 left-3" width={15} height={15} />
                  <img src="https://cdn-icons-png.flaticon.com/512/657/657695.png" loading="lazy" alt="Database" className="absolute top-3 left-8" width={15} height={15} />
                  <img src="https://play-lh.googleusercontent.com/a4Xrc-8oQLu05mOrNPuvA_o2nZEIEnOoTH4wB91Slw_hCvuIu_Qgi440bK9mC8ml-KA" loading="lazy" alt="DSA" className="absolute top-3 left-14" width={15} height={15} />
                  <img src="https://cdn2.iconfinder.com/data/icons/maths/300/191538584Untitled-3-512.png" loading="lazy" alt="Dicrete Mathmatics" className="absolute top-3 left-20" width={15} height={15} />
                  <img src="/images/coding.gif" loading="lazy" alt="Discrete Mathmatics" className="rounded-[10px]" width={181} height={144} />
                </div>
                <div className="space-y-1">
                  {/* title */}
                  <h2 className="sm:text-[22px] text-xl font-[500]"> Coding roadmap for cracking big tech software Companies </h2>
                  {/* des */}
                  <p className="text-[#534E4E] dark:text-[#CBD5E1] text-sm">We will cover here future the masterplane microsoft developer controll........</p>
                </div>
              </Link>

              {/* ==== Blog Part 4 ==== */}
              <Link href="/" className="flex sm:flex-row flex-col items-center gap-5 sm:pl-5 pl-3 sm:py-5 py-3 border-b border-[#E8DEDE] dark:border-[#443D3D] hover:text-blue-700 relative">
                {/* ==== circle border beauty === */}
                <span className="absolute w-[7px] h-[7px] rounded-full bg-[#E8DEDE] dark:bg-[#443D3D] left-[-4px] bottom-[-4px]"></span>
                <div className="bg-[#303030] rounded-[10px]">
                  <img src="https://d2f8l4t0zpiyim.cloudfront.net/000_clients/1098434/page/10984342GYF2qLb.gif" loading="lazy" alt="Lofi Coder" className="rounded-[10px] w-[160px] h-[90px]" width={181} height={144} />
                </div>
                <div className="space-y-1">
                  {/* title */}
                  <h2 className="sm:text-[22px] text-xl font-[500]"> Coder and lofi story </h2>
                  {/* des */}
                  <p className="text-[#534E4E] dark:text-[#CBD5E1] text-sm">We will cover here future the masterplane microsoft developer controll........</p>
                </div>
              </Link>
           </section>
          </div>
        </div>
      </main>

      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  )
}
