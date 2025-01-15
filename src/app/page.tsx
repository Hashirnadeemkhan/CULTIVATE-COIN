
import CultivateCoin from "./components/CultivateCoin";
import SafetyFeatures from "./components/Features";
// import { Frame } from "./components/Frame";
import InvestmentRounds from "./components/InvestmentRounds";
import Hero from "./components/Hero";

import Metrics from "./components/Metrics";
import Round2 from "./components/Round2";
import TeamSection from "./components/TeamSections";
import InvestorBenefits from "./components/InvestorsBenefit";
import Timeline from "./components/Timeline";


export default function Home() {
  return <div>
         {/* <Frame/> */}
      <Hero/>
      
      <Metrics/>
      <CultivateCoin/>
      <SafetyFeatures/>
      <InvestmentRounds/>
      <Round2/>
      <TeamSection/>
      <InvestorBenefits/>
      <Timeline/>
   
   
  
  </div>
}
