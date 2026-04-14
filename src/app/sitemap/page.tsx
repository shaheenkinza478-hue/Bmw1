'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Globe, MapPin, Phone, Mail, Car, Zap, Shield, Users, Briefcase, Newspaper } from 'lucide-react'

export default function SitemapPage() {
  const links = [
    { title: 'Home', href: '/', icon: Globe, color: 'text-blue-500' },
    { title: 'Models', href: '/models', icon: Car, color: 'text-purple-500' },
    { title: 'Electric', href: '/electric', icon: Zap, color: 'text-green-500' },
    { title: 'Services', href: '/services', icon: Shield, color: 'text-cyan-500' },
    { title: 'About', href: '/about', icon: Users, color: 'text-indigo-500' },
    { title: 'Contact', href: '/contact', icon: Mail, color: 'text-pink-500' },
    { title: 'Test Drive', href: '/test-drive', icon: Car, color: 'text-amber-500' },
    { title: 'Find a Dealer', href: '/find-dealer', icon: MapPin, color: 'text-emerald-500' },
    { title: 'Book Appointment', href: '/book-appointment', icon: Calendar, color: 'text-rose-500' },
    { title: '24/7 Support', href: '/support', icon: Headphones, color: 'text-orange-500' },
    { title: 'Careers', href: '/careers', icon: Briefcase, color: 'text-teal-500' },
    { title: 'News', href: '/news', icon: Newspaper, color: 'text-sky-500' },
    { title: 'Locations', href: '/locations', icon: MapPin, color: 'text-violet-500' }
  ]

  // Animation variants
  const fadeInUp = {
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
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-padding mx-auto py-16 relative z-10">
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
              <Sparkles size={14} />
              NAVIGATION
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Site<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">map</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore all pages and sections of BMW Pakistan website
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className={`${link.color} bg-black/50 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {link.title}
                  </span>
                  <span className="ml-auto text-gray-500 group-hover:text-blue-500 transition-colors duration-300">→</span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-gray-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-gray-400 text-sm">{links.length} Total Pages</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-400 text-sm">Updated Daily</span>
            </div>
          </div>
        </motion.div>

        {/* Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 max-w-2xl mx-auto border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Can't find what you're looking for?</h3>
            <p className="text-gray-400 mb-4">Our team is here to help you navigate</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-2 rounded-full text-sm inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

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

// Import missing icons
import { Calendar, Headphones } from 'lucide-react'