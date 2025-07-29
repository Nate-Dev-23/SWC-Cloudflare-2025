import React from 'react'
import { MapPin, Clock, Mail } from 'lucide-react'

export default function MapSection() {
  return (
    <section id="map-section" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Join us for worship and fellowship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
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

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Our Location
              </h3>
              
              <div className="space-y-6">
                {/* Service Times */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#f48120] text-white p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Service Times</h4>
                    <p className="text-gray-600 text-lg font-medium">
                      Sunday Service: 9:00 AM
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#f48120] text-white p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Contact</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        <a 
                          href="mailto:admin@stirlingworshipcenter.co.za"
                          className="hover:text-gray-900 transition-colors"
                        >
                          admin@stirlingworshipcenter.co.za
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#f48120] text-white p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      7 Schultz Road<br />
                      Nahoon<br />
                      East London, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}