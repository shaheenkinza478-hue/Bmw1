'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Wrench, Calendar, Shield, Clock, CreditCard,X, PhoneCall,
  Sparkles, ArrowRight, Zap, Gauge, Cpu, Wrench as ToolIcon, Car, 
  Battery, Wind, Droplet, Star, Gem, Crown, Rocket
} from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Expert maintenance services to keep your BMW performing at its best.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    features: ['Oil Change', 'Brake Service', 'Engine Check', 'Tire Rotation'],
    learnMoreInfo: 'Our maintenance service includes comprehensive vehicle inspection, genuine BMW parts, and certified technicians. We follow BMW\'s exact specifications to ensure your vehicle performs at its peak. Regular maintenance extends vehicle life and maintains resale value.'
  },
  {
    icon: Calendar,
    title: 'Test Drive',
    description: 'Schedule a test drive and experience the thrill of driving a BMW.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    features: ['All Models Available', 'Expert Guidance', 'Flexible Timing', 'No Obligation'],
    learnMoreInfo: 'Experience the ultimate driving machine firsthand. Our test drive program allows you to experience any BMW model on your preferred route with a professional product specialist. Choose from 30-minute or 1-hour test drive options.'
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Comprehensive warranty coverage for peace of mind.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    features: ['Extended Coverage', 'Parts Warranty', 'Labor Warranty', 'Roadside Assistance'],
    learnMoreInfo: 'BMW offers comprehensive warranty coverage including 4-year/50,000-mile bumper-to-bumper warranty, 12-year/unlimited-mileage rust perforation warranty, and 24/7 roadside assistance. Extended warranty options available.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for your BMW needs.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    features: ['Emergency Help', 'Phone Support', 'Online Chat', 'Quick Response'],
    learnMoreInfo: 'Our dedicated support team is available 24 hours a day, 7 days a week. Whether you need emergency roadside assistance, have technical questions, or need service scheduling, we\'re just a phone call away.'
  },
  {
    icon: CreditCard,
    title: 'Financing',
    description: 'Flexible financing options tailored to your needs.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    features: ['Low Interest', 'Flexible Terms', 'Quick Approval', 'Trade-ins Welcome'],
    learnMoreInfo: 'BMW Financial Services offers competitive rates and flexible terms to help you drive your dream BMW. Options include lease, finance, and balloon payment plans. Get pre-approved online in minutes.'
  },
  {
    icon: PhoneCall,
    title: 'Concierge',
    description: 'Personalized assistance for all your BMW queries.',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    features: ['Personal Assistant', 'Travel Planning', 'Event Access', 'VIP Treatment'],
    learnMoreInfo: 'BMW Concierge provides personalized assistance for all your needs, including travel planning, restaurant reservations, event access, and vehicle-related inquiries. Available exclusively for BMW owners.'
  },
]

const features = [
  { icon: Zap, title: 'Fast Service', desc: 'Quick turnaround times', color: 'text-yellow-500' },
  { icon: Gauge, title: 'Expert Technicians', desc: 'Certified professionals', color: 'text-blue-500' },
  { icon: Cpu, title: 'Diagnostic Tools', desc: 'Latest technology', color: 'text-purple-500' },
  { icon: ToolIcon, title: 'Genuine Parts', desc: 'Original BMW parts', color: 'text-green-500' },
  { icon: Car, title: 'Courtesy Cars', desc: 'Stay mobile', color: 'text-amber-500' },
  { icon: Shield, title: 'Service Warranty', desc: 'Guaranteed work', color: 'text-cyan-500' },
]

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<any>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Floating icons
  const floatingIcons = [
    { Icon: Wrench, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Calendar, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Shield, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Clock, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: CreditCard, color: "text-cyan-500", delay: 3, x: '45%', y: '45%' },
    { Icon: PhoneCall, color: "text-pink-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: ToolIcon, color: "text-red-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Car, color: "text-orange-500", delay: 3.5, x: '55%', y: '65%' },
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

      <div className="relative z-10 pt-24">
        {/* SECTION 1: HERO */}
        <section className="relative h-[50vh] min-h-[500px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537"
              alt="BMW Services"
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
                  BMW SERVICES
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Premium{' '}
                <span className="text-blue-500">
                  Services
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Experience exceptional service and support tailored to your BMW, delivered by certified experts.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: SERVICES GRID */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                EXCELLENCE IN EVERY DETAIL
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Our{' '}
                <span className="text-blue-500">
                  Services
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${service.bg} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group`}
                >
                  <service.icon className={`${service.color} w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button with Modal */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-blue-500 font-semibold flex items-center gap-2 group hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: WHY CHOOSE US */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                WHY CHOOSE US
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                The BMW{' '}
                <span className="text-blue-500">
                  Advantage
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <feature.icon className={`${feature.color} w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: SERVICE APPOINTMENT */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase">
                  BOOK YOUR SERVICE
                </motion.span>
                
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white">
                  Schedule{' '}
                  <span className="text-blue-500">
                    Appointment
                  </span>
                </motion.h2>
                
                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  Book your BMW service appointment online. Our expert technicians 
                  are ready to provide your vehicle with the care it deserves.
                </motion.p>

                <motion.ul variants={fadeInUp} className="space-y-4">
                  {[
                    'Free vehicle inspection',
                    'Genuine BMW parts',
                    'Certified technicians',
                    'Quick turnaround time',
                    'Courtesy car available'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Book Appointment Button */}
                <motion.div variants={fadeInUp}>
                  <Link href="/book-appointment">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                    >
                      Book Appointment
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537"
                    alt="BMW Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30"
                  >
                    <span className="flex items-center gap-2 text-white text-sm font-bold">
                      <Wrench size={14} className="text-blue-400" />
                      Expert Care
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA BANNER */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-20">
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
                  src="/bmw1.jpg"
                  alt="BMW Service CTA"
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
                    Need{' '}
                    <span className="text-blue-500">
                      Assistance?
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg"
                  >
                    Our team is available 24/7 to help with any questions
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                    >
                      Contact Us
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link href="/support">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm border border-white/20"
                    >
                      24/7 Support
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm mr-20 ml-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={`${selectedService.color} bg-black/50 p-3 rounded-xl`}>
                  <selectedService.icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedService.title}</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p>{selectedService.learnMoreInfo}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Link href="/contact" className="flex-1">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
                    Contact Us
                  </button>
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
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
    </motion.div>
  )
}