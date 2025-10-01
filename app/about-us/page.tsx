"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useRouter } from "next/navigation"

export default function AboutUsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white text-black">
      <Header showBackButton={false} variant="solid" />

      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] bg-gradient-to-r from-black via-black/80 to-transparent">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/african-landscape-or-cultural-scene-dark-overlay.jpg"
            alt="African Landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl">
            <p className="text-[#E0B500] font-semibold text-sm mb-4">ABOUT VOICE OF AFRICA</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Our Vision & Values
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Building a platform that unites emerging voices of transformation and social development across Africa through authentic storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#053849] mb-6">Our Vision</h2>
              <div className="w-24 h-1 bg-[#E0B500] mx-auto mb-8"></div>
            </div>
            
            <Card className="md:p-12 p-3 bg-[#ECEDCE] border-0 shadow-lg">
              <div className="text-center">
                <div className="mb-8">
                  <img
                    src="/african-people-in-meeting-discussion-around-table.jpg"
                    alt="African People in Discussion"
                    className="w-full h-64 object-cover rounded-2xl mx-auto"
                  />
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-[#053849] leading-relaxed italic">
                  "Create/become a platform that showcases and unites emerging voices of transformation and social development that is capable of inspiring and changing the landscape of Africa through storytelling."
                </blockquote>
                <div className="mt-8 flex justify-center">
                  <div className="w-16 h-1 bg-[#E0B500]"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#053849] text-white relative">
        <div className="absolute inset-0">
          <img
            src="/african-professionals-in-discussion-meeting-room.jpg"
            alt="African Professionals"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Core Values</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                The fundamental principles that guide our mission and drive our commitment to transforming Africa through authentic storytelling.
              </p>
              <div className="w-24 h-1 bg-[#E0B500] mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Innovation */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0B500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">A</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0B500]">Innovation</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Pioneering new approaches to storytelling and social change, constantly evolving to meet Africa's dynamic needs.
                  </p>
                </div>
              </Card>

              {/* Excellence */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0B500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">B</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0B500]">Excellence</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Committed to delivering the highest quality content and experiences that reflect the best of African potential.
                  </p>
                </div>
              </Card>

              {/* Leadership */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0B500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">C</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0B500]">Leadership</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Taking bold steps to lead positive change and inspire others to contribute to Africa's transformation.
                  </p>
                </div>
              </Card>

              {/* Integrity */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0B500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">D</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0B500]">Integrity</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Maintaining the highest ethical standards and transparency in all our endeavors and relationships.
                  </p>
                </div>
              </Card>

              {/* Audacity */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0B500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">E</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0B500]">Audacity</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Boldly challenging narratives and taking courageous action to reshape Africa's story on the global stage.
                  </p>
                </div>
              </Card>

              {/* Authenticity */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E0B500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">F</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0B500]">Authenticity</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Staying true to African voices, experiences, and perspectives in every story we tell and every action we take.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      {/* <section className="py-20 bg-[#ECEDCE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#053849] mb-8">Our Mission</h2>
            <Card className="p-12 bg-white shadow-lg">
              <p className="text-xl text-[#053849] leading-relaxed mb-8">
                Voice of Africa by Africans is more than a platform—it's a movement dedicated to amplifying authentic African voices, 
                celebrating our achievements, and building bridges across the diaspora. We believe that by sharing our stories, 
                we can inspire change, foster understanding, and create a more connected African community worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full">
                    Join Our Movement
                  </Button>
                </a>
                <Button 
                  onClick={() => router.push('/featured-voice')}
                  variant="outline" 
                  className="border-[#053849] text-[#053849] hover:bg-[#053849] hover:text-white px-8 py-4 text-lg rounded-full"
                >
                  Meet Our Trailblazers
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-black text-white relative">
        <div className="absolute inset-0">
          <img
            src="/writer-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Shape the Narrative?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Join us in telling Africa's authentic stories. Your voice matters, your story counts, and together we can build a future where Africa's narrative is written by Africans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 py-5 rounded-full hover:bg-orange-600 text-white px-8 text-lg">
                Join the Movement
              </Button>
            </a>
            <Button 
              onClick={() => router.push('/')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-5 text-lg rounded-full"
            >
              Explore More
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
