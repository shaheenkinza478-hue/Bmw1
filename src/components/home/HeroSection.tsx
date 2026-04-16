'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Sparkles, ArrowRight, Play, Pause, Crown, Gem, Flame } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  // Premium images carousel
  const premiumImages = [
    {
      src: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      alt: "BMW 7 Series",
      title: "7 SERIES",
      desc: "The Pinnacle of Luxury"
    },
    {
      src: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b",
      alt: "BMW X5",
      title: "X5",
      desc: "Command Your World"
    },
    {
      src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
      alt: "BMW M4",
      title: "M4 COMPETITION",
      desc: "Unleash the Beast"
    },
    {
      src: "/bmw5.jpg",
      alt: "BMW i4",
      title: "i4",
      desc: "The Future is Electric"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % premiumImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => setVideoError(true))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoPlaying])

  // Background Animation Elements
  const floatingShapes = [...Array(8)].map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    color: `rgba(59, 130, 246, ${Math.random() * 0.1 + 0.05})`
  }))

  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }))

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const glowAnimation:any = {
    initial: { opacity: 0.3, scale: 1 },
    animate: { 
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{ paddingTop: '80px' }}
    >
      {/* Animated Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute rounded-full blur-3xl"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-500/30 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Cinematic Background with Parallax */}
      <motion.div 
        style={{ y, scale: 1.1 }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Video Background */}
        {!videoError && (
          <motion.video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onError={() => setVideoError(true)}
          >
            <source src="/bmw1.mp4" type="video/mp4" />
            <source src="/bmw2.mp4" type="video/mp4" />
            <source src="/bmw3.mp4" type="video/mp4" />
          </motion.video>
        )}

        {/* Fallback Image Carousel (if video fails) */}
        {(videoError || !isVideoPlaying) && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={premiumImages[currentSlide].src}
                alt={premiumImages[currentSlide].alt}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {/* Gradient Overlay - Fixed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

      {/* Light Leak Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(59,130,246,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content - CENTERED with proper positioning */}
      <div className="relative h-full flex items-center justify-center container-padding mx-auto z-30 min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center"
        >
          {/* Premium Badge with Glow Animation */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              onHoverStart={() => setHoveredItem('badge')}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.1 }}
              className="inline-block"
            >
              <motion.span
                className="relative"
                animate={glowAnimation.animate}
              >
                <span className="absolute inset-0 bg-blue-500 blur-xl opacity-30" />
                <span className="relative bg-blue-600 text-white text-sm font-bold tracking-[0.3em] uppercase px-8 py-3 rounded-full border border-white/20 backdrop-blur-sm inline-block">
                  ✦ BMW PAKISTAN ✦
                </span>
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Main Heading - CENTERED */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <motion.span 
                className="block"
                whileHover={{ scale: 1.05, color: '#3B82F6' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Experience
              </motion.span>
              <motion.span 
                className="block text-blue-500"
                whileHover={{ scale: 1.05, textShadow: '0 0 20px #3B82F6' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Pure Driving
              </motion.span>
              <motion.span 
                className="block"
                whileHover={{ scale: 1.05, color: '#3B82F6' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Pleasure
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Dynamic Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 text-lg md:text-xl font-light"
              >
                {premiumImages[currentSlide].desc}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          
          {/* === REDESIGNED BUTTONS === */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center mb-10">
            {/* EXPLORE MODELS Button - Premium Dark with Blue Gradient Border */}
            <Link href="/models">
              <motion.div
                onHoverStart={() => setHoveredItem('explore')}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative group"
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"
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
                <div className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-3 group-hover:bg-black/60 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base tracking-wide">
                    EXPLORE MODELS
                    <motion.span
                      animate={{ x: hoveredItem === 'explore' ? 6 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight size={18} className="text-blue-400" />
                    </motion.span>
                  </span>
                  {/* Inner shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            </Link>
            
            {/* ELECTRIC Button - Neon Blue Glow Effect */}
            <Link href="/electric">
              <motion.div
                onHoverStart={() => setHoveredItem('electric')}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative group"
              >
                {/* Glow behind button */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative bg-gradient-to-r from-blue-700 to-blue-600 rounded-full px-8 py-3 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base tracking-wide">
                    ELECTRIC
                    <motion.span
                      animate={{ 
                        rotate: hoveredItem === 'electric' ? 360 : 0,
                        scale: hoveredItem === 'electric' ? 1.2 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Zap size={18} className="text-yellow-300" />
                    </motion.span>
                  </span>
                  {/* Pulsing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </Link>
          </motion.div>
          {/* === END REDESIGNED BUTTONS === */}

          {/* Premium Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { icon: Crown, label: 'Luxury', value: 'Premium' },
              { icon: Zap, label: 'Performance', value: '550hp' },
              { icon: Gem, label: 'Craftsmanship', value: 'German' },
              { icon: Flame, label: 'Innovation', value: '2024' }
            ].map((item, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredItem(`feature-${index}`)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10"
              >
                <item.icon className="text-blue-500 w-5 h-5 mx-auto mb-1" />
                <div className="text-white font-bold text-xs">{item.value}</div>
                <div className="text-gray-500 text-[10px]">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 hidden lg:block"
      >
        <div className="space-y-2">
          {premiumImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              onHoverStart={() => setHoveredItem(`slide-${index}`)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.2 }}
              animate={{
                backgroundColor: currentSlide === index ? '#3B82F6' : 'rgba(255,255,255,0.2)',
                height: currentSlide === index ? 40 : 24
              }}
              className="block w-1 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Current Model Name */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 right-4 z-30 hidden lg:block"
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30"
        >
          <span className="text-blue-500 text-xs font-bold mr-2">NOW SHOWING</span>
          <span className="text-white font-bold text-sm">{premiumImages[currentSlide].title}</span>
        </motion.div>
      </motion.div>

      {/* Video Controls */}
      <motion.button
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        onHoverStart={() => setHoveredItem('control')}
        onHoverEnd={() => setHoveredItem(null)}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
        className="absolute bottom-6 left-6 z-30 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 bg-blue-600 hover:bg-blue-700"
      >
        {isVideoPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
      </motion.button>
    </motion.section>
  )
}

export default HeroSection