'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll } from '@/hooks/useScroll'
import { cn } from '@/lib/utils'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Models', href: '/models' },
  { label: 'Electric', href: '/electric' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  
]

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrolledDown, setScrolledDown] = useState(false)
  const scrolled = useScroll(50)

  useEffect(() => {
    setScrolledDown(scrolled)
  }, [scrolled])

  // Animation Variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)"
    },
    visible: {
      opacity: 1,
      clipPath: "circle(150% at 100% 0%)",
      transition: { 
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)",
      transition: { 
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1 + 0.3,
        ease: "easeOut"
      }
    })
  }

  // Check if current path matches item href
  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-700 font-sans',
          scrolledDown 
            ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BMW Logo - with hover animation */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="relative z-10 block">
                <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                  BMW
                </span>
                <span className="text-blue-500 text-4xl font-black ml-[-4px]">.</span>
              </Link>
            </motion.div>

            {/* Desktop Menu - with enhanced hover */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => {
                  const isActive = isActivePath(item.href)
                  
                  return (
                    <motion.div
                      key={item.href}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        className="relative px-4 py-2 block group"
                        onMouseEnter={() => setHoveredItem(item.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Hover Background Effect */}
                        <motion.div
                          animate={{
                            scale: hoveredItem === item.label ? 1 : 0.8,
                            opacity: hoveredItem === item.label ? 0.1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-blue-500 rounded-full blur-md"
                        />
                        
                        {/* Active Background */}
                        {isActive && (
                          <motion.span 
                            layoutId="activeNav"
                            className="absolute inset-0 bg-white/5 rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        {/* Text with hover effect */}
                        <motion.span 
                          animate={{
                            y: hoveredItem === item.label ? -2 : 0,
                            color: isActive 
                              ? '#60A5FA' 
                              : hoveredItem === item.label 
                                ? '#60A5FA' 
                                : '#D1D5DB'
                          }}
                          className={cn(
                            "relative z-10 text-sm font-medium tracking-wider uppercase transition-all duration-200",
                            isActive && "font-bold"
                          )}
                        >
                          {item.label}
                        </motion.span>

                        {/* Animated Underline - for hover and active */}
                        <motion.div
                          animate={{
                            width: isActive ? '100%' : (hoveredItem === item.label ? '80%' : '0%'),
                            left: isActive ? '0%' : (hoveredItem === item.label ? '10%' : '50%')
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"
                        />

                        {/* Active Dot */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* CTA Button - with enhanced hover */}
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative hidden lg:block group"
            >
              <Link
                href="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full overflow-hidden flex items-center gap-2"
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                />
                
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>BOOK NOW</span>
                
                {/* Shine Effect */}
                <motion.div
                  initial={{ x: '-100%', skewX: -15 }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </Link>
            </motion.div>

            {/* Mobile Menu Button - with hover animation */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-600/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - with enhanced animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/95 backdrop-blur-xl lg:hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                />
                
                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.2) 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>

              <div className="relative h-full flex flex-col items-center justify-center space-y-6 p-8 z-10">
                {navItems.map((item, index) => {
                  const isActive = isActivePath(item.href)
                  
                  return (
                    <motion.div
                      key={item.href}
                      custom={index}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="relative block group"
                      >
                        <motion.span 
                          animate={{
                            color: isActive ? '#60A5FA' : '#FFFFFFB3'
                          }}
                          className={cn(
                            "text-3xl font-bold transition-all duration-300",
                            isActive && "text-blue-400"
                          )}
                        >
                          {item.label}
                        </motion.span>
                        
                        {/* Hover Glow Effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileHover={{ opacity: 0.3, scale: 1.5 }}
                          className="absolute inset-0 bg-blue-500 blur-3xl -z-10"
                        />
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile CTA - with hover animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full inline-block group relative overflow-hidden"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                      BOOK TEST DRIVE
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </>
  )
}

export default Navbar