"use client";

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface HeaderProps {
  showBackButton?: boolean;
  variant?: 'transparent' | 'solid';
}

export default function Header({ showBackButton = false, variant = 'transparent' }: HeaderProps) {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const headerClass = variant === 'solid' 
    ? 'relative z-20 bg-black' 
    : 'relative z-20 bg-transparent'

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 text-base">
        <div className="flex items-center justify-between">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors mr-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
            <img
              src="/voa-logo.png"
              alt="Voice of Africa Logo"
              className="md:h-18 md:w-36 h-16 w-28 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 space-x-6">
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="about-us" className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="featured-voice" className="text-gray-300 hover:text-white">
              Trailblazers
            </a>
            <a href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" className="text-gray-300 hover:text-white">
              Community
            </a>
            <a href="https://chat.whatsapp.com/BX0tDsFRDgc8Rff33T6VU4?mode=ems_copy_t" className="text-gray-300 hover:text-white">
              Disapora Connect
            </a>
          </nav>
          
          {/* Desktop CTA Button */}
          {/* <Button className="hidden md:block text-base rounded-full h-[50px] bg-orange-500 hover:bg-orange-600 text-white px-6">Watch a Story</Button> */}
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white py-2 border-b border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about-us" 
                  className="text-gray-300 hover:text-white py-2 border-b border-gray-700"
                  // onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="/featured-voice" 
                  className="text-gray-300 hover:text-white py-2 border-b border-gray-700"
                  // onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trailblazers
                </a>
                <a 
                  href="https://whatsapp.com/channel/0029VbAdeLl5EjxxhXZaxu2n" 
                  className="text-gray-300 hover:text-white py-2 border-b border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </a>
                <a 
                  href="https://chat.whatsapp.com/BX0tDsFRDgc8Rff33T6VU4?mode=ems_copy_t" 
                  className="text-gray-300 hover:text-white py-2 border-b border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Disapora Connect
                </a>
                {/* <Button 
                  className="mt-4 text-base rounded-full h-[50px] bg-orange-500 hover:bg-orange-600 text-white px-6 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Watch a Story
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
