"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/navigation"

export default function FeaturedVoicePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white text-black">
      <Header showBackButton={false} variant="solid" />

      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] bg-gradient-to-r from-black via-black/80 to-transparent">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Ibrahim-Traore.jpg"
            alt="Ibrahim Traoré"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-4xl">
            <p className="text-[#E0B500] font-semibold text-sm mb-4">MEET OUR TRAILBLAZERS</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Captain Ibrahim Traoré
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Transitional President of Burkina Faso • Youngest Head of State in Africa • Champion of Pan-African Sovereignty
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">Born: 14 March 1988</span>
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">Kéra, Burkina Faso</span>
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">Geology Graduate</span>
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">Military Officer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Biography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#053849] mb-8">Personal Biography</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Captain Ibrahim Traoré (born 14 March 1988 in Kéra, Bondokuy, Burkina Faso) is a Burkinabè military officer and the current Transitional President of Burkina Faso. A geology graduate from the University of Ouagadougou, he later trained at the Georges-Namoano Military Academy before joining the army.
              </p>
              <p className="text-lg mb-6">
                Rising through the ranks, Traoré led the September 2022 coup that brought him to power, becoming Africa's youngest head of state. Known for his pan-African, anti-colonial stance, he has positioned himself as a voice for sovereignty and security in Burkina Faso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-20 bg-[#ECEDCE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#053849] mb-12 text-center">Key Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#053849] mb-4">Personal Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Full Name:</span>
                    <span className="ml-2">Ibrahim Traoré</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Date of Birth:</span>
                    <span className="ml-2">14 March 1988</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Place of Origin:</span>
                    <span className="ml-2">Kéra, Bondokuy, Burkina Faso</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Education:</span>
                    <span className="ml-2">Bachelor of Science in Geology (2009)</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#053849] mb-4">Current Position</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Title:</span>
                    <span className="ml-2">Interim President of Burkina Faso</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">In Office Since:</span>
                    <span className="ml-2">October 2022</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Movement:</span>
                    <span className="ml-2">Patriotic Movement for Safeguard and Restoration (MPSR)</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Military Training:</span>
                    <span className="ml-2">Georges-Namoano Military Academy</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#053849] mb-12 text-center">Achievements</h2>
            
            <div className="space-y-12">
              {/* Security & Military Reform */}
              <Card className="p-8 bg-[#053849] text-white">
                <h3 className="text-2xl font-bold mb-6 text-[#E0B500]">Security & Military Reform</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Expanded and empowered the Volunteers for the Defense of the Homeland (VDP), recruiting nearly 100,000 volunteers to support counter-terrorism operations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Intensified aerial capabilities through drones (from Turkey and Russia), enhancing surveillance and response against jihadist groups.</span>
                  </li>
                </ul>
              </Card>

              {/* Economic Sovereignty */}
              <Card className="p-8 bg-[#ECEDCE]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">Economic Sovereignty & Industry</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Opened Burkina Faso's first gold refinery in 2024, producing refined gold locally.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Nationalized major gold mines (Boungou and Wahgnion) for US$80 million, a significant reduction from the previously proposed price.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Launched the Postal Bank of Burkina Faso (BPBF) with ~15 billion FCFA (~US$25 million), aiming to strengthen financial independence.</span>
                  </li>
                </ul>
              </Card>

              {/* Agriculture & Food Security */}
              <Card className="p-8 bg-white border-2 border-[#E0B500]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">Agriculture & Food Security</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Established first tomato-processing and additional cotton-processing plants, boosting local food and cash crop processing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Massively supported farmers by distributing 400 tractors, 239 tillers, 710 motor pumps, 714 motorcycles, improved seeds, fertilizers, and inputs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Dramatically increased crop yields: tomatoes from 315k to 360k tonnes; millet from 907k to 1.1M tonnes; rice from 280k to 326k tonnes (2022–2024).</span>
                  </li>
                </ul>
              </Card>

              {/* Infrastructure & Connectivity */}
              <Card className="p-8 bg-[#053849] text-white">
                <h3 className="text-2xl font-bold mb-6 text-[#E0B500]">Infrastructure & Connectivity</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Constructing the new Ouagadougou–Donsin Airport, to enhance national and regional connectivity, with a capacity for 1 million passengers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Expanded and modernized roads and airports, including Bobo-Dioulasso Airport, improving access and economic activity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>New industrial projects: opened a cement plant (CISINOB SA), flour mill (220 tonnes/day), and pharmaceutical plant producing generics.</span>
                  </li>
                </ul>
              </Card>

              {/* Cultural & Institutional Reform */}
              <Card className="p-8 bg-[#ECEDCE]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">Cultural & Institutional Reform</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Promoted Burkinabé identity by banning colonial-era wigs and gowns in courts, replacing them with dressed in traditional Faso Dan Fani and locally woven fabrics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Built a mausoleum for Thomas Sankara, designed by Francis Kéré, and revitalized pan-African cultural platforms (like FESPACO), reinforcing national pride and continental identity.</span>
                  </li>
                </ul>
              </Card>

              {/* Economic & Fiscal Reforms */}
              <Card className="p-8 bg-white border-2 border-[#941232]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">Economic & Fiscal Reforms</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>GDP rose from ~$18.8B to ~$22.1B since his takeover.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Rejected IMF–World Bank aid, paid off local debts, reduced salaries for ministers/MPs by ~30% while increasing civil servant pay by ~50%.</span>
                  </li>
                </ul>
              </Card>

              {/* Regional Alliances & Diplomacy */}
              <Card className="p-8 bg-[#053849] text-white">
                <h3 className="text-2xl font-bold mb-6 text-[#E0B500]">Regional Alliances & Diplomacy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Expelled French troops, recalibrated diplomatic relationships, and paved the way for alliances with Russia, Turkey, and regional partners.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Co-led the Alliance of Sahel States (AES) with Mali and Niger to foster regional defense, sovereignty</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy and Vision Section */}
      <section className="py-20 bg-black text-white relative">
        <div className="absolute inset-0">
          <img
            src="/writer-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Legacy and Vision</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ibrahim Traoré's legacy is shaping up as that of a young, fearless leader who champions sovereignty, economic self-reliance, and cultural pride, while his vision is to build a secure, self-sufficient, and united Burkina Faso that stands as a pillar of Pan-African solidarity.
            </p>
            
            <div className="bg-[#E0B500] text-black p-8 rounded-2xl max-w-4xl mx-auto">
              <blockquote className="text-2xl font-bold italic leading-relaxed">
                "I don't want my people to relocate to foreign countries in search of greener pastures, Africa is the richest continent in the world, just that we fail to exploit our resources."
              </blockquote>
              <p className="text-lg font-semibold mt-4">– Ibrahim Traoré</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#053849] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Voice of Africa Movement</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Be part of the movement that amplifies African voices and tells our authentic stories. Connect with trailblazers like Ibrahim Traoré and contribute to reshaping the African narrative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full">
                Join Our Community
              </Button>
            </a>
            {/* <Button 
              onClick={() => router.push('/')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full"
            >
              Explore More Voices
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
