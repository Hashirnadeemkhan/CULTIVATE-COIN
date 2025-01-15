"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io"


export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
           <div className="relative h-full w-full">
        {/* Background Layer */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer_1-0YHc9qRioODa1OWD1xqpeLo8K9zgbI.png"
          alt="Layer"
          className=" absolute md:left-0 top-0   object-cover right-0 w-[965px] h-[700px]  md:h-[965px] md:w-[700px] "
          width={700}
          height={965}
          priority
        />
</div>
      
    <div className=" bg-white  max-w-7xl mx-auto ">
      {/* Navigation */}
     

      {/* Hero Section */}
      <div className="relative">
        {/* Background Vector */}
        <div
  className="absolute inset-0  bg-no-repeat bg-[url('/herobg.png')] md:hidden "
/>
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/Vector.png')] hidden lg:mt-10 md:mt-5 sm:-mr-[10%] lg:-mr-0 rounded-2xl   md:block"
/>



<div className="flex justify-between items-center w-full navbar">
   
  <div className="absolute sm:top-8 lg:top-20 md:-ml-2 left-5 lg:left-20 top-4 z-10 rounded-full bg-black ">
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
      alt="Logo"
      width={120}
      height={120}
      priority
      className=' w-24 h-24'
    />
  </div>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-8 md:mt-10 lg:mt-20">
    <Link href="/" className="text-black hover:opacity-80 sm:text-sm lg:text-lg">
      Home
    </Link>
    <Link href="/white-paper" className="text-black  hover:opacity-80 sm:text-sm lg:text-lg ">
      White Paper
    </Link>
    <Link href="/tokenomics" className="text-black hover:opacity-80 sm:text-sm lg:text-lg">
      Tokenomics
    </Link>
    <Link href="/buy-coin" className="text-black hover:opacity-80 sm:text-sm lg:text-lg">
      Buy Coin
    </Link>
    <Link href="/team" className="text-black hover:opacity-80 sm:text-sm lg:text-lg">
      Team & Contact
    </Link>
    <button className="bg-[#3D5D48] sm:text-sm sm:px-6   text-white lg:px-9 py-3 rounded-full hover:bg-[#2c4334] lg:ml-20 sm:mr-2">
      Invest Here
    </button>
  </div>
        {/* Gradient Line - Hidden on mobile */}
         <div className="absolute lg:left-[410px] lg:top-[120px] hidden h-[3px] w-[75px] left-[150px] top-[80px] rounded-[10px] bg-gradient-to-r from-[#3d5d48] to-white md:block" />
</div>

        {/* Mobile Menu Button */}
        <div className="relative">
        <button
                        className="md:hidden flex justify-between items-center  ml-80 mt-10 z-30"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <IoMdClose fill='white' className="h-10 w-10 text-black z-30" />
                        ) : (
                            <IoMdMenu fill='black' className="h-10 w-10 text-black z-30" />
                        )}
                    </button>
                    </div>

    
       {/* Mobile Navigation */}
       <nav
          className={`absolute md:hidden right-0 top-0 z-10 flex h-screen w-64 flex-col items-center justify-center gap-6 bg-[#3d5d48] transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link href="/" className="text-[17px] text-white hover:text-[#be8336]">Home</Link>
          <Link href="/whitePaper" className="text-[17px] text-white hover:text-[#be8336]">White Paper</Link>
          <Link href="/tokenomics" className="text-[17px] text-white hover:text-[#be8336]">Tokenomics</Link>
          <Link href="/buycoin" className="text-[17px] text-white hover:text-[#be8336]">Buy Coin</Link>
          <Link href="/contact" className="text-[17px] text-white hover:text-[#be8336]">Team & Contact</Link>
          <button className="mt-4 flex px-8 p-2 items-center justify-center rounded-[45px] bg-[#be8336]">
            <span className="text-[20px] font-medium text-white">Invest Here</span>
          </button>
       </nav>

        {/* Content */}
        <div className="container mx-auto  pt-12 pb-24 md:pt-24 md:pb-32 relative lg:px-10 px-5">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="text-white space-y-6 w-full   lg:w-1/2 md:mt-0 mt-20">
      <p className="text-sm md:text-base">
        Invest in sustainable farming with our innovative RWA token.
      </p>
      <h1 className="w-full bg-gradient-to-b from-white to-[#fde3c0] bg-clip-text text-2xl font-medium text-transparent lg:w-[780px] lg:text-5xl md:text-3xl">
         Empowering Agriculture <br /> Through Blockchain <br /> Technology
         </h1>
      <div className="flex flex-col  lg:flex-row gap-4 pt-4 ">
        <button className="bg-[#CD853F] hover:bg-[#b5742f] text-white px-6 py-2 rounded-full">
          Download White Paper →
        </button>
        <button className="border border-[#CD853F] text-[#CD853F] hover:bg-[#CD853F] hover:text-white px-6 py-2 rounded-full">
          Learn More →
        </button>
      </div>
    </div>
    <div className="md:mb-20">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-home-eOkaMnmC9YgG4b7uNpynPpTuZjBk5V.png"
        alt="Agricultural field with curved rows"
        width={500}
        height={500}
        className="rounded-2xl "
        priority
      />
    </div>
    </div>
  </div>
</div>

        </div>
        </div>
   
  );
}
