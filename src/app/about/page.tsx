'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { 
  Award, Users, Globe, TrendingUp, Sparkles, ArrowRight,
  Heart, Target, Shield, Zap, Star, Gem, Crown, Rocket,
  MapPin, Phone, Mail, Clock
} from 'lucide-react'

const stats = [
  { icon: Award, value: '100+', label: 'Years of Excellence', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { icon: Users, value: '50,000+', label: 'Happy Customers', color: 'text-green-500', bg: 'bg-green-500/10' },
  { icon: Globe, value: '15+', label: 'Locations', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { icon: TrendingUp, value: '1000+', label: 'Vehicles Sold', color: 'text-amber-500', bg: 'bg-amber-500/10' },
]

const values = [
  { icon: Heart, title: 'Customer First', desc: 'Our customers are at the heart of everything we do', color: 'text-red-500' },
  { icon: Target, title: 'Excellence', desc: 'We strive for perfection in every detail', color: 'text-blue-500' },
  { icon: Shield, title: 'Integrity', desc: 'Honest and transparent business practices', color: 'text-green-500' },
  { icon: Zap, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technology', color: 'text-purple-500' },
]

const team = [
  { name: 'Ali Raza', position: 'CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
  { name: 'Sara Khan', position: 'Sales Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  { name: 'Omar Farooq', position: 'Service Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
  { name: 'Zara Ahmed', position: 'Marketing Head', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
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

  // Floating icons
  const floatingIcons = [
    { Icon: Award, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Users, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Globe, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: TrendingUp, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Star, color: "text-yellow-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Gem, color: "text-cyan-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Crown, color: "text-orange-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Rocket, color: "text-red-500", delay: 3.5, x: '55%', y: '65%' },
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
        <section className="relative h-[60vh] min-h-[600px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"

              alt="BMW Pakistan"
              fill
              className="object-cover rounder-md"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r " />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex items-center container-padding mx-auto mr-20 ml-20  mt-2">
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
                  BMW PAKISTAN
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                About{' '}
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
                Redefining luxury mobility in Pakistan with innovation, performance, 
                and unparalleled driving pleasure.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: OUR STORY */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
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
                <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase ">
                  A LEGACY OF EXCELLENCE
                </motion.span>
                
                <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-black text-white">
                  Our{' '}
                  <span className="text-blue-500">
                    Story
                  </span>
                </motion.h2>
                
                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  BMW Pakistan has been at the forefront of luxury automotive excellence, 
                  bringing the ultimate driving machines to discerning customers across the nation.
                </motion.p>

                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  With a commitment to innovation, sustainability, and customer satisfaction, 
                  we continue to set new standards in the automotive industry.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <Link href="/about/history">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                    >
                      Discover Our History
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
                  className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
                    alt="BMW Story"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STATS */}
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
                OUR ACHIEVEMENTS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                By the{' '}
                <span className="text-blue-500">
                  Numbers
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`${stat.bg} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center`}
                >
                  <stat.icon className={`${stat.color} w-16 h-16 mx-auto mb-4`} />
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: OUR VALUES */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                WHAT WE STAND FOR
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Our Core{' '}
                <span className="text-blue-500">
                  Values
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <value.icon className={`${value.color} w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: OUR TEAM */}
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
                MEET THE EXPERTS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Our Leadership{' '}
                <span className="text-blue-500">
                  Team
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-500">{member.position}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 6: MISSION */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                  alt="BMW Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="relative p-12 md:p-16 text-center md:text-left">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  Our{' '}
                  <span className="text-blue-500">
                    Mission
                  </span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-xl max-w-3xl leading-relaxed"
                >
                  To provide the ultimate driving experience through innovative technology, 
                  sustainable practices, and exceptional customer service, while contributing 
                  to the growth of Pakistan's automotive sector.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7: CTA BANNER */}
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
                  src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068"
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
                    Experience{' '}
                    <span className="text-blue-500">
                      BMW
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg"
                  >
                    Visit our showroom or schedule a test drive today
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
                  <Link href="/test-drive">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm border border-white/20"
                    >
                      Test Drive
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