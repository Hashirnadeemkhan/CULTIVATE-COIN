import React from 'react'
import Image from 'next/image';
const rounds = [
    {
      title: "Gravity Irrigation Feed and Hydro Energy Round",
      purpose: "Invest in renewable energy systems, focusing on gravity-fed and hydro technologies. Irrigation expansion and upgrades.",
      stakeOffered: "5%",
      value: "$5M",
      isHighlighted: true,
      image:  "/boxes.png", // Add the correct path for the highlighted box image
      whiteimage: "/path-to-non-highlighted-image.png", // Add the correct path for the non-highlighted box image
      arrow: "/yellow-arrow.png", // Add the correct path for the arrow image
      deadline: null, // Assuming no deadline is mentioned
    },
    {
      title: "Independent Energy Round",
      purpose: "Purchase of independent energy initiatives to increase self-sustainability.",
      stakeOffered: "5%",
      value: "$6M",
      isHighlighted: false,
      image: "/path-to-highlighted-image.png", // Add the correct path for the highlighted box image
      whiteimage: "/white-box.png", // Add the correct path for the non-highlighted box image
      arrow: "/yellow-arrow.png", // Add the correct path for the arrow image
      deadline: null, // Assuming no deadline is mentioned
    },
  ];
  
const Round2 = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto mt-20">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold text-[#2F5741] mb-4">Phase 1: $60M Valuation</h1>
        <div className="bg-[#FFF8F3] p-4 rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 text-[#2F5741]">✦</div>
            <p>Tokenized Shares in a $60M Company</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 text-[#2F5741]">✦</div>
            <p>Objective: Raise $15M by selling a 25% equity stake.</p>
          </div>
        </div>
    </div>
    
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rounds.map((round, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: round.isHighlighted
                    ? `url(${round.image})`
                    : `url(${round.whiteimage})`,
                  backgroundSize: round.isHighlighted ? 'cover' : '200%', // Increase the size for whiteimage
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                
                className={`rounded-lg p-5  flex flex-col justify-between ${
                  round.isHighlighted ? 'text-white rounded-xl' : 'text-black'
                }`}
              >
                {round.deadline && (
                  <div className="mb-4">
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        round.isHighlighted ? 'bg-[#C38B4F] text-white' : ' text-[#C38B4F]'
                      }`}
                    >
                      Deadline: {round.deadline}
                    </span>
                  </div>
                )}
    
                <h2 className={`text-xl font-semibold ${round.isHighlighted ? `mb-5 mt-5`:"mb-0"}`}>{round.title}</h2>
    
                <div className="space-y-6">
                  <div>
                    <p className="text-sm mb-1">Purpose: {round.purpose}</p>
                  </div>
                    <p className="border border-gray-400"></p>
    
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm mb-1">Stake Offered: {round.stakeOffered}</p>
         
                    </div>
                    <div>
                      <p className="text-sm mb-1">Value: {round.value}</p>
                
                    </div>
                  </div>
    
                </div>
                  <div className="flex justify-end relative">
                    <Image src={round.arrow} width={80} height={80} alt="Arrow" className=" absolute -top-7 sm:-top-6 lg:-top-10 lg:-right-5 -right-3 " />
                  </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Round2
