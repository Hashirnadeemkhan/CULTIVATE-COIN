import Image from 'next/image';

export default function CultivateCoin() {
  return (
    <main className=" relative max-w-7xl mx-auto mt-20">
      {/* Green decorative background */}
      <div className="absolute inset-0 mt-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20(1)-LRzEigMJYJwElw4j6LFyUB836uarzL.png"
          alt="Decorative green background"
          width={1700}
          height={500}
          className="w-[1708px] lg:h-[257.5px] h-[150px] hidden md:block"
          priority={true}
        />
      </div>

      {/* Main content section */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="rounded-3xl overflow-hidden p-6">
          <div className="grid md:grid-cols-12 gap-y-6 gap-x-2">
            {/* Left side - Image grid */}
            <div className="md:col-span-7 grid grid-cols-12 gap-x-2">
              {/* Large image */}
              <div className="col-span-7">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1300_Original%201-JdbvqCc99g9t99gZ6XTdD0eWnMwSbG.png"
                  alt="Agricultural landscape"
                  width={400}
                  height={600}
                  className="rounded-2xl w-[400px] lg:h-[500px] h-[300px] object-cover"
                />
              </div>
              {/* Small images - Column */}
              <div className="col-span-5 flex flex-col gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/38a6337f-fe7d-4b51-9a2b-405894506006-T7LOjf2OfmRctRI3YyWANWDOIjoPah.png"
                  alt="Green fruits"
                  width={300}
                  height={200}
                  className="rounded-2xl w-full lg:h-[240px] h-[139px] object-cover"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1263_Original-R3q3vByCVND64q2UuXQWToh5h6AO4J.png"
                  alt="Industrial facility"
                  width={300}
                  height={200}
                  className="rounded-2xl w-full lg:h-[240px] h-[139px] object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:col-span-5 lg:mt-10 mt-0  md:pl-8 flex items-center flex-col">
              <div className="w-full space-y-5">
                {/* Green box for heading */}
                <div className="  rounded-xl md:py-6 py-4  lg:mb-4 bg-[#3D5D48] md:bg-transparent ">
                  <h1 className="md:text-xl lg:text-4xl text-2xl md:text-center text-center font-bold sm:mt-5 lg:mt-0  bg-gradient-to-b from-white to-[#fde3c0] bg-clip-text text-transparent ">
                    What is Cultivate Coin?
                  </h1>
                </div>

                {/* Paragraph below heading */}
                <p className="text-black lg:mb-8 leading-relaxed lg:pl-5 ">
                  This project offers tokenized shares representing fractional ownership of a company, aiming to revolutionize agricultural and energy investments through blockchain technology. Backed by a skilled team, the business ensures transparency, investor protection, and growth-driven value creation.
                </p>

                {/* Button */}
                <button
                  className="bg-[#CD853F] hover:bg-[#B8732F] text-white  px-6 py-3 rounded-full text-sm font-medium  lg:mx-4"
                >
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
