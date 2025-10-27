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
            src="/trailblazer2.jpg"
            alt="Alloysius Attah"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-4xl">
            <p className="text-[#E0B500] font-semibold text-sm mb-4">MEET OUR TRAILBLAZERS</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Alloysius Attah
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Co-Founder and CEO of Farmerline • Agritech Pioneer • Empowering 1.7 Million African Farmers
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">Born: 18th May</span>
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">Ghana</span>
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">CEO & Co-Founder</span>
              <span className="bg-[#E0B500] text-black px-3 py-1 rounded-full font-semibold">20+ Years Farming Experience</span>
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
                Alloysius Attah leads Farmerline, which works with thousands of small-scale farmers in Ghana to increase access to agricultural information, productivity and income. At five years old, Alloysius' parents divorced so he moved to stay with his aunt, who was a small-scale farmer in rural Ghana. While staying there, he experienced the challenges small-scale farmers go through to produce food and support their families.
              </p>
              <p className="text-lg mb-6">
                Upon making it to college, he became determined to give back to the people who supported him. This led him to start two companies, Alloyworld (a photography and video production startup) and iCottage Networks (Web and Mobile startup) in college. In 2013, Alloysius launched Farmerline with Emmanuel Owusu Addai to support small-scale farmers to increase their yield and income.
              </p>
              <p className="text-lg mb-6">
                He is committed to empowering small-scale farmers like his aunt who are facing similar challenges across Africa. Alloysius spoke about his work at the Social Capital Markets Conference, 2013 and Mobile World Congress 2014. He is a winner of the World Bank and InfoDev mAgri challenge, World Summit Youth Award, Apps4Africa competitions, also CNBC Africa's Young Business Leader Award in 2017.
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
                    <span className="ml-2">Alloysius Attah</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Date of Birth:</span>
                    <span className="ml-2">18th May</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Country:</span>
                    <span className="ml-2">Ghana</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Experience:</span>
                    <span className="ml-2">Over 20 years' experience in farming</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#053849] mb-4">Current Position</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Title:</span>
                    <span className="ml-2">Co-Founder and CEO of Farmerline</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Startup Year:</span>
                    <span className="ml-2">2013 - Present</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Organization Type:</span>
                    <span className="ml-2">Non-Profit</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Awards:</span>
                    <span className="ml-2">King Baudouin African Development Prize (2017)</span>
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
            <h2 className="text-4xl font-bold text-[#053849] mb-12 text-center">Impact & Achievements</h2>
            
            <div className="space-y-12">
              {/* Why He Matters */}
              <Card className="p-8 bg-[#053849] text-white">
                <h3 className="text-2xl font-bold mb-6 text-[#E0B500]">Why He Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Raised in a rural farming community, Alloysius experienced the struggles of smallholder farmers firsthand.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Today, he's helping over 1.7 million farmers thrive through access to real-time data, affordable inputs, and financial services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>He is redefining farming as a pathway to wealth, dignity, and resilience across Africa.</span>
                  </li>
                </ul>
              </Card>

              {/* What Farmerline Does */}
              <Card className="p-8 bg-[#ECEDCE]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">What Farmerline Does</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Delivers weather updates and market prices to farmers in real-time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Provides voice training in local languages for better accessibility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Offers AI-powered farm support through mobile phones—even in remote areas.</span>
                  </li>
                </ul>
              </Card>

              {/* Impact Highlights */}
              <Card className="p-8 bg-white border-2 border-[#E0B500]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">Impact Highlights</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Operating in 26 African countries, reaching farmers across the continent.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Achieved yield increase of up to 50% for partnered farmers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Empowering farmers to earn more and waste less through technology.</span>
                  </li>
                </ul>
              </Card>

              {/* Awards & Recognition */}
              <Card className="p-8 bg-[#053849] text-white">
                <h3 className="text-2xl font-bold mb-6 text-[#E0B500]">Awards & Recognition</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Winner of the World Bank and InfoDev mAgri challenge.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>World Summit Youth Award recipient.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>CNBC Africa's Young Business Leader Award in 2017.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Laureate of the King Baudouin African Development Prize in 2017.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E0B500] font-bold">•</span>
                    <span>Farmerline won the FT/IFC Transformational Business Award for Achievement in Sustainable Agriculture in 2016.</span>
                  </li>
                </ul>
              </Card>

              {/* Why It Matters to Africa */}
              <Card className="p-8 bg-[#ECEDCE]">
                <h3 className="text-2xl font-bold mb-6 text-[#053849]">Why It Matters to Africa</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Agritech is the future of food security in Africa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Leaders like Alloysius are proving that innovation grows from the ground up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#941232] font-bold">•</span>
                    <span>Let's spotlight and support the changemakers feeding the continent.</span>
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
              Alloysius Attah's legacy is that of a visionary leader who transformed agricultural challenges into technological solutions, empowering millions of African farmers. His vision continues to redefine farming as a pathway to wealth, dignity, and resilience across the continent.
            </p>
            
            <div className="bg-[#E0B500] text-black p-8 rounded-2xl max-w-4xl mx-auto">
              <blockquote className="text-2xl font-bold italic leading-relaxed">
                "Technology is not just for Silicon Valley. It's for the soil, the market, and the everyday African farmer."
              </blockquote>
              <p className="text-lg font-semibold mt-4">– Alloysius Attah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#053849] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Voice of Africa Movement</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Voice of Africa by Africans is a vision born out of a deep burden to see Africa rise into greatness led by informed minds and inspired hearts. Join us at THE AFRICA CONFERENCE 2025 themed, "ECHOES OF MOTHERLAND: RETELLING OUR OWN STORIES," bringing together African thought leaders, innovators, civil society groups, policy makers, creatives, and change-makers from across the continent and the diaspora to reshape Africa's narrative and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full">
                Join Our Community
              </Button>
            </a>
            <Button 
              onClick={() => router.push('/register')}
              variant="outline" 
              className="border-white text-black hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full"
            >
              Register for Conference
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
