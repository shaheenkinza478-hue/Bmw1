'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Database, Globe, Mail, Sparkles } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and vehicle information.'
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.'
    },
    {
      icon: Database,
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect the security of your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: Globe,
      title: 'Data Sharing',
      content: 'We do not sell your personal information. We may share your information with service providers who perform services on our behalf, and as required by law.'
    },
    {
      icon: Eye,
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information.'
    }
  ]

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-padding mx-auto py-16 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
           
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-blue-600/20 text-blue-400 text-sm font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-blue-500/30 inline-flex items-center gap-2">
              <Shield size={14} />
              LEGAL
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Policy
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>Last updated:</span>
            <span className="text-blue-400">{currentDate}</span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-white/5">
            <p className="text-gray-300 text-lg leading-relaxed">
              BMW Pakistan is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-6"
        >
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                      <p className="text-gray-400 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
                <p className="text-gray-400 mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-1">
                  <p className="text-gray-300">Email: <span className="text-blue-400">privacy@bmw-pakistan.com</span></p>
                  <p className="text-gray-300">Phone: <span className="text-blue-400">+92 42 111 269 123</span></p>
                  <p className="text-gray-300">Address: <span className="text-blue-400">123 BMW Avenue, Lahore, Pakistan</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Last Updated Note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            This Privacy Policy was last updated on {currentDate}. We may update this policy from time to time.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} BMW Pakistan. All rights reserved.
          </p>
        </motion.div>
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
    </div>
  )
}