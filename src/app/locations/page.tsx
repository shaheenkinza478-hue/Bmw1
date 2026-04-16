'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft,ArrowRight, MapPin, Phone, Clock, Navigation, Sparkles, Star, Users, Award, Globe, X, Mail, Calendar } from 'lucide-react'

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null)

  const locations = [
    { 
      id: 1,
      city: 'Lahore', 
      address: '123 Mall Road, Lahore', 
      phone: '+92 42 111 269 123',
      email: 'lahore@bmw-pakistan.com',
      hours: 'Mon-Fri: 9AM-8PM, Sat: 10AM-6PM',
      services: ['Sales', 'Service', 'Parts', 'Test Drive'],
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      coordinates: '31.5204° N, 74.3587° E'
    },
    { 
      id: 2,
      city: 'Karachi', 
      address: '456 Shahrah-e-Faisal, Karachi', 
      phone: '+92 21 111 269 124',
      email: 'karachi@bmw-pakistan.com',
      hours: 'Mon-Fri: 9AM-8PM, Sat: 10AM-6PM',
      services: ['Sales', 'Service', 'Parts', 'Body Shop'],
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      coordinates: '24.8607° N, 67.0011° E'
    },
    { 
      id: 3,
      city: 'Islamabad', 
      address: '321 Blue Area, Islamabad', 
      phone: '+92 51 111 269 125',
      email: 'islamabad@bmw-pakistan.com',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
      services: ['Sales', 'Service', 'Test Drive'],
      rating: 4.8,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      coordinates: '33.6844° N, 73.0479° E'
    },
    { 
      id: 4,
      city: 'Rawalpindi', 
      address: '654 Murree Road, Rawalpindi', 
      phone: '+92 51 111 269 126',
      email: 'rawalpindi@bmw-pakistan.com',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
      services: ['Sales', 'Service', 'Parts'],
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      coordinates: '33.5651° N, 73.0169° E'
    },
    { 
      id: 5,
      city: 'Faisalabad', 
      address: '987 Canal Road, Faisalabad', 
      phone: '+92 41 111 269 127',
      email: 'faisalabad@bmw-pakistan.com',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
      services: ['Sales', 'Service'],
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      coordinates: '31.4504° N, 73.1350° E'
    },
    { 
      id: 6,
      city: 'Multan', 
      address: '111 Bosan Road, Multan', 
      phone: '+92 61 111 269 128',
      email: 'multan@bmw-pakistan.com',
      hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
      services: ['Sales', 'Service'],
      rating: 4.5,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      coordinates: '30.1575° N, 71.5249° E'
    }
  ]

  // Stats
  const stats = [
    { icon: MapPin, value: '6+', label: 'Locations', color: 'text-blue-500' },
    { icon: Users, value: '100+', label: 'Service Bays', color: 'text-purple-500' },
    { icon: Award, value: '50+', label: 'Expert Techs', color: 'text-green-500' },
    { icon: Globe, value: '24/7', label: 'Support', color: 'text-amber-500' }
  ]

  // Animation variants
  const fadeInUp:any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardHoverAnimation:any = {
    scale: 1.02,
    y: -5,
    transition: { 
      type: "spring", 
      stiffness: 400,
      damping: 15
    }
  }

  return (
    <div className="min-h-screen bg-black pt-24 ">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-padding mx-auto py-16 relative z-10 mr-20 ml-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
           
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-blue-600/20 text-blue-400 text-sm font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-blue-500/30 inline-flex items-center gap-2">
              <MapPin size={14} />
              FIND US
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Locations
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find a BMW dealership near you across Pakistan
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={cardHoverAnimation}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <Icon className={`${stat.color} w-8 h-8 mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              variants={fadeInUp}
              whileHover={cardHoverAnimation}
              onClick={() => setSelectedLocation(loc)}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
            >
              {/* City Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {loc.city}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-white text-sm font-semibold">{loc.rating}</span>
                  <span className="text-gray-500 text-xs">({loc.reviews})</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-gray-400 mb-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">{loc.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{loc.phone}</span>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-2 mb-4">
                {loc.services.slice(0, 3).map((service, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                    {service}
                  </span>
                ))}
                {loc.services.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded-full">
                    +{loc.services.length - 3}
                  </span>
                )}
              </div>

              {/* View Details Button */}
              <button className="text-blue-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Help Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-white/5"
        >
          <h3 className="text-xl font-bold text-white mb-2">Need Help Finding a Location?</h3>
          <p className="text-gray-400 mb-6">Our team is ready to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowRight size={16} />
              </motion.button>
            </Link>
            <Link href="/support">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-full text-sm backdrop-blur-sm border border-white/20"
              >
                24/7 Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Location Detail Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm mr-20 ml-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedLocation.city}</h2>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-white font-bold text-lg">{selectedLocation.rating}</span>
                  <span className="text-gray-500">({selectedLocation.reviews} reviews)</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{selectedLocation.address}</p>
                  <p className="text-gray-500 text-sm mt-1">Coordinates: {selectedLocation.coordinates}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{selectedLocation.phone}</p>
                  <p className="text-gray-500 text-sm">{selectedLocation.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{selectedLocation.hours}</p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Services Available</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.services.map((service: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={`tel:${selectedLocation.phone}`}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg text-center transition-all"
                >
                  Call Now
                </a>
                <a
                  href={`https://maps.google.com/?q=${selectedLocation.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg text-center transition-all flex items-center justify-center gap-2"
                >
                  <Navigation size={16} />
                  Directions
                </a>
              </div>

              {/* Close Button Alternative */}
              <button
                onClick={() => setSelectedLocation(null)}
                className="w-full mt-3 py-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom Border Animation */}
      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-left"
      />
    </div>
  )
}