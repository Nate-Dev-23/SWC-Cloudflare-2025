import React from 'react'
import { MapPin, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {

  return (
    <div className="pt-20"> {/* Account for fixed navbar */}
      
      {/* Hero Section */}
      <section className="py-20 bg-[#f48120] shadow-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white leading-relaxed">
            We'd love to hear from you. Reach out to us with any questions or to connect with our church family.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600">Everything you need to know to visit us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-[#f48120] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Our Location</h3>
                <p className="text-gray-600">
                  7 Schultz Road<br />
                  Nahoon<br />
                  East London, South Africa
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-[#f48120] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Service Time</h3>
                <p className="text-gray-600 text-lg font-medium">
                  Sunday Service: 9:00 AM
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-[#f48120] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Email Us</h3>
                <a 
                  href="mailto:admin@stirlingworshipcenter.co.za"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-xs sm:text-sm lg:text-base leading-tight block break-words px-2"
                >
                  admin@stirlingworshipcenter.co.za
                </a>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">We're located in the heart of Nahoon, East London</p>
          </div>
          
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.123456789!2d27.9123456!3d-32.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7+Schultz+Road%2C+Nahoon%2C+East+London!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza&q=7+Schultz+Road,+Nahoon,+East+London"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stirling Worship Center Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}