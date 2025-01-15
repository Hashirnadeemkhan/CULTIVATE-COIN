import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full my-10 py-10 max-w-7xl mx-auto bg-[#3D5D48]">
      {/* Background with angle */}
      <div
        className="absolute inset-0 sm:block hidden rounded-3xl"
        style={{
          backgroundImage: 'url("/footer.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Uncomment if clipPath is needed */}
        {/* clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)", */}
      </div>

      {/* Content */}
      <div className="relative px-8 py-12 text-white mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description Section */}
          <div className="md:col-span-4">
           <div className="absolute sm:top-8 lg:-top-14  md:-ml-2 left-5 lg:left-20 -top-14 z-10 rounded-full bg-black ">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
                alt="Logo"
                width={120}
                height={120}
                priority
                className=' w-24 h-24'
              />
            </div>
            <p className="text-sm mb-6">
              Water and Land: The Roots of Our Future, Accessible to All with Cultivate Coin.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:opacity-80">
                <Twitter size={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xl mb-4 font-bold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:opacity-80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Buy & Stake
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Team & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4 font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:opacity-80">
                  Resource-1
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Resource-2
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Resource-3
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Resource-4
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-xl mb-4 font-bold">Contact Info</h3>
            <address className="not-italic space-y-2">
              <p>222 Some Road,</p>
              <p>Some City, AK 1234</p>
              <p>Telephone: + (012) 345 6789</p>
              <p>Fax: + (012) 345 6789</p>
              <p>Email: contact@cultivatecoin.com</p>
            </address>
          </div>
        </div>

      <p className="border border-gray-400 mt-4"></p>
      </div>
      <div className="relative ">
        {/* Copyright */}
        <div className=" text-center text-sm absolute sm:right-28 sm:-top-5 md:text-black -top-2 right-10 text-white">
          ©2025 CultivateCoin Ltd. All rights reserved.
        </div>
        </div>
    </footer>
  );
}
