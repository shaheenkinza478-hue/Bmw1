'use client'

import { cars } from '@/data/cars'
import CarCard from '@/components/home/CarCard'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, ArrowRight, Zap, Battery, Gauge, Leaf, 
  Rocket, Target, Award, Compass, Navigation, Wind, Droplet 
} from 'lucide-react'

export default function ElectricPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const electricCars = cars.filter(car => car.category === 'electric')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

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

  // Floating icons - electric theme
  const floatingIcons = [
    { Icon: Zap, color: "text-yellow-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Battery, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Gauge, color: "text-blue-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Leaf, color: "text-emerald-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Wind, color: "text-cyan-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Droplet, color: "text-sky-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Rocket, color: "text-purple-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Target, color: "text-red-500", delay: 3.5, x: '55%', y: '65%' },
  ]

  // Features
  const features = [
    { icon: Zap, title: 'Instant Torque', desc: 'Zero to thrill in seconds', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { icon: Battery, title: 'Long Range', desc: 'Up to 300 miles', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: Gauge, title: 'Performance', desc: 'Uncompromising power', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Leaf, title: 'Zero Emissions', desc: 'Drive with conscience', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { icon: Wind, title: 'Aerodynamics', desc: 'Optimized efficiency', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { icon: Droplet, title: 'Regen Braking', desc: 'Energy recovery system', color: 'text-sky-500', bg: 'bg-sky-500/10' },
  ]

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
          className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
              linear-gradient(rgba(34, 197, 94, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.08) 1px, transparent 1px)
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
          className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform -skew-x-12"
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
          className="absolute bottom-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform skew-x-12"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
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

      <div className="relative z-10 ">
        {/* SECTION 1: HERO */}
        <section className="relative h-[60vh] min-h-[600px] overflow-hidden ">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068"

              alt="BMW Electric"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r  " />
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
                  THE FUTURE IS ELECTRIC
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                BMW{' '}
                <span className="text-blue-500">
                  Electric
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Experience the perfect blend of sustainability and performance 
                with our innovative electric fleet.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 mt-8"
              >
                <div>
                  <div className="text-3xl font-bold text-white">{electricCars.length}</div>
                  <div className="text-sm text-gray-400">Electric Models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">300mi</div>
                  <div className="text-sm text-gray-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3.9s</div>
                  <div className="text-sm text-gray-400">0-60 mph</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent " />
        </section>

        {/* SECTION 2: ELECTRIC MODELS GRID */}
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
                ZERO EMISSIONS, INFINITE THRILLS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Electric{' '}
                <span className="text-blue-500">
                  Models
                </span>
              </motion.h2>
            </motion.div>

            {/* Model Count */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-6xl font-black text-blue-500">
                {electricCars.length}
              </span>
              <span className="text-gray-400 ml-3 text-4xl">Electric Models Available</span>
            </motion.div>

            {/* Cars Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {electricCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {electricCars.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-white/5">
                  <Battery className="text-blue-500 w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-400 text-lg mb-2">No electric models found</p>
                  <p className="text-gray-500 text-sm">Check back soon for updates</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* SECTION 3: FEATURES */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
 <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">                WHY GO ELECTRIC
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                The Future of{' '}
                <span className="text-blue-500">
                  Driving
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
                  className={`${feature.bg} backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group`}
                >
                  <feature.icon className={`${feature.color} w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: CHARGING INFO */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
 <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">                  CHARGING MADE EASY
                </motion.span>
                
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white">
                  Power Up{' '}
                  <span className="text-blue-500">
                    Anywhere
                  </span>
                </motion.h2>
                
                <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed">
                  With our extensive charging network and fast-charging technology, 
                  keeping your BMW electric vehicle powered has never been easier.
                </motion.p>

                <motion.ul variants={fadeInUp} className="space-y-4">
                  {[
                    'Fast charging up to 80% in 30 minutes',
                    'Access to 50,000+ charging points',
                    'Smart charging scheduling',
                    'Real-time battery monitoring'
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

                <motion.div variants={fadeInUp}>
                  <Link href="/charging">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                    >
                      Learn About Charging
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
                  className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"

                    alt="Charging Station"
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
                      <Zap size={14} className="text-yellow-400" />
                      350 kW
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
                  src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"

                  alt="BMW Electric CTA"
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
                    Ready to Go{' '}
                    <span className="text-blue-500">
                      Electric?
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg"
                  >
                    Schedule a test drive or contact our EV specialists today
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
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
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