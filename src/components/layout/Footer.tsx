'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, MapPin, Phone, ArrowRight, Zap } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants:any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const socialIconVariants:any = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: i * 0.1,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  }

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: "#3B82F6",
      transition: { duration: 0.2 }
    }
  }

  // Social media icons with their brand colors
  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: '#1877F2', hoverBg: 'hover:bg-[#1877F2]', href: 'https://facebook.com' },
    { icon: Twitter, name: 'Twitter', color: '#1DA1F2', hoverBg: 'hover:bg-[#1DA1F2]', href: 'https://twitter.com' },
    { icon: Instagram, name: 'Instagram', color: '#E4405F', hoverBg: 'hover:bg-[#E4405F]', href: 'https://instagram.com' },
    { icon: Youtube, name: 'Youtube', color: '#FF0000', hoverBg: 'hover:bg-[#FF0000]', href: 'https://youtube.com' },
    { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2', hoverBg: 'hover:bg-[#0A66C2]', href: 'https://linkedin.com' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity }
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity }
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"
        />
      </div>

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="container-padding mx-auto py-16 relative z-10 ml-20 mr-20">
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Models Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-6">MODELS</h3>
            <ul className="space-y-3">
              {['Sedans', 'SUVs', 'Coupes', 'Convertibles', 'Electric'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link 
                    href={`/models?category=${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-6">SERVICES</h3>
            <ul className="space-y-3">
              {['Maintenance', 'Financing', 'Test Drive', 'Parts', 'Warranty'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link 
                    href={`/services#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <motion.li variants={linkHoverVariants} whileHover="hover">
                <Link href="/about" className="text-gray-400 hover:text-blue-500">About Us</Link>
              </motion.li>
              <motion.li variants={linkHoverVariants} whileHover="hover">
                <Link href="/careers" className="text-gray-400 hover:text-blue-500">Careers</Link>
              </motion.li>
              <motion.li variants={linkHoverVariants} whileHover="hover">
                <Link href="/news" className="text-gray-400 hover:text-blue-500">News</Link>
              </motion.li>
              <motion.li variants={linkHoverVariants} whileHover="hover">
                <Link href="/contact" className="text-gray-400 hover:text-blue-500">Contact</Link>
              </motion.li>
              <motion.li variants={linkHoverVariants} whileHover="hover">
                <Link href="/locations" className="text-gray-400 hover:text-blue-500">Locations</Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-6">CONNECT</h3>
            
            {/* Social Icons with Brand Colors */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    custom={index}
                    variants={socialIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverBg} hover:text-white`}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe to our newsletter for the latest updates and exclusive offers.
              </p>
              
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 pr-10 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <ArrowRight size={14} className="text-white" />
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span>123 BMW Avenue, Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone size={14} className="text-blue-500 flex-shrink-0" />
                  <span>+92 42 1234 5678</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail size={14} className="text-blue-500 flex-shrink-0" />
                  <span>info@bmw-pakistan.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} BMW Pakistan. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-500 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-gray-500 hover:text-blue-500 text-sm transition-colors duration-200">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-blue-500 text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Zap size={16} />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer