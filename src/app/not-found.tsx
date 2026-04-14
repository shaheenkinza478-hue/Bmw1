'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { 
  ArrowLeft, Home, Search, AlertCircle, Compass, 
  Car, Zap, Sparkles, ArrowRight, Mail, Phone
} from 'lucide-react'

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const suggestions = [
    { title: 'Home', href: '/', icon: Home, color: 'text-blue-500' },
    { title: 'Models', href: '/models', icon: Car, color: 'text-purple-500' },
    { title: 'Electric', href: '/electric', icon: Zap, color: 'text-green-500' },
    { title: 'Services', href: '/services', icon: Sparkles, color: 'text-amber-500' },
    { title: 'Contact', href: '/contact', icon: Mail, color: 'text-pink-500' },
    { title: 'Support', href: '/support', icon: Phone, color: 'text-cyan-500' }
  ]

  const floatingIcons = [
    { Icon: Car, delay: 0, x: '10%', y: '20%', size: 40 },
    { Icon: Zap, delay: 2, x: '80%', y: '30%', size: 35 },
    { Icon: Compass, delay: 4, x: '15%', y: '80%', size: 45 },
    { Icon: AlertCircle, delay: 1, x: '85%', y: '70%', size: 30 },
    { Icon: Sparkles, delay: 3, x: '50%', y: '50%', size: 50 }
  ]

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated Grid */}
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
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
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.Icon className="text-white/10" size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* Main Content with 3D Tilt */}
      <motion.div
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <div className="container-padding mx-auto py-20 text-center">
          {/* 404 Number with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block mb-8"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-500 blur-3xl rounded-full"
            />
            
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                4
              </span>
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              >
                0
              </motion.span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                4
              </span>
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-blue-600/20 text-blue-400 text-sm font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-blue-500/30 inline-flex items-center gap-2">
                <AlertCircle size={14} />
                COMING SOON!
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Looks Like You're{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Lost
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track with the ultimate driving machine.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for models, services, or information..."
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm transition-all"
              >
                Search
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-white font-bold mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {suggestions.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Link
                      href={item.href}
                      className="flex flex-col items-center gap-2 p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
                    >
                      <Icon className={`${item.color} w-6 h-6 group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-400 group-hover:text-white text-sm font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg inline-flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
              >
                <Home size={18} />
                Back to Home
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full text-lg inline-flex items-center gap-2 backdrop-blur-sm border border-white/20"
              >
                <Mail size={18} />
                Contact Support
              </motion.button>
            </Link>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gray-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-gray-500 text-sm">
                Did you know? BMW's logo represents a rotating airplane propeller
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Bottom Border */}
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
    </div>
  )
}