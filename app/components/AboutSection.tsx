import React from 'react'
import { Button } from '@/components/ui/button'

export default function AboutSection() {
  return (
    <section id="about-section" className="py-20 px-6 bg-gray-50 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Who are we?
        </h2>
        
        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Mission */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl">
              Leading people to Christ, discipling them to maturity and equipping them to be of service.
            </p>
          </div>
          
          {/* Vision */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl mb-12">
              Building a strong community of believers who know and understand God's purpose and destiny, personally and corporately.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}