import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Section - Text centered */}
          <div className="text-center mb-12">
            <div className="font-playfair mb-8">
              <h3 className="text-2xl font-bold leading-tight">Stirling</h3>
              <p className="text-lg opacity-90 leading-tight">Worship Center</p>
            </div>
          </div>

          {/* Bottom Section - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <nav className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href="mailto:admin@stirlingworshipcenter.co.za" 
                    className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                  >
                    admin@stirlingworshipcenter.co.za
                  </a>
                </div>
                
                {/* Follow Us moved here */}
                <div>
                  <h5 className="font-semibold text-base mb-3">Follow Us</h5>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a 
                      href="https://www.facebook.com/stirlingworshipcenter/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/stirlingworshipcenter" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#d93620] text-white p-3 rounded-full hover:bg-[#b82a1a] transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div>
              <h4 className="font-semibold text-lg mb-4">In Partnership With</h4>
              <a 
                href="https://four12global.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Image 
                  src="/four12logo.webp"
                  alt="Four12 Global Logo"
                  width={150}
                  height={150}
                  className="rounded object-contain"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm">Four12 Global</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            </div>
          </div>

          {/* Copyright - seamless integration */}
          <div className="text-center mt-8 pt-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Stirling Worship Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}