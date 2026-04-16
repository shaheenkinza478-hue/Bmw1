'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, ArrowRight, Zap, Battery, Gauge, Leaf,
  Clock, MapPin, Smartphone, Sun, Wind, ChevronRight,
  Star, Award, Shield, Cpu, Download, TrendingUp,
  CheckCircle, AlertCircle, Info, Play, Pause, 
  Bolt, Factory, Globe, Users
} from 'lucide-react'

export default function ChargingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)  // ✅ Added for FAQ

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const chargingLevels = [
    { level: 'Level 1', power: '120V', time: '8-12 hours', range: '3-5 miles/hour', type: 'Standard Home Outlet' },
    { level: 'Level 2', power: '240V', time: '4-6 hours', range: '20-30 miles/hour', type: 'Home/Public Charger' },
    { level: 'DC Fast', power: '480V+', time: '30-45 min', range: '100-200 miles/hour', type: 'Fast Charging Station' }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Charging',
      desc: 'Charge up to 80% in just 30 minutes with DC fast charging',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Battery,
      title: 'Long Range',
      desc: 'Up to 300 miles of range on a single charge',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      desc: 'Zero emissions and sustainable mobility',
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10'
    },
    {
      icon: Smartphone,
      title: 'Smart Control',
      desc: 'Monitor and control charging via My BMW App',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      icon: Sun,
      title: 'Solar Ready',
      desc: 'Compatible with solar panel systems',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      icon: Clock,
      title: 'Scheduled Charging',
      desc: 'Set charging times for off-peak rates',
      color: 'text-pink-500',
      bg: 'bg-pink-500/10'
    }
  ]

  const networkStats = [
    { label: 'Charging Points', value: '50,000+', icon: Bolt, color: 'text-blue-500' },
    { label: 'Cities Covered', value: '100+', icon: MapPin, color: 'text-purple-500' },
    { label: 'Fast Chargers', value: '15,000+', icon: Gauge, color: 'text-indigo-500' },
    { label: 'Countries', value: '30+', icon: Globe, color: 'text-cyan-500' }
  ]

  const faqs = [
    {
      question: 'How long does it take to charge a BMW electric vehicle?',
      answer: 'Charging time varies by model and charger type. With a DC fast charger, you can charge up to 80% in about 30 minutes. Level 2 chargers take 4-6 hours for a full charge.'
    },
    {
      question: 'Can I charge my BMW at home?',
      answer: 'Yes, all BMW electric vehicles come with a Level 1 charger that plugs into a standard household outlet. For faster charging, you can install a Level 2 home charging station.'
    },
    {
      question: 'Where can I find public charging stations?',
      answer: 'BMW provides access to over 50,000 charging points across Pakistan through the BMW Charging network. Use the My BMW App to locate stations near you.'
    },
    {
      question: 'How much does it cost to charge?',
      answer: 'Charging costs vary by location and time. Home charging is typically the most economical, especially during off-peak hours. Public charging stations have various pricing models.'
    },
    {
      question: 'What is the range of BMW electric vehicles?',
      answer: 'BMW electric vehicles offer ranges from 200 to 300 miles on a single charge, depending on the model and driving conditions.'
    }
  ]

  // Floating icons - blue/purple theme
  const floatingIcons:any = [
    { Icon: Zap, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Battery, color: "text-purple-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Gauge, color: "text-indigo-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Leaf, color: "text-cyan-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Sun, color: "text-amber-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Wind, color: "text-pink-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Clock, color: "text-indigo-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Smartphone, color: "text-blue-500", delay: 3.5, x: '55%', y: '65%' },
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

  const staggerContainer:any = {
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
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      {/* Background Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Gradient Orbs - Blue/Purple theme */}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        {floatingIcons.map((item:any, index:any) => (
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
        <section className="relative h-[50vh] min-h-[500px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale: 1.1 }}
            className="absolute inset-0"
          >
            <Image
              src="/bmw pic 18.jpg"
              alt="BMW Charging"
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
                  BMW CHARGING
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Learn About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Charging
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Everything you need to know about charging your BMW electric vehicle. From home charging to public networks.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: CHARGING LEVELS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                CHARGING OPTIONS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Charging{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Levels
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {chargingLevels.map((level, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={cardHoverAnimation}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{level.level}</h3>
                  <p className="text-blue-500 font-bold text-xl mb-4">{level.power}</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Charging Time:</span>
                      <span className="text-white font-semibold">{level.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Range Gain:</span>
                      <span className="text-white font-semibold">{level.range}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{level.type}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: BENEFITS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                WHY CHOOSE ELECTRIC
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Charging{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Benefits
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
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={cardHoverAnimation}
                    className={`${benefit.bg} backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300`}
                  >
                    <Icon className={`${benefit.color} w-10 h-10 mb-4`} />
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: NETWORK STATS */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                CHARGING NETWORK
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Coverage
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {networkStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={cardHoverAnimation}
                    className="text-center bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <Icon className={`${stat.color} w-8 h-8 mx-auto mb-3`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: HOW IT WORKS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                SIMPLE PROCESS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                How It{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Works
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Plug In',
                  desc: 'Connect your BMW to any compatible charging station',
                  icon: Zap
                },
                {
                  step: '02',
                  title: 'Monitor',
                  desc: 'Track charging progress via the My BMW App',
                  icon: Smartphone
                },
                {
                  step: '03',
                  title: 'Drive',
                  desc: 'Get back on the road with a fully charged battery',
                  icon: Gauge
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                  >
                    <div className="text-6xl font-black text-blue-500/20 mb-4">{item.step}</div>
                    <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ - FIXED with click functionality */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-2">
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
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                    <ChevronRight 
                      className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Answer section with animation */}
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 7: CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto text-center mr-20 ml-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Go Electric?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Contact Us
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Learn more about BMW electric vehicles and charging solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/electric">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                  >
                    Explore Electric
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm border border-white/20"
                  >
                    Contact Us
                  </motion.button>
                </Link>
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