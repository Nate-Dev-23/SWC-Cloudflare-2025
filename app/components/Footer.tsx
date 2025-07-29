import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-2">
          
          {/* Church Logo & Social */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <Image 
                src="/SWC_LOGO_WHITE.png"
                alt="Stirling Worship Center Logo"
                width={60}
                height={60}
                className="rounded-full sm:w-[80px] sm:h-[80px]"
              />
              <div className="font-playfair">
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Stirling</h3>
                <p className="text-sm sm:text-base opacity-90 leading-tight">Worship Center</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                <a 
                  href="https://www.facebook.com/stirlingworshipcenter/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </a>
                <a 
                  href="https://www.instagram.com/stirlingworshipcenter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Connect</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:admin@stirlingworshipcenter.co.za" 
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm break-all"
                >
                  admin@stirlingworshipcenter.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Partnership */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">In Partnership With</h4>
            <a 
              href="https://four12global.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Image 
                src="/four12logo.webp"
                alt="Four12 Global Logo"
                width={160}
                height={160}
                className="rounded w-20 h-20 sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px] object-contain"
              />
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm">Four12 Global</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="px-6 py-3">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Stirling Worship Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}