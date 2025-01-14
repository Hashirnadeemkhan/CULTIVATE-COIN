import { FileText, CreditCard, ClipboardCheck } from 'lucide-react'
import Image from 'next/image'

export default function SafetyFeatures() {
  return (
    <div className="lg:bg-[#435B45] h-72 px-4  rounded-3xl">
      <h2 className="lg:text-white text-[#3D5D48] w-full lg:text-4xl text-3xl font-medium text-center mb-16 pt-10">
        Key Safety Features
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-8">
        {/* Smart Contracts */}
        <div className="bg-white p-8 rounded-2xl">
          <div className="bg-[#FDF3E7] w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-8 h-8 text-[#D4A064]" />
          </div>
          <h3 className="text-[#435B45] text-2xl font-medium mb-6">
            Smart Contracts
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
           <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
                      alt="Logo"

                      width={30}
                      height={20}
                      priority
                    />
              <p className="text-gray-600">
                Funds are held in escrow-like smart contracts.
              </p>
            </li>
            <li className="flex items-start gap-3">
            <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
                      alt="Logo"

                      width={30}
                      height={20}
                      priority
                    />
              <p className="text-gray-600">
                Released only when the target for each funding round is fully subscribed.
              </p>
            </li>
          </ul>
        </div>

        {/* Refund Mechanism */}
        <div className="bg-white p-8 rounded-2xl">
          <div className="bg-[#FDF3E7] w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <CreditCard className="w-8 h-8 text-[#D4A064]" />
          </div>
          <h3 className="text-[#435B45] text-2xl font-medium mb-6">
            Refund Mechanism
          </h3>
          <div className="flex items-start gap-3">
          <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
                      alt="Logo"

                      width={30}
                      height={20}
                      priority
                    />
            <p className="text-gray-600">
              Phase 1, Round 1 has a strict deadline (28 February 2025) to meet contractual obligations. If this round is not fully funded, smart contracts will automatically refund investors.
            </p>
          </div>
        </div>

        {/* Stablecoin Transactions */}
        <div className="bg-white p-8 rounded-2xl">
          <div className="bg-[#FDF3E7] w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <ClipboardCheck className="w-8 h-8 text-[#D4A064]" />
          </div>
          <h3 className="text-[#435B45] text-2xl font-medium mb-6">
            Stablecoin Transactions
          </h3>
          <div className="flex items-start gap-3">
          <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vmu5Nvy2iGYYCV1bLjAiUDaOzQ6snz.png"
                      alt="Logo"

                      width={30}
                      height={20}
                      priority
                    />
            <p className="text-gray-600">
              Investors contribute using stablecoins (USDC/USDT) to avoid crypto market volatility and ensure transaction fidelity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
