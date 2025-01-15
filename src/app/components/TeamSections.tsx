import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

interface TeamSection {
  name: string
  role: string
  image: string
  socials: {
    facebook?: string
    linkedin?: string
    twitter?: string
  }
}

const teamMembers: TeamSection[] = [
  {
    name: "PJ van der Walt",
    role: "Senior Agriculturalist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bro1-2CuBD9KnvnNt7cm3gebizSwywSesuC.png",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Hans van der Walt",
    role: "Lead of Marketing, Sales, Operations, and Logistics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bro4-ghztQKSBcRjqqmUE5gjqUe6RYf2mgm.png",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Francois van der Walt",
    role: "Mechanical Operations Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bro2-nHhDs0DIAW7wsO82lS87Fc9901MuCn.png",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Peet van der Walt",
    role: "Agronomist and Soil Scientist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bro3-QL7b0NWjVHOD53GBWj3CAQw1Rh3vYU.png",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jovan Snyman",
    role: "Investment Profile and Portfolio Manager",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bro5-Z6JTwh6QqPl9z8iHVvk1Yd9sY6sBcQ.png",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
]

export default function TeamSection() {
  return (
    <div className='lg:min-h-screen'>
    <div className="relative h-full w-full ">
    {/* Background Layer */}
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer_1-0YHc9qRioODa1OWD1xqpeLo8K9zgbI.png"
      alt="Layer"
      className=" absolute md:-right-32 -top-20 md:block hidden  object-cover  w-[965px] h-[700px]  md:h-[1000px] md:w-[700px] -z-30"
      width={700}
      height={965}
      objectFit='contain'
      priority
    />

    <section className="md:bg-[#2F4F3E] rounded-3xl py-16 h-96 px-4 md:px-6 lg:px-8 mt-20 max-w-7xl mx-auto ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 bg-[#2F4F3E] rounded-xl py-3">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white to-[#fde3c0] bg-clip-text text-transparent">The Team</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            The team is publicly listed to ensure transparency and build trust among investors.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-5 sm:gap-x-3 gap-y-5 ">
          {teamMembers.map((member, index) => (
           <div key={index} className="rounded-lg relative flex items-center justify-center">
           <div className="relative ">
             <Image
               src={member.image}
               alt={member.name}
               width={200}
               height={200}
               className="object-contain "
             />
             <div className="absolute  bottom-0 w-full bg-gradient-to-t from-[#19191B] to-transparent   p-4 text-center">
               <h3 className="font-semibold text-lg sm:text-sm text-white">{member.name}</h3>
               <p className="text-sm mt-1 text-white sm:text-sm">{member.role}</p>
               <div className="flex justify-center gap-4 mt-4">
               <Image src={"/facebook.png"} alt='fb' width={20} height={20}></Image>
                 {member.socials.twitter && (
                  <Image src={"/github.png"} alt='git' width={20} height={20}></Image>
                 )}
                 {member.socials.linkedin && (
                    <Image src={"/Linkedinn.png"} alt='linkdein' width={20} height={20}></Image>
                 )}
               </div>
             </div>
           </div>
         </div>
         
          ))}
        </div>
        
      </div>

    </section>
    </div>
    </div>
  )
}

