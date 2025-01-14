"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoMdMenu, IoMdClose } from "react-icons/io"

export const Frame = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden  lg:w-[1920px]">
      <div className="relative h-full w-full">
        {/* Background Layer */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer_1-0YHc9qRioODa1OWD1xqpeLo8K9zgbI.png"
          alt="Layer"
          className=" absolute left-0 top-0 h-full w-full object-cover lg:h-[965px] lg:w-[700px] hidden lg:block"
          width={700}
          height={965}
          priority
        />

        {/* Green Vector Background */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-u0tRWLvVmTb7m4bOqxpgYhZ5ElVWXR.png"
          alt="Vector"
          className="absolute left-0 top-0 h-full w-full object-cover lg:left-[85px] lg:top-[59px] lg:h-[615px] lg:w-[1400px] hidden lg:block"
          width={140}
          height={615}
          priority
        />

        {/* Logo Section - Moved outside green box */}
        <div className="absolute left-4 top-4 z-10 h-[70px] w-[68px] rounded-full bg-black lg:left-[175px] lg:top-[88px] lg:h-[137px] lg:w-[134px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
            alt="Logo"
            className="absolute -left-[1.5px] -top-[1.5px] h-[73px] w-[71px] lg:-left-[3px] lg:-top-[3px] lg:h-[143px] lg:w-[140px]"
            width={140}
            height={143}
            priority
          />
        </div>

        {/* Gradient Line - Hidden on mobile */}
        <div className="absolute left-[540px] top-[115px] hidden h-[3px] w-[75px] rounded-[10px] bg-gradient-to-r from-[#3d5d48] to-white lg:block" />

        {/* Navigation - Mobile Menu Button */}
        <button
          className="absolute right-4 top-8 z-20 text-3xl text-black lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose fill="white" /> : <IoMdMenu />}
        </button>

        {/* Mobile Menu */}
        {/* <nav
          className={`absolute right-0 top-0 z-10 flex h-screen w-64 flex-col items-center justify-center gap-6 bg-[#3d5d48] transition-transform duration-300 ease-in-out ${
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
        </nav> */}

        {/* Desktop Navigation */}
        <nav className="absolute left-[550px] top-[80px] hidden gap-[55px] lg:flex">
          <Link href="/" className="text-[17px] text-black hover:text-[#3d5d48]">Home</Link>
          <Link href="/whitePaper" className="text-[17px] text-black hover:text-[#3d5d48]">White Paper</Link>
          <Link href="/tokenomics" className="text-[17px] text-black hover:text-[#3d5d48]">Tokenomics</Link>
          <Link href="/buycoin" className="text-[17px] text-black hover:text-[#3d5d48]">Buy Coin</Link>
          <Link href="/contact" className="text-[17px] text-black hover:text-[#3d5d48]">Team & Contact</Link>
        </nav>

        {/* Invest Button - Desktop */}
        <button className="absolute left-[1241px] top-[70px] hidden px-12 p-2 items-center justify-center rounded-[45px] bg-[#3d5d48] lg:flex">
          <span className="text-lg font-medium text-white">Invest Here</span>
        </button>

        {/* Main Content */}
        <div className="absolute min-h-screen left-0 top-[100px] flex w-full  flex-col items-center gap-[19px] px-4 text-center lg:left-[185px] lg:top-[220px] lg:w-auto lg:items-start lg:px-0 lg:text-left bg-[#3D5D48] lg:bg-transparent">
          <div>
            <p className="text-lg text-white mt-10">
              Invest in sustainable farming with our innovative RWA token.
            </p>
          </div>

          <h1 className="w-full bg-gradient-to-b from-white to-[#fde3c0] bg-clip-text text-2xl font-medium text-transparent lg:w-[780px] lg:text-5xl">
            Empowering Agriculture <br /> Through Blockchain <br /> Technology
          </h1>

          <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[29px] items-center mt-5">
            <Link href="/download-whitepaper">
              <button className="flex  items-center justify-center rounded-[40px] gap-2 bg-[#be8336] px-4 p-3">
                <span className="text-sm font-semibold text-white">Download White Paper</span>
                <Image
                  src="https://c.animaapp.com/ocFPXCNG/img/line-7242.svg"
                  alt="Arrow"
                  width={37}
                  height={6}
                />
              </button>
            </Link>

            <Link href="/learn-more">
              <button className="flex  items-center justify-center gap-[9px] rounded-[40px] border-[1.5px] border-[#be8336] px-4 p-3">
                <span className="text-sm font-semibold text-[#be8336]">Learn More</span>
                <Image
                  src="https://c.animaapp.com/ocFPXCNG/img/line-7242-1.svg"
                  alt="Arrow"
                  width={37}
                  height={6}
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative bg-[#3D5D48] lg:bg-transparent">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-home-Fo9cXwEUou6d536WWnxYdkWVwPMNtr.png"
            alt="Sustainable farming"
            className="absolute left-1/2 top-[500px] h-[200px] w-[80%] -translate-x-1/2 rounded-lg object-cover lg:left-[860px] lg:top-[170px] lg:h-[356px] lg:w-[592px] lg:translate-x-0"
            width={592}
            height={356}
            priority
          />
        </div>
      </div>
    </div>
  )
}