'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, ArrowRight, Calendar, Clock, MapPin, Car,
  Zap, Gauge, Shield, Cpu, Star, Gem, Crown, Rocket
} from 'lucide-react'

export default function TestDrivePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const models = [
    { id: '7-series', name: 'BMW 7 Series', category: 'Luxury Sedan' },
    { id: 'x5', name: 'BMW X5', category: 'Luxury SUV' },
    { id: 'm4', name: 'BMW M4 Competition', category: 'Performance Coupe' },
    { id: 'i4', name: 'BMW i4', category: 'Electric' },
    { id: 'x7', name: 'BMW X7', category: 'Full-Size SUV' },
    { id: 'z4', name: 'BMW Z4', category: 'Roadster' },
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  // Floating icons
  const floatingIcons = [
    { Icon: Car, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Calendar, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Clock, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: MapPin, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Zap, color: "text-yellow-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Gauge, color: "text-cyan-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Shield, color: "text-indigo-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Cpu, color: "text-red-500", delay: 3.5, x: '55%', y: '65%' },
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Test drive booked for ${selectedModel} on ${selectedDate} at ${selectedTime}`)
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      {/* Background Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Gradient Orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1.3, 1.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Large Rotating Orb */}
        <motion.div
          style={{ scale, rotate }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.Icon className={`${item.color} w-10 h-10 md:w-12 md:h-12 opacity-25`} />
          </motion.div>
        ))}

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Light Beams */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12"
        />

        <motion.div
          animate={{
            x: ['200%', '-100%'],
            opacity: [0, 0.15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute bottom-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-x-12"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-24 ">
        {/* SECTION 1: HERO */}
        <section className="relative h-[40vh] min-h-[400px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
              alt="Test Drive"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-purple/60 to-transparent " />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex items-center container-padding mx-auto ml-20 mr-20 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="bg-blue-600/20 text-blue-400 text-sm font-bold tracking-[0.2em] uppercase px-6 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm inline-flex items-center gap-2">
                  <Sparkles size={14} />
                  EXPERIENCE BMW
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Test{' '}
                <span className="text-blue-500">
                  Drive
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Experience the thrill of driving a BMW. Schedule a test drive at your convenience.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: BOOKING FORM */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                BOOK YOUR TEST DRIVE
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Schedule Your{' '}
                <span className="text-blue-500">
                  Experience
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Model Selection */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Select Model <span className="text-blue-500">*</span>
                    </label>
                    <select
                      required
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Choose a model</option>
                      {models.map((model) => (
                        <option key={model.id} value={model.name}>
                          {model.name} - {model.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Select Date <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Select Time <span className="text-blue-500">*</span>
                    </label>
                    <select
                      required
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Choose a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Select Location <span className="text-blue-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Choose location</option>
                      <option value="lahore">Lahore Showroom</option>
                      <option value="karachi">Karachi Showroom</option>
                      <option value="islamabad">Islamabad Showroom</option>
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      First Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Last Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Phone <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Additional Requests */}
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Additional Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requirements or questions..."
                    className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 group shadow-2xl shadow-blue-600/30"
                >
                  Schedule Test Drive
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: INFO CARDS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black ">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Clock,
                  title: '30-Minute Drive',
                  desc: 'Experience the car thoroughly with our extended test drive',
                  color: 'text-blue-500'
                },
                {
                  icon: MapPin,
                  title: 'Multiple Locations',
                  desc: 'Choose from our showrooms across Pakistan',
                  color: 'text-green-500'
                },
                {
                  icon: Car,
                  title: 'All Models Available',
                  desc: 'Test drive any BMW model that interests you',
                  color: 'text-purple-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
                >
                  <item.icon className={`${item.color} w-12 h-12 mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: CTA */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto text-center mr-20 ml-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have Questions?{' '}
                <span className="text-blue-500">Contact Us</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our team is ready to assist you with any queries about test drives
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                >
                  Contact Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
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
    </motion.div>
  )
}