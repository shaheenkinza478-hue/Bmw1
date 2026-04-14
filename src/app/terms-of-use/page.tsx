'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale, Users, Globe, Mail, Sparkles } from 'lucide-react'

export default function TermsOfUsePage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Animation variants
  const fadeInUp = {
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
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing or using this website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website.'
    },
    {
      icon: CheckCircle,
      title: 'Use of Website',
      content: 'You may use this website for personal, non-commercial purposes only. You may not modify, distribute, or reproduce any content without our prior written consent.'
    },
    {
      icon: AlertCircle,
      title: 'User Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information.'
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, and images, is the property of BMW Pakistan and is protected by intellectual property laws.'
    },
    {
      icon: Users,
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites and encourage you to review their terms and policies.'
    },
    {
      icon: Globe,
      title: 'Governing Law',
      content: 'These terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Lahore.'
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
              <FileText size={14} />
              LEGAL AGREEMENT
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Use
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
              Welcome to BMW Pakistan. By accessing or using our website, you agree to comply with and be bound by these Terms of Use. 
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-4 flex items-center gap-2 text-yellow-500 text-sm">
              <AlertCircle size={16} />
              <span>These terms apply to all visitors, users, and others who access or use the website.</span>
            </div>
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

        {/* Important Notice */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-amber-500/10 backdrop-blur-sm rounded-xl border border-amber-500/20 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Important Notice</h3>
                <p className="text-gray-400 mb-3">
                  BMW Pakistan reserves the right to modify these terms at any time. Your continued use of the website following any changes constitutes acceptance of those changes.
                </p>
                <p className="text-gray-400">
                  We recommend reviewing these terms periodically to stay informed about your rights and obligations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Questions About Terms?</h3>
                <p className="text-gray-400 mb-3">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="space-y-1">
                  <p className="text-gray-300">Email: <span className="text-blue-400">legal@bmw-pakistan.com</span></p>
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
            These Terms of Use were last updated on {currentDate}. Please review them periodically for changes.
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