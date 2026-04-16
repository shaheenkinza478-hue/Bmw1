'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, ArrowRight, Calendar, Clock, MapPin, Users,
  Award, Star, Gem, Crown, Rocket, Target, Shield,
  ChevronLeft, ChevronRight, Play, Pause
} from 'lucide-react'

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeYear, setActiveYear] = useState(0)
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

  const timelineData:any = [
    {
      year: '1916',
      title: 'The Beginning',
      description: 'BMW is founded in Munich, Germany, starting as an aircraft engine manufacturer.',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      details: 'Bayerische Motoren Werke (BMW) was established on March 7, 1916. The company initially produced aircraft engines before transitioning to motorcycles and automobiles.'
    },
    {
      year: '1923',
      title: 'First Motorcycle',
      description: 'BMW launches its first motorcycle, the R32, featuring a groundbreaking boxer engine.',
      image: '/bmw1.jpg',
      details: 'The R32 motorcycle set new standards with its 486cc boxer engine and shaft drive, establishing BMW\'s reputation for engineering excellence.'
    },
    {
      year: '1928',
      title: 'First Automobile',
      description: 'BMW enters the automobile market with the Dixi, marking the beginning of automotive legacy.',
      image: '/bmw7.jpg',
      details: 'The BMW 3/15 PS "Dixi" was the company\'s first production car, based on the Austin 7 under license.'
    },
    {
      year: '1936',
      title: 'BMW 328',
      description: 'The legendary BMW 328 roadster is introduced, becoming an icon of automotive design.',
      image: '/bmw6.jpg',
      details: 'The 328 dominated sports car racing in the late 1930s and influenced BMW design for decades.'
    },
    {
      year: '1972',
      title: 'New Class',
      description: 'The BMW 5 Series is introduced, establishing the modern sports sedan segment.',
      image: '/bmw5.jpg',
      details: 'The 5 Series combined luxury with performance, setting the template for all future BMW sedans.'
    },
    {
      year: '1978',
      title: 'M Division Born',
      description: 'BMW Motorsport GmbH (M) is founded, creating the legendary M1 supercar.',
      image: '/bmw4.jpg',
      details: 'The M division would go on to create some of the most celebrated performance cars in history.'
    },
    {
      year: '1994',
      title: 'Global Expansion',
      description: 'BMW opens its first factory in the United States, in Spartanburg, South Carolina.',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      details: 'The Spartanburg plant became the exclusive production site for BMW X models.'
    },
    {
      year: '2013',
      title: 'Electric Future',
      description: 'BMW i3 and i8 are launched, pioneering electric mobility and carbon-fiber construction.',
      image: '/bmw4.jpg',
      details: 'The i3 and i8 demonstrated BMW\'s commitment to sustainable mobility and future technology.'
    },
    {
      year: '2023',
      title: '107 Years of Excellence',
      description: 'BMW continues to lead in luxury, performance, and innovation worldwide.',
      image: '/bmw3.jpg',
      details: 'With over a century of experience, BMW remains at the forefront of automotive innovation.'
    }
  ]

  const milestones:any = [
    { year: '1916', event: 'Company Founded', icon: Star },
    { year: '1923', event: 'First Motorcycle', icon: Target },
    { year: '1928', event: 'First Car', icon: Gem },
    { year: '1972', event: '5 Series', icon: Crown },
    { year: '1978', event: 'M Division', icon: Rocket },
    { year: '2013', event: 'Electric Vehicles', icon: Shield }
  ]

  const nextSlide = () => {
    setActiveYear((prev) => (prev + 1) % timelineData.length)
  }

  const prevSlide = () => {
    setActiveYear((prev) => (prev - 1 + timelineData.length) % timelineData.length)
  }

  // Floating icons
  const floatingIcons:any = [
    { Icon: Calendar, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Clock, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Award, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Star, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Gem, color: "text-cyan-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Crown, color: "text-yellow-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Rocket, color: "text-indigo-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Shield, color: "text-red-500", delay: 3.5, x: '55%', y: '65%' },
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
          style={{ scale }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
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
        <section className="relative h-[45vh] min-h-[450px] overflow-hidden mb-16">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ scale: 1.1 }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
              alt="BMW History"
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
                  BMW HERITAGE
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Discover Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  History
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Over a century of innovation, performance, and excellence. Explore the journey that made BMW the ultimate driving machine.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: TIMELINE CAROUSEL */}
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
                JOURNEY THROUGH TIME
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Timeline
                </span>
              </motion.h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              {/* Main Timeline Card */}
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={timelineData[activeYear].image}
                      alt={timelineData[activeYear].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-bold text-xl">{timelineData[activeYear].year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-3">{timelineData[activeYear].title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{timelineData[activeYear].description}</p>
                    <p className="text-gray-400">{timelineData[activeYear].details}</p>
                    
                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevSlide}
                          className="bg-white/10 hover:bg-blue-600/50 text-white p-3 rounded-full transition-all duration-300"
                        >
                          <ChevronLeft size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextSlide}
                          className="bg-white/10 hover:bg-blue-600/50 text-white p-3 rounded-full transition-all duration-300"
                        >
                          <ChevronRight size={20} />
                        </motion.button>
                      </div>
                      
                      {/* Slide Counter */}
                      <span className="text-gray-400">
                        {String(activeYear + 1).padStart(2, '0')} / {String(timelineData.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Year Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {timelineData.map((_:any, index:any) => (
                  <button
                    key={index}
                    onClick={() => setActiveYear(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeYear 
                        ? 'w-8 bg-blue-500' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY MILESTONES */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                KEY MOMENTS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Important{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Milestones
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {milestones.map((milestone:any, index:any) => {
                const Icon = milestone.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={cardHoverAnimation}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
                  >
                    <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: STATS */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Calendar, value: '107+', label: 'Years of Innovation', color: 'text-blue-500' },
                { icon: Users, value: '50+', label: 'Countries Worldwide', color: 'text-green-500' },
                { icon: Award, value: '1000+', label: 'Awards & Accolades', color: 'text-purple-500' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={cardHoverAnimation}
                    className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
                  >
                    <Icon className={`${stat.color} w-12 h-12 mx-auto mb-4`} />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-padding mx-auto text-center mr-20 ml-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Learn More?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Contact Us
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our team is ready to share more about BMW's rich heritage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 group shadow-2xl shadow-blue-600/30"
                  >
                    Contact Us
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm border border-white/20"
                  >
                    Back to About
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