import React from "react";
import Image from "next/image";

export default function Metrics() {
  return (
    <div >
    <div className="relative">
      <div className="relative max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {/* Projected Total Valuation */}
          <div className="flex flex-col items-center md:items-start px-6 py-4 relative">
            <h3 className="text-3xl font-semibold text-[#3D5D48] mb-2">$100 M</h3>
            <p className="text-gray-600 text-center md:text-left">
              Projected Total <br /> Valuation
            </p>
            {/* Vertical border */}
            <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 h-28 w-[1px] bg-green-800" />
          </div>

          {/* Equity Offered */}
          <div className="flex flex-col items-center md:items-start px-6 py-4 relative">
            <h3 className="text-3xl font-semibold text-[#3D5D48] mb-2">35%</h3>
            <p className="text-[#3D5D48] text-center md:text-left">
              Equity Offered Across <br /> Both Phases
            </p>
            {/* Vertical border */}
            <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 h-28 w-[1px] bg-green-800" />
          </div>

          {/* Funds Secured */}
          <div className="flex flex-col items-center md:items-start px-6 py-4 relative">
            <h3 className="text-3xl font-semibold text-[#3D5D48] mb-2">100%</h3>
            <p className="text-[#3D5D48] text-center md:text-left">
              Funds Secured by Smart Contracts
            </p>
            {/* Vertical border */}
            <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 h-28 w-[1px] bg-green-800" />
          </div>

          {/* Stablecoin */}
          <div className="flex flex-col items-center md:items-start px-6 py-4">
            <h3 className="text-3xl font-semibold text-[#3D5D48] mb-2 z-20 relative">
              Stablecoin
            </h3>
            <p className="text-[#3D5D48] text-center md:text-left">
              USDC/USDT for Stability Payments
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-40 -right-32 lg:block hidden h-[900px]">
        <Image
          src="https://c.animaapp.com/ocFPXCNG/img/layer-1.svg"
          alt="Layer"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    </div>
  );
}

