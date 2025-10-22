"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Header Overlay */}
      <section className="relative text-white min-h-screen bg-gradient-to-r from-black via-black/80 to-transparent">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-one.png"
            alt="Voice of Africa Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        {/* Header Overlay */}
        <Header />
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16 md:pt-28 pb-32">
          <div className="max-w-2xl flex flex-col gap-6">
            <h1 className="md:text-nowrap text-5xl md:text-6xl font-bold leading-tight">
              Our Stories.
              Our Truth.
              <br />
              Our Culture.
              No Apologies.
            </h1>
            <p>Voice of Africa is a declaration. A platform for trailblazers, creators and innovators who are defining the continent on their own terms.</p>
            <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
            <Button className=" bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 w-52 text-base">Join Our Community</Button>
            </a>

          </div>
        </div>
      </section>

      {/* Let's Burn The Old Script Section */}
      <section className="py-20 bg-[#053849] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/about.png" alt="Meeting Discussion" className="w-full h-auto rounded-3xl" />
            </div>
            <div>
              <p className="text-[#E0B500] font-semibold text-sm mb-4">WELCOME TO VOICE OF AFRICA</p>
              <h2 className="text-5xl font-bold max-w-[560px] mb-6">Let's Burn The Old Script</h2>
              <p className="text-gray-200 text-base leading-relaxed mb-4">
                The world was given a single narrative about Africa. A caricature of poverty and dependence. They forgot to mention our innovators, our philosophers, our kings, our queens, and the generation of builders rising today and Voice of Africa is the bonfire for that old script.
              </p>
              <p className="text-gray-200 text-base leading-relaxed mb-8">
                We are a platform and a movement dedicated to showcasing the continent as it truly is: a vibrant, complex, and powerful force. We amplify the voices that have been ignored and pass the microphone to the people writing Africa's next chapter. This isn't just about changing perceptions; it's about owning our intellectual and cultural assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-black relative text-white my-28">
        <div className="absolute inset-0">
          <img src="/world-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-base font-semibold text-[#E0B500]">OUR STAND</p>
          <blockquote className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed">
            “This is the Voice of Africa, by Africans
              Our Stories, Our Truth, Our Culture.
              We are Unfiltered,Unapologetic and Undeniable"
          </blockquote>
        </div>
      </section>

      {/* Building Our Own Seats Section */}
      <section className="py-20 bg-[#ECEDCE] text-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#941232] text-base font-semibold">About Us</p>
              <h2 className="text-5xl text-[#053849] font-bold mb-6">
                Building Our Own
                <br />
                Seats At The Table
              </h2>
              <p className="text-[#053849] text-lg leading-relaxed mb-4">
                History is a story. For centuries, the story of Africa was written in ink we did not mix, on pages we did not turn. It was a single, monolithic story of a continent in need of saving—a narrative that silenced our scholars, sidelined our innovators, and erased our complexities.
              </p>
              <p className="text-[#053849] text-lg leading-relaxed mb-8">
                This narrative, a tool of neo-colonialism, has been used to justify exploitation and has taught the world, and even some of our own, to see Africa through a distorted lens.
              </p>
              <a href="/about-us">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full">Read More</Button>
              </a>
            </div>
            <div>
              <img src="/hero-two.png" alt="Professional Meeting" className="w-full h-auto rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-[#941232] text-base font-bold">WHAT WE DO</p>
            <h2 className="text-5xl text-[#053849] font-bold mb-4">This Is More Than A Platform. It's A Network</h2>
            <p className="text-sm">Voice of Africa is a declaration. A platform for trailblazers, creators and innovators who are defining the continent on their own terms</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* <Card className="p-8 flex flex-col h-full justify-between">
              <div>
                <div className="mb-6">
                  <img
                    src="/network-1.png"
                    alt="Our Community"
                    className="w-full h-48 object-cover rounded-3xl mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold">Our Community</h3>
                <p className="text-gray-600">
                  This is where our truth takes center stage. Watch, read, and listen to authentic stories from every corner of the continent and the diaspora. Have a story to tell? The stage is yours.
                </p>
              </div>
              <a href="/share-your-story">
              <Button className="bg-[#E14A01] hover:bg-[#C75B01] text-white w-48 mt-auto rounded-full">Share Your Story</Button>
              </a>
            </Card> */}
            <Card className="p-8 flex flex-col h-full justify-between">
              <div>
                <div className="mb-6">
                  <img
                    src="/network-2.jpg"
                    alt="Our Community"
                    className="w-full h-48 object-cover rounded-3xl mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold">The Architects of the New Africa</h3>
                <p className="text-gray-600">
                  Meet the trailblazers. Our living directory connects you with the innovators, entrepreneurs, and leaders who are building Africa's tomorrow, today. Find collaborators, mentors, and inspiration.
                </p>
              </div>
              <a href="/featured-voice">
              <Button className="bg-[#E14A01] hover:bg-[#C75B01] text-white w-48 mt-auto rounded-full">Meet the Trailblazer</Button>
              </a>
            </Card>
            <Card className="p-8 flex flex-col h-full justify-between">
              <div>
                <div className="mb-6">
                  <img
                    src="/network-3.jpg"
                    alt="Our Community"
                    className="w-full h-48 object-cover rounded-3xl mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold">The Diaspora Stage</h3>
                <p className="text-gray-600">
                  Reconnect with home. Discover opportunities for investment, collaboration, and career moves on the continent. The gap between Africa and its diaspora closes here.
                </p>
              </div>
              <a href="https://chat.whatsapp.com/BX0tDsFRDgc8Rff33T6VU4?mode=ems_copy_t">
              <Button className="bg-[#E14A01] hover:bg-[#C75B01] text-white w-48 mt-auto rounded-full">Explore Opportunities</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Voice Section */}
      <section className="bg-gray-50 text-black relative">
          <div>
            <img style={{ objectPosition: 'center 30%' }} src="/Ibrahim-Traore.jpg" alt="Featured Voice" className="w-full h-[700px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>
            
            <div className="bg-white md:w-[1000px] h-[300px] w-[320px] p-8 rounded-2xl shadow-lg absolute md:bottom-20 bottom-8 md:left-20 opacity-80">
              <p className="text-[#941232] text-base font-bold">MEET OUR TRAILBLAZERS</p>
              <h2 className="md:text-5xl text-3xl font-bold mb-4">Our Featured Voice Of The Month</h2>
              <p className="text-gray-700 mb-6">
                Meet the changemakers, storytellers, and visionaries who are shaping the African narrative. Each
                month, we spotlight voices that inspire and drive meaningful change across our communities.
              </p>
              <a href="/featured-voice">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">READ MORE</Button>
              </a>
            </div>
      </section>

      {/* Your Seat Section */}
      <section className="py-20 bg-[#053849] text-white my-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/modern-meeting-room-with-empty-chairs-waiting.jpg" alt="Meeting Room" className="w-full h-[375px] rounded-lg" />
            </div>
            <div>
              <p className="text-[#E0B500] font-bold">JOIN OUR COMMUNITY</p>
              <h2 className="text-5xl font-bold mb-6">
                Your Seat At The
                <br />
                Table Is Waiting
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                Create your account to join the Voice of Africa community and enter the room where ideas meet action. Membership is curated to ensure everyone is here to contribute and build.
              </p>
              <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full text-white px-6">Join Our Community</Button>
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      {/* <section className="py-20 bg-black text-white relative my-28">
        <div className="absolute inset-0">
          <img
            src="/writer-bg.jpg"
            alt="Narrative Background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
         <div className="bg-white p-8 rounded-2xl w-2/3 mx-auto text-center">
         <p className="text-[#941232] font-bold">YOUR VOICE, YOUR STORY, YOUR TRUTH</p>
                <h2 className="text-5xl font-bold mb-4 text-[#053849]">Share Your Story</h2>
                <p className="text-[#053849] text-lg leading-relaxed mb-8">
                  Every African has a story worth telling. Whether it's about overcoming challenges, celebrating
                  culture, or driving change in your community - we want to hear from you.
                </p>
                <Button className="bg-orange-500 rounded-full hover:bg-orange-600 text-white px-6">SHARE YOUR STORY</Button>
              </div>
      </section> */}

      {/* The Narrative Section */}
      <section className="py-20 bg-black text-white relative my-28">
        <div className="absolute inset-0">
          <img
            src="/writer-bg.jpg"
            alt="Narrative Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <p className="font-semibold mb-2 text-[#E0B500]">JOIN VOICE OF AFRICA</p>
          <h2 className="text-5xl md:text-5xl font-bold mb-8">The Narrative Is Ours To Write</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your voice has power. Your story matters. Whether you're a creator in Abuja, an entrepreneur in Nairobi, or part of the diaspora in the United Kingdom, your truth belongs here. Help us build the undeniable story of Africa.
          </p>
          <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" target="_blank" rel="noopener noreferrer">
          <Button className="bg-orange-500 py-5 rounded-full hover:bg-orange-600 text-white px-8 text-lg">Join the Movement</Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

