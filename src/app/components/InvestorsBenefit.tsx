import { Box, Lock, BarChart2, Layers, Recycle } from 'lucide-react'

export default function InvestorBenefits() {
  const benefits = [
    {
      icon: Box,
      title: "Transparency",
      description: "Blockchain-based transactions.",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Smart contracts ensure fund protection.",
    },
    {
      icon: BarChart2,
      title: "Dynamic Valuation",
      description: "Share price in later rounds reflects company growth and ROI potential.",
    },
    {
      icon: Layers,
      title: "Stability",
      description: "Use of stablecoins prevents volatility.",
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description: "Focus on renewable energy and infrastructure development.",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto mt-20 sm:mt-0 inv">
      <h2 className="text-[40px] text-center mb-16 text-[#2F4D3A] font-normal">
        Investor Benefits
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {benefits.map((benefit) => {
          const Icon = benefit.icon
          // Apply special grid positioning for last two items
        //   const gridClass = index >= 3 ? "md:col-start-2 md:col-span-1 " : ""
          
          return (
            <div key={benefit.title} >
              <div className="flex flex-col items-center text-center ">
                <div className="w-20 h-20 rounded-full bg-[#FDF3EA] flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#D4804D]" />
                </div>
                <h3 className="text-[#2F4D3A] text-2xl mb-4">{benefit.title}</h3>
                <p className="text-gray-600 max-w-xs">{benefit.description}</p>
              </div>
            </div>
          )}
        )}
      </div>
    </section>
  )
}

