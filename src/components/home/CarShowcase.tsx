'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { cars } from '@/data/cars'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { ChevronLeft, ChevronRight, Sparkles, Zap, ArrowRight } from 'lucide-react'

const CarShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
  }

  // Floating icons
  const floatingIcons = [
    { Icon: Sparkles, color: "text-yellow-500", delay: 0, x: '10%', y: '20%' },
    { Icon: Zap, color: "text-blue-500", delay: 2, x: '90%', y: '30%' },
    { Icon: Sparkles, color: "text-purple-500", delay: 4, x: '20%', y: '80%' },
    { Icon: Zap, color: "text-green-500", delay: 1, x: '80%', y: '70%' },
  ]

  return (
    <motion.section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ scale }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <item.Icon className={`${item.color} w-10 h-10 opacity-30`} />
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '70px 70px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          animate={{ x: ['-100%', '200%'], opacity: [0, 0.2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12"
        />
        <motion.div
          animate={{ x: ['200%', '-100%'], opacity: [0, 0.2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute bottom-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-x-12"
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container-padding mx-auto relative z-10">
        <SectionTitle title="BMW Showcase" subtitle="Experience Excellence" align="center" className="mb-16" />

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20"
            >
              <Image src={cars[currentIndex].image} alt={cars[currentIndex].name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-3xl">
                  <span className="inline-block mb-4">
                    <span className="bg-blue-600/20 text-blue-400 text-sm font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm">
                      {cars[currentIndex].category} • {cars[currentIndex].model}
                    </span>
                  </span>
                  <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-6xl font-black text-white mb-4">
                    {cars[currentIndex].name}
                  </motion.h3>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-300 text-lg mb-6 max-w-2xl leading-relaxed">
                    {cars[currentIndex].description}
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{cars[currentIndex].specs.power}</div>
                      <div className="text-xs text-gray-400">Power</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{cars[currentIndex].specs.acceleration}</div>
                      <div className="text-xs text-gray-400">0-60 mph</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{cars[currentIndex].specs.topSpeed}</div>
                      <div className="text-xs text-gray-400">Top Speed</div>
                    </div>
                  </motion.div>

                  {/* REDESIGNED DISCOVER MORE BUTTON - Premium Dark Style */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                    <Link href={`/models/${cars[currentIndex].slug}`}>
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
                        <div className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-full px-10 py-4 group-hover:bg-black/60 transition-all duration-300">
                          <span className="relative z-10 flex items-center gap-2 text-white font-bold text-lg tracking-wide">
                            DISCOVER MORE
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                          {/* Inner shine effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')} / {String(cars.length).padStart(2, '0')}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-blue-600/50 text-white p-4 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 z-20">
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-blue-600/50 text-white p-4 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 z-20">
            <ChevronRight size={24} />
          </motion.button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {cars.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-left"
      />

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
      `}</style>
    </motion.section>
  )
}

export default CarShowcase