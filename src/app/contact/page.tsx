'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { MapPin, Phone, Mail, Clock, Sparkles, Send, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: MapPin, title: 'Visit Us', details: '123 BMW Avenue, Lahore, Pakistan', color: 'text-blue-500' },
    { icon: Phone, title: 'Call Us', details: '+92 42 1234 5678', color: 'text-green-500' },
    { icon: Mail, title: 'Email Us', details: 'info@bmw-pakistan.com', color: 'text-purple-500' },
    { icon: Clock, title: 'Working Hours', details: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM', color: 'text-amber-500' },
  ]

  // Floating icons for background
  const floatingIcons = [
    { Icon: MapPin, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Phone, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Mail, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Clock, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Send, color: "text-cyan-500", delay: 3, x: '45%', y: '45%' },
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      {/* Background Animations - Like FeaturedModels */}
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

      <div className="relative z-10 pt-24">
        {/* SECTION 1: HERO */}
        <section className="relative h-[40vh] min-h-[400px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537"
              alt="Contact BMW"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent " />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex items-center container-padding mx-auto ml-20 mr-20">
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
                  GET IN TOUCH
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Contact{' '}
                <span className="text-blue-500">
                  Us
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                We're here to help with any questions about our vehicles, services, or your BMW experience
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: CONTENT */}
        <section className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto ml-20 mr-20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
                  Send us a <span className="text-blue-500">Message</span>
                </motion.h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      placeholder="+92 300 1234567"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 group shadow-2xl shadow-blue-600/30"
                    >
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
                  Contact <span className="text-blue-500">Information</span>
                </motion.h3>
                
                <motion.div variants={staggerContainer} className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      variants={fadeInUp}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className={`${info.color} bg-black/50 p-3 rounded-lg`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-gray-400">{info.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Map */}
                <motion.div
                  variants={fadeInUp}
                  className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.123456789!2d74.123456!3d31.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA3JzI0LjQiTiA3NMKwMDcnMjYuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CTA BANNER */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto ml-20 mr-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Background Image */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
                  alt="BMW CTA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="relative p-12 md:p-16 text-center md:text-left md:flex items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                  >
                    Visit Our{' '}
                    <span className="text-blue-500">
                      Showroom
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg"
                  >
                    Experience our vehicles in person at our Lahore showroom
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {/* FIXED: /locations ki jagah /find-dealer lagaya */}
                  <Link href="/find-dealer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                    >
                      Find a Dealer
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
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