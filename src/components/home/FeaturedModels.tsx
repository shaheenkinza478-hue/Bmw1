'use client'

import { cars } from '@/data/cars'
import CarCard from './CarCard'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowRight, Zap, Star, Gem, Flame, Crown, Rocket } from 'lucide-react'

const FeaturedModels = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // More cars - 8 featured models - FIXED: Added proper images for i4 and Z4
  const featuredCars = [
    ...cars.slice(0, 6), // This includes BMW i4 from cars.ts
    {
      id: '7',
      slug: 'bmw-x7',
      name: 'BMW X7',
      model: 'X7',
      price: '$98,000',
      description: 'The flagship luxury SUV that redefines comfort and presence.',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      category: 'suv',
      features: ['Executive Lounge', 'Bowers & Wilkins Sound', 'Panoramic Sky Lounge'],
      specs: {
        engine: '4.4L V8',
        power: '523 hp',
        acceleration: '4.7 sec',
        topSpeed: '155 mph'
      },
      images: []
    },
    {
      id: '8',
      slug: 'bmw-z4',
      name: 'BMW Z4',
      model: 'Z4',
      price: '$52,000',
      description: 'Pure roadster experience with breathtaking performance.',
      image: '/bmw5.jpg',
      category: 'convertible',
      features: ['Retractable Hardtop', 'M Sport Package', 'Harman Kardon Sound'],
      specs: {
        engine: '3.0L TwinPower Turbo',
        power: '382 hp',
        acceleration: '4.4 sec',
        topSpeed: '155 mph'
      },
      images: []
    }
  ]

  // FIXED: BMW i4 ki image manually set kar di
  // Yeh ensure karega ke i4 ki image show ho
  const i4Index = featuredCars.findIndex(car => car.id === '3');
  if (i4Index !== -1) {
    featuredCars[i4Index].image = '/bmw1.jpg';
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for background
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  // Split cars into two rows
  const firstRowCars = featuredCars.slice(0, 4)
  const secondRowCars = featuredCars.slice(4, 8)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const titleVariants:any = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const cardVariants:any = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: i * 0.08,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100
      }
    })
  }

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const floatingIcons = [
    { Icon: Zap, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Star, color: "text-yellow-500", delay: 2, x: '85%', y: '25%' },
    { Icon: Gem, color: "text-purple-500", delay: 4, x: '15%', y: '75%' },
    { Icon: Flame, color: "text-red-500", delay: 1, x: '75%', y: '85%' },
    { Icon: Sparkles, color: "text-green-500", delay: 3, x: '35%', y: '35%' },
    { Icon: Crown, color: "text-amber-500", delay: 2.5, x: '55%', y: '55%' },
    { Icon: Rocket, color: "text-cyan-500", delay: 1.5, x: '45%', y: '45%' },
  ]

  return (
    <motion.section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
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
              rotate: [0, 15, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.Icon className={`${item.color} w-10 h-10 opacity-30`} />
          </motion.div>
        ))}

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '70px 70px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-padding mx-auto relative z-10 mr-20 ml-20">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={titleVariants} className="inline-block mb-4">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <span className="absolute inset-0 bg-blue-500 blur-xl opacity-30 animate-pulse" />
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold tracking-[0.3em] uppercase px-8 py-3 rounded-full border border-white/20 backdrop-blur-sm inline-flex items-center gap-2">
                <Sparkles size={16} className="animate-spin-slow" />
                DISCOVER EXCELLENCE
              </span>
            </motion.span>
          </motion.div>

          <motion.h2 
            variants={titleVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4"
          >
            Featured{' '}
            <motion.span
              animate={{
                textShadow: ['0 0 20px #3B82F6', '0 0 40px #3B82F6', '0 0 20px #3B82F6'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Models
            </motion.span>
          </motion.h2>

          <motion.p 
            variants={titleVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Experience the pinnacle of automotive engineering with our hand-picked selection of premium vehicles
          </motion.p>

          {/* Model Count Badge */}
          <motion.div
            variants={titleVariants}
            className="mt-4 inline-block"
          >
            <span className="bg-white/5 backdrop-blur-sm text-blue-400 text-sm px-4 py-2 rounded-full border border-white/10">
              <span className="font-bold">{featuredCars.length}</span> Exclusive Models
            </span>
          </motion.div>
        </motion.div>

        {/* First Row - 4 Cards */}
        <motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {firstRowCars.map((car, index) => (
            <motion.div
              key={car.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { 
                  type: "spring", 
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - 4 Cards */}
        <motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {secondRowCars.map((car, index) => (
            <motion.div
              key={car.id}
              custom={index + 4}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { 
                  type: "spring", 
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>

        {/* === REDESIGNED VIEW ALL BUTTON === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 200
          }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/models">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group inline-block"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <div className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-full px-12 py-5 group-hover:bg-black/60 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3 text-white font-bold text-lg tracking-wide">
                  VIEW ALL {featuredCars.length}+ MODELS
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight size={20} className="text-blue-400" />
                  </motion.span>
                </span>
                {/* Inner shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
        {/* === END REDESIGNED BUTTON === */}
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
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-left"
      />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </motion.section>
  )
}

export default FeaturedModels