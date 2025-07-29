import React from 'react'
import Image from 'next/image'
import { Heart, Users, BookOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-20"> {/* Account for fixed navbar */}
      
      {/* Hero Section */}
      <section className="py-20 bg-[#d93620] shadow-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            About Stirling Worship Center
          </h1>
          <p className="text-xl text-white leading-relaxed">
            A community of believers committed to growing in faith, serving others, and sharing God's love.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d93620] text-white p-3 rounded-full">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed flex-grow">
                Leading people to Christ, discipling them to maturity and equipping them to be of service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d93620] text-white p-3 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed flex-grow">
                Building a strong community of believers who know and understand God's purpose and destiny, personally and corporately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-[#d93620] text-white p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="font-playfair text-4xl font-bold text-gray-900">Our Story</h2>
              </div>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Stirling Worship Center began as a vision to create a place where people could encounter God's love 
                and grow together as a community of faith. Located in the heart of Nahoon, East London, we have been 
                serving our local community with passion and dedication.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our church family is built on the foundation of Christ's love, where every person is welcomed 
                regardless of their background or where they are in their spiritual journey. We believe in the 
                transformative power of God's Word and the importance of authentic relationships.
              </p>
              
              <p className="text-lg leading-relaxed">
                Through worship, fellowship, and service, we aim to be a beacon of hope in our community, 
                showing God's love through our actions and words. We are committed to supporting one another 
                as we grow in our faith and reach out to those around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-2xl drop-shadow-xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do as a church community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-zinc-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">Love</h3>
                <p className="text-gray-600">
                  We show Christ's love through our actions, welcoming all people with open hearts and minds.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-zinc-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in the power of authentic relationships and supporting one another in faith.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-zinc-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">Growth</h3>
                <p className="text-gray-600">
                  We are committed to spiritual growth through God's Word and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-12 mb-8">
            <div className="bg-red-700 p-8 rounded-lg">
              <Image 
                src="/four12logo.webp"
                alt="Four12 Global Logo"
                width={180}
                height={180}
                className="rounded"
              />
            </div>
            <div className="text-left">
              <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-2">Four12 Global</h3>
              <p className="text-xl text-gray-600 mb-4">Equip. Restore. Advance.</p>
              <a 
                href="https://four12global.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-700 hover:text-red-800 transition-colors font-medium text-lg"
              >
                Learn more about Four12 Global →
              </a>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are proud to be in partnership with Four12 Global, working together to advance God's kingdom 
            and serve communities around the world.
          </p>
        </div>
      </section>
    </div>
  )
}