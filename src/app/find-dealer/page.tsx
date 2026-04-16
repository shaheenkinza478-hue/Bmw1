'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, Phone, Mail, MapPin, Clock, Sparkles, 
  Send, ArrowRight, Star, Gem, Crown, Rocket 
} from 'lucide-react'

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Floating icons for background
  const floatingIcons = [
    { Icon: Star, color: "text-yellow-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Gem, color: "text-purple-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Crown, color: "text-amber-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Rocket, color: "text-cyan-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Sparkles, color: "text-blue-500", delay: 3, x: '45%', y: '45%' },
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

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      {/* Background Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
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
          style={{ scale }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.Icon className={`${item.color} w-8 h-8 md:w-10 md:h-10 opacity-20`} />
          </motion.div>
        ))}

        {/* Light Beams */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12"
        />
      </div>

      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[350px] overflow-hidden mb-16">
          {/* Background Image */}
          <motion.div
            style={{ scale: 1.1 }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537"
              alt="Contact BMW"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Us
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                We're here to help with any questions about our vehicles and services
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto ml-20 mr-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                GET IN TOUCH
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                How Can We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Help?
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Information Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white mb-4">
                  Contact <span className="text-blue-500">Information</span>
                </motion.h3>
                
                <div className="grid gap-4">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Call Us</p>
                        <p className="text-white font-bold text-lg">+92 42 111 269 123</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email Us</p>
                        <p className="text-white font-bold text-lg">info@bmw-pakistan.com</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Visit Us</p>
                        <p className="text-white font-bold text-lg">123 Mall Road, Lahore</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Working Hours</p>
                        <p className="text-white font-bold text-lg">Mon-Fri: 9AM-6PM</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Links Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white mb-4">
                  Quick <span className="text-blue-500">Links</span>
                </motion.h3>
                
                <div className="grid gap-4">
                  <Link href="/test-drive">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">Test Drive</h4>
                          <p className="text-gray-400 text-sm">Schedule your test drive today</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/find-dealer">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">Find a Dealer</h4>
                          <p className="text-gray-400 text-sm">Locate your nearest dealership</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/book-appointment">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">Book Appointment</h4>
                          <p className="text-gray-400 text-sm">Schedule your service</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/support">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">24/7 Support</h4>
                          <p className="text-gray-400 text-sm">We're here anytime</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="relative h-[350px] rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.123456789!2d74.123456!3d31.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA3JzI0LjQiTiA3NMKwMDcnMjYuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                />
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