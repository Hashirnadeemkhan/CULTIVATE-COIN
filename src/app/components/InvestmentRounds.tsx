import Image from "next/image";
export default function InvestmentRounds() {
  const rounds = [
    {
      title: "Debt and Creditors  Round (Mandatory)",
      purpose: "Settle mortgages, debts, and creditor obligations. Removing the banks will lead to an increase in profit by eliminating interest fees.",
      stakeOffered: "10%",
      value: "$4M",
      deadline: "28 February 2025",
      isHighlighted: true,
      image: "/boxes.png",
      arrow: "/yellow-arrow.png",
    },
    {
      title: "Working Capital Round",
      purpose: "Provide liquidity for day-to-day operations. This includes input costs on crops and working capital.",
      stakeOffered: "8%",
      value: "$5M (Funded in 5 runs @ $1M per run)",
      whiteimage: "/white-box.png",
      arrow: "/yellow-arrow.png",
    },
    {
      title: "Development Round",
      purpose: "Focus on growth, expansion and development of new fields and irrigation systems",
      stakeOffered: "4%",
      value: "$3.25M",
      whiteimage: "/white-box.png",
      arrow: "/yellow-arrow.png",
    },
    {
      title: "Infrastructure and Equipment Round",
      purpose: "Upgrading infrastructure and acquiring new equipment for crop production",
      stakeOffered: "3%",
      value: "$2.75M",
      whiteimage: "/white-box.png",
      arrow: "/yellow-arrow.png",
    },
    
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
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
                <Image src={round.arrow} width={80} height={80} alt="Arrow" className=" absolute -top-12 sm:-top-6 lg:-top-12 lg:-right-7 -right-3 " />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}