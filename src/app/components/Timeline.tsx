export default function Timeline() {
    const steps = [
      {
        number: "1",
        description: "Develop and audit smart contracts to secure investor funds and automate refund mechanisms."
      },
      {
        number: "2",
        description: "Launch Phase 1, with marketing campaigns to communicate its value proposition and investor safety features."
      },
      {
        number: "3",
        description: "Expand the team as the project progresses, ensuring alignment with strategic goals."
      }
    ]
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-[#395144] rounded-3xl p-8 md:p-16">
          <h2 className="bg-gradient-to-b from-white to-[#fde3c0] bg-clip-text text-transparent text-[40px] text-center mb-16">
            Timeline and Next Steps
          </h2>
  
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative w-full md:w-1/3">
                {/* Circle with number */}
                <div className="w-16 h-16 rounded-full bg-[#5B7161] flex items-center justify-center mb-6 relative z-10">
                  <span className="text-white text-2xl font-medium">{step.number}</span>
                </div>
                
                {/* Description */}
                <p className="text-white text-sm md:text-base max-w-[250px]">
                  {step.description}
                </p>
  
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px]">
                    <div className="w-full border-t-2 border-dashed border-[#5B7161]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  