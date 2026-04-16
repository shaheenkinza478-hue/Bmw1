'use client'

import { cars } from '@/data/cars'
import CarCard from '@/components/home/CarCard'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, X, Zap, Gauge, Shield, Cpu, ArrowRight, 
  Star, Gem, Crown, Flame, Rocket, Target, Award, 
  Battery, Wind, Compass, Navigation, Droplet
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Models',  },
  { id: 'sedan', label: 'Sedans',   },
  { id: 'suv', label: 'SUVs',   },
  { id: 'coupe', label: 'Coupes',  },
  { id: 'electric', label: 'Electric',  }
]

export default function ModelsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects - like FeaturedModels
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const filteredCars = activeCategory === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeCategory)

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

  // Floating icons - like FeaturedModels
  const floatingIcons = [
    { Icon: Rocket, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Target, color: "text-purple-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Award, color: "text-amber-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Compass, color: "text-green-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Navigation, color: "text-red-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Battery, color: "text-cyan-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Wind, color: "text-indigo-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Droplet, color: "text-sky-500", delay: 3.5, x: '55%', y: '65%' },
  ]

  // Features
  const features = [
    { icon: Rocket, title: 'Performance', desc: 'Unmatched driving dynamics', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Target, title: 'Precision', desc: 'German engineering excellence', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Crown, title: 'Luxury', desc: 'Premium comfort & style', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { icon: Shield, title: 'Safety', desc: 'Advanced protection systems', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: Battery, title: 'Innovation', desc: 'Cutting-edge technology', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { icon: Wind, title: 'Aerodynamics', desc: 'Optimized for efficiency', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
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
          className="absolute top-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Floating Icons with Complex Animations */}
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
            opacity: [0, 0.25, 0]
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
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute bottom-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-x-12"
        />

        <motion.div
          animate={{
            y: ['-100%', '200%'],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Moving Gradient Lines */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        <motion.div
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-2/3 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        />
      </div>

      <div className="relative z-10  ">
        {/* SECTION 1: HERO */}
        <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
              alt="BMW Models"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
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
                  BMW PAKISTAN
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Models
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Discover the perfect blend of luxury, performance, and innovation across our entire range
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 mt-8"
              >
                <div>
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-gray-400">Models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">Dealers</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: CATEGORY FILTER & GRID */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            {/* Category Filter */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category:any) => (
                <motion.button
                  key={category.id}
                  variants={fadeInUp}
                  onClick={() => setActiveCategory(category.id)}
                  onHoverStart={() => setHoveredItem(`cat-${category.id}`)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative group"
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <motion.div
                    animate={{
                      scale: hoveredItem === `cat-${category.id}` ? 1.05 : 1,
                    }}
                    className={`
                      relative px-6 py-3 rounded-full text-sm font-medium 
                      transition-all duration-300 flex items-center gap-2
                      ${activeCategory === category.id 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                      }
                    `}
                    style={{
                      backgroundColor: activeCategory === category.id 
                        ? 'transparent' 
                        : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="uppercase tracking-wider">{category.label}</span>
                  </motion.div>
                </motion.button>
              ))}

              {activeCategory !== 'all' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={() => setActiveCategory('all')}
                  className="px-4 py-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-2"
                >
                  <X size={16} />
                  <span className="text-sm">Clear</span>
                </motion.button>
              )}
            </motion.div>

            {/* Model Count */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {filteredCars.length}
              </span>
              <span className="text-gray-400 ml-3 text-4xl">Models Available</span>
            </motion.div>

            {/* Cars Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredCars.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-white/5">
                  <Rocket className="text-blue-500 w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-400 text-lg mb-2">No models found</p>
                  <p className="text-gray-500 text-sm">Try selecting a different category</p>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="mt-4 text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-2 mx-auto"
                  >
                    View all models <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* SECTION 3: FEATURES */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container-padding mx-auto relative z-10 mr-20 ml-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                WHY CHOOSE BMW
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                The Ultimate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Driving Machine
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${feature.bg} backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${feature.color} bg-black/50 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: CTA BANNER */}
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
                    Ready to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Drive?
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg"
                  >
                    Schedule a test drive or contact our team today
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