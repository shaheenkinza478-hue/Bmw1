'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, ArrowRight, Phone, Mail, MessageSquare, Clock,
  Headphones, HelpCircle, LifeBuoy, AlertCircle, CheckCircle,
  Zap, Shield, Star, Users, Globe, Award, ChevronRight
} from 'lucide-react'

export default function SupportPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      desc: 'Speak directly with our support team',
      contact: '+92 42 111 269 123',
      availability: '24/7 Available',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      action: 'Call Now',
      link: 'tel:+9242111269123'
    },
    {
      icon: Mail,
      title: 'Email Support',
      desc: 'Send us an email',
      contact: 'support@bmw-pakistan.com',
      availability: '24/7 Available',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      action: 'Send Email',
      link: 'mailto:support@bmw-pakistan.com'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      desc: 'Chat with our support team',
      contact: 'Instant response',
      availability: '24/7 Available',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      action: 'Start Chat',
      link: '#'
    },
    {
      icon: Headphones,
      title: 'Roadside Assistance',
      desc: '24/7 emergency help',
      contact: '+92 42 111 269 124',
      availability: '24/7 Available',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      action: 'Get Help',
      link: 'tel:+9242111269124'
    }
  ]

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available 24 hours a day, 7 days a week, 365 days a year. We\'re always here to help you with any questions or concerns.'
    },
    {
      question: 'How do I report a breakdown?',
      answer: 'Call our roadside assistance number immediately at +92 42 111 269 124. Our team will guide you through the process and dispatch help to your location.'
    },
    {
      question: 'Do you offer emergency roadside assistance?',
      answer: 'Yes, we provide 24/7 emergency roadside assistance across all major cities in Pakistan including Lahore, Karachi, Islamabad, Rawalpindi, and more.'
    },
    {
      question: 'How can I check my vehicle warranty status?',
      answer: 'Log into your BMW account or contact our support team with your VIN number. We\'ll provide you with complete warranty information.'
    },
    {
      question: 'What is the response time for emergency calls?',
      answer: 'Our average response time is under 30 minutes in major cities. We prioritize emergency calls to get you back on the road quickly.'
    }
  ]

  const emergencyContacts = [
    { service: 'Roadside Assistance', number: '+92 42 111 269 124', icon: LifeBuoy },
    { service: 'Accident Support', number: '+92 42 111 269 125', icon: AlertCircle },
    { service: 'Towing Service', number: '+92 42 111 269 126', icon: Shield },
  ]

  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Customers', color: 'text-blue-500' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-green-500' },
    { icon: Award, value: '15+', label: 'Service Centers', color: 'text-purple-500' },
  ]

  // Floating icons
  const floatingIcons = [
    { Icon: Headphones, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Phone, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Mail, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: MessageSquare, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: LifeBuoy, color: "text-cyan-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Shield, color: "text-indigo-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Star, color: "text-yellow-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Award, color: "text-orange-500", delay: 3.5, x: '55%', y: '65%' },
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
      </div>

      <div className="relative z-10 pt-24">
        {/* SECTION 1: HERO */}
        <section className="relative h-[45vh] min-h-[450px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale: 1.1 }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
              alt="24/7 Support"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex items-center container-padding mx-auto mr-20 ml-20">
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
                  BMW SUPPORT
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                24/7{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Support
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                We're here for you anytime, anywhere. Round-the-clock assistance for all your BMW needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                  >
                    <Icon className={`${stat.color} w-10 h-10 mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: SUPPORT CHANNELS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                HOW CAN WE HELP?
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Support{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Channels
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`${channel.bg} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${channel.color} bg-black/50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{channel.title}</h3>
                        <p className="text-gray-400 mb-3">{channel.desc}</p>
                        <p className="text-blue-500 font-bold text-lg mb-2">{channel.contact}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <Clock className="w-4 h-4" />
                          <span>{channel.availability}</span>
                        </div>
                        {channel.link !== '#' ? (
                          <Link href={channel.link}>
                            <motion.button
                              whileHover={{ x: 5 }}
                              className="text-blue-500 font-semibold flex items-center gap-2 group"
                            >
                              {channel.action}
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
                        ) : (
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="text-blue-500 font-semibold flex items-center gap-2 group opacity-50 cursor-not-allowed"
                            disabled
                          >
                            Coming Soon
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: EMERGENCY CONTACTS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 mr-20 ml-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, red 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="container-padding mx-auto relative z-10 mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-red-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                URGENT HELP
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Emergency{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Contacts
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-red-500/10 backdrop-blur-sm p-6 rounded-xl border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{contact.service}</h3>
                    <p className="text-red-400 text-lg mb-4">{contact.number}</p>
                    <Link href={`tel:${contact.number}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-sm transition-all duration-300"
                      >
                        Call Now
                      </motion.button>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: FAQ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                GOT QUESTIONS?
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Questions
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 mb-4 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                    <ChevronRight 
                      className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto text-center mr-20 ml-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Contact Us
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our team is ready to assist you with any questions
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