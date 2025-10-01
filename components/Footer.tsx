'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { addEmail } from "@/lib/action"

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const formData = {
        submittedAt: new Date().toISOString(),
        email: email,
        // source: 'footer_newsletter'
      }

      console.log('Submitting newsletter email:', formData)
      
      const result = await addEmail(formData)
      console.log('Newsletter submission result:', result)

      if (result.successMessage) {
        setSubmitStatus('success')
        setEmail('') // Clear the form
      } else {
        throw new Error(result.errorMessage || 'Failed to subscribe to newsletter')
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error)
      setErrorMessage(error.message || 'Failed to subscribe. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className=" mb-10 border-b border-gray-700 pb-4">
          {/* Logo and Description Section */}
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/voa-logo.png"
                alt="Voice of Africa Logo"
                className="h-24 w-auto object-contain"
              />
              
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Voice of Africa by Africans® is more than a platform, it's a vibrant movement fueled by shared purpose. Whether you're building a new future on the continent or looking to reconnect from afar, your voice and engagement are vital.
            </p>
          </div>
        </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Explore Column */}
            <div>
            <h4 className="font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/featured-voice" className="hover:text-white transition-colors">
                  Trailblazers
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/BX0tDsFRDgc8Rff33T6VU4?mode=ems_copy_t" className="hover:text-white transition-colors">
                  Diaspora Connect
                </a>
              </li>
            </ul>
          </div>
            
          {/* About Column */}
          <div>
            <h4 className="font-bold text-white mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about-us" className="hover:text-white transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition-colors">
                  How We Move
                </a>
              </li>
            </ul>
          </div>

        {/* Newsletter Section */}
        <div className="mb-8">
          <h4 className="font-bold text-white mb-4">The Latest from Voice of Africa</h4>
          <p className="text-gray-300 text-sm mb-4">
            Get our hand-picked stories, trailblazer spotlights, and exclusive insights delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@email.com"
                className="flex-1 px-4 py-2 bg-white text-black rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                className="bg-[#053849] hover:bg-[#042a35] text-white px-6 py-2 rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg max-w-md">
                <p className="text-sm font-medium">✅ Successfully subscribed!</p>
                <p className="text-xs">Thank you for joining our newsletter. You'll receive our latest updates soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md">
                <p className="text-sm font-medium">❌ Subscription failed</p>
                <p className="text-xs">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>

        
          </div>

          {/* Bottom Section with Socials and Copyright */}
        <div className="border-y border-gray-700 mt-8 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="font-bold text-white text-lg">Socials</span>
              <div className="flex gap-6 items-center">
                <a href="https://www.facebook.com/share/198SfTCQjo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/africaby_africans/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://x.com/voice_ofafrica?s=11" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@VoiceofAfricaByAfricans" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/voice-of-africa-by-africans/" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@africabyafricans?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
          
        </div>

        <div className="text-gray-400 text-base">
              © Copyright Voice of Africa by Africans. All Right Reserved
            </div>

      </div>
    </footer>
  )
}
