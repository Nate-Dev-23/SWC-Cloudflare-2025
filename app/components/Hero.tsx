'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Sample images - you can replace these with your church images
  const heroImages = [
    '/hero-1.jpeg', // Add your church images to public folder
    '/hero-2.jpeg',
    '/hero-3.jpeg',
  ]

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [heroImages.length])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Stirling Worship Center ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Text */}
          <p className="text-lg md:text-xl font-light mb-4 tracking-wider uppercase opacity-90">
            Welcome to
          </p>
          
          {/* Church Name */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            STIRLING WORSHIP CENTER
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            A place where faith comes alive and community grows stronger
          </p>
          
          {/* Call to Action */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button 
              onClick={() => {
                const mapSection = document.getElementById('map-section')
                mapSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Join Us Sunday
            </button>
            <button 
              onClick={() => {
                const aboutSection = document.getElementById('about-section')
                aboutSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors duration-200 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 right-6 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}