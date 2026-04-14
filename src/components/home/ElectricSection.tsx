'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { Zap, Battery, Gauge, Leaf, Sparkles, ArrowRight } from 'lucide-react'

const ElectricSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects - exactly like FeaturedModels
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  const features = [
    { icon: Zap, label: 'Instant Torque', value: 'Zero to thrill in seconds', color: 'text-blue-500' },
    { icon: Battery, label: 'Long Range', value: 'Up to 300 miles', color: 'text-green-500' },
    { icon: Gauge, label: 'Performance', value: 'Uncompromising power', color: 'text-purple-500' },
    { icon: Leaf, label: 'Zero Emissions', value: 'Drive with conscience', color: 'text-emerald-500' },
  ]

  // Animation variants - exactly like FeaturedModels
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

  const titleVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  }

  // Floating icons - exactly like FeaturedModels
  const floatingIcons = [
    { Icon: Zap, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Battery, color: "text-green-500", delay: 2, x: '85%', y: '25%' },
    { Icon: Gauge, color: "text-purple-500", delay: 4, x: '15%', y: '75%' },
    { Icon: Leaf, color: "text-emerald-500", delay: 1, x: '75%', y: '85%' },
    { Icon: Sparkles, color: "text-yellow-500", delay: 3, x: '35%', y: '35%' },
  ]

  return (
    <motion.section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Background Animations - Exactly like FeaturedModels */}
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
          style={{ scale }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Icons - Like FeaturedModels */}
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

        {/* Animated Grid - Like FeaturedModels */}
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

        {/* Light Beams - Like FeaturedModels */}
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
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute bottom-0 w-1/2 h-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform skew-x-12"
        />

        {/* Particles - Like FeaturedModels */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
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

      <div className="container-padding mx-auto relative z-10 ml-20 mr-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Badge - Like FeaturedModels */}
            <motion.div variants={titleVariants} className="inline-block">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <span className="absolute inset-0 bg-blue-500 blur-xl opacity-30 animate-pulse" />
                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold tracking-[0.3em] uppercase px-8 py-3 rounded-full border border-white/20 backdrop-blur-sm inline-flex items-center gap-2">
                  <Sparkles size={16} className="animate-spin-slow" />
                  ELECTRIC EXCELLENCE
                </span>
              </motion.span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              variants={titleVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
            >
              The Future of{' '}
              <motion.span
                animate={{
                  textShadow: ['0 0 20px #3B82F6', '0 0 40px #3B82F6', '0 0 20px #3B82F6'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
              >
                Driving
              </motion.span>
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Discover the perfect harmony of sustainability and performance. 
              Our electric vehicles deliver the ultimate driving experience 
              with zero emissions and exhilarating power.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  custom={index}
                  variants={featureVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className={`${feature.color} bg-blue-500/10 p-2 rounded-lg`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{feature.label}</h4>
                    <p className="text-gray-400 text-xs">{feature.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button - Like FeaturedModels */}
            <motion.div variants={itemVariants}>
              <Link href="/electric">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 20px 40px -10px rgba(59,130,246,0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block relative"
                >
                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-blue-500 blur-2xl rounded-full"
                  />
                  
                  <Button 
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-5 rounded-full text-lg overflow-hidden group border-0 shadow-2xl shadow-blue-600/50"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      EXPLORE ELECTRIC MODELS
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight size={20} />
                      </motion.span>
                    </span>
                    
                    {/* Shine Effect */}
                    <motion.div
                      initial={{ x: '-100%', skewX: -15 }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
                alt="BMW Electric Vehicle"
                fill
                className="object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30"
              >
                <span className="flex items-center gap-2 text-white font-bold">
                  <Zap size={16} className="text-yellow-400" />
                  i4 M50
                </span>
              </motion.div>

              {/* Specs Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30"
              >
                <span className="flex items-center gap-2 text-white">
                  <Battery size={16} className="text-green-400" />
                  300mi Range
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border Animation - Like FeaturedModels */}
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

export default ElectricSection