'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, Users, Award, TrendingUp, Mail, Phone, Sparkles, ArrowRight, X } from 'lucide-react'

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)

  // Job openings data
  const jobs = [
    {
      id: 1,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Lahore',
      type: 'Full-time',
      experience: '2-5 years',
      salary: 'Competitive + Commission',
      description: 'We are looking for a dynamic Sales Executive to join our Lahore showroom. The ideal candidate will have a passion for luxury automobiles and excellent communication skills.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '2-5 years of sales experience in automotive industry',
        'Excellent communication and negotiation skills',
        'Valid driver\'s license',
        'Fluency in English and Urdu'
      ],
      benefits: [
        'Competitive salary + commission structure',
        'Health insurance',
        'Company car',
        'Performance bonuses',
        'Training and development opportunities'
      ]
    },
    {
      id: 2,
      title: 'Service Technician',
      department: 'Service',
      location: 'Karachi',
      type: 'Full-time',
      experience: '3-7 years',
      salary: 'Market Competitive',
      description: 'BMW Karachi is seeking a certified Service Technician to join our state-of-the-art service center. You will be responsible for diagnosing and repairing BMW vehicles.',
      requirements: [
        'Diploma in Automotive Engineering',
        'BMW certification preferred',
        '3-7 years of experience with luxury vehicles',
        'Strong diagnostic skills',
        'Attention to detail'
      ],
      benefits: [
        'Competitive salary package',
        'Health and life insurance',
        'Ongoing training at BMW Germany',
        'Tool allowance',
        'Annual bonuses'
      ]
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Islamabad',
      type: 'Full-time',
      experience: '3-6 years',
      salary: 'Market Competitive',
      description: 'We are looking for a creative Marketing Specialist to develop and execute marketing strategies for BMW Pakistan. The role involves digital marketing, events, and brand management.',
      requirements: [
        'Bachelor\'s in Marketing or Communications',
        '3-6 years of marketing experience',
        'Experience with digital marketing',
        'Strong creative and analytical skills',
        'Excellent written and verbal communication'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Performance bonuses',
        'Flexible working hours',
        'Professional development'
      ]
    },
    {
      id: 4,
      title: 'Customer Service Representative',
      department: 'Customer Service',
      location: 'Rawalpindi',
      type: 'Full-time',
      experience: '1-3 years',
      salary: 'Competitive',
      description: 'BMW Rawalpindi is hiring a Customer Service Representative to provide exceptional service to our valued customers. You will be the first point of contact for customer inquiries.',
      requirements: [
        'Bachelor\'s degree',
        '1-3 years of customer service experience',
        'Excellent communication skills',
        'Problem-solving abilities',
        'Professional appearance and demeanor'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Customer service training',
        'Career growth opportunities',
        'Staff discounts'
      ]
    },
    {
      id: 5,
      title: 'Parts Advisor',
      department: 'Parts',
      location: 'Lahore',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'Competitive',
      description: 'We are seeking a Parts Advisor to manage parts inventory and assist customers with their parts needs. Knowledge of automotive parts is essential.',
      requirements: [
        'Experience in automotive parts',
        'Knowledge of BMW parts preferred',
        'Inventory management skills',
        'Customer service orientation',
        'Computer proficiency'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Staff discounts on parts',
        'Training programs',
        'Annual leave benefits'
      ]
    },
    {
      id: 6,
      title: 'Finance Manager',
      department: 'Finance',
      location: 'Karachi',
      type: 'Full-time',
      experience: '5-8 years',
      salary: 'Excellent Package',
      description: 'BMW Karachi is looking for an experienced Finance Manager to oversee financial operations, including budgeting, forecasting, and reporting.',
      requirements: [
        'CA/ACCA or MBA Finance',
        '5-8 years of experience',
        'Strong analytical skills',
        'Knowledge of automotive industry preferred',
        'Leadership abilities'
      ],
      benefits: [
        'Excellent salary package',
        'Health and life insurance',
        'Performance bonuses',
        'Car allowance',
        'Senior management benefits'
      ]
    }
  ]

  // Company stats
  const stats = [
    { icon: Users, value: '500+', label: 'Employees', color: 'text-blue-500' },
    { icon: Award, value: '10+', label: 'Years in Pakistan', color: 'text-purple-500' },
    { icon: TrendingUp, value: '100%', label: 'Growth Rate', color: 'text-green-500' },
    { icon: Briefcase, value: '50+', label: 'Open Positions', color: 'text-amber-500' }
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
    <div className="min-h-screen bg-black pt-24">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-padding mx-auto py-16 relative z-10  ml-20 mr-20">
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
          <div className="inline-block mb-4 ">
            <span className="bg-blue-600/20 text-blue-400 text-sm font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-blue-500/30 inline-flex items-center gap-2">
              <Sparkles size={14} />
              JOIN OUR TEAM
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Careers at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              BMW
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the ultimate driving machine team and be part of automotive excellence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={cardHoverAnimation}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <Icon className={`${stat.color} w-8 h-8 mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Why Join Us Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Join{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              BMW?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Global Excellence',
                desc: 'Work with a world-class brand recognized globally for innovation and quality'
              },
              {
                icon: Users,
                title: 'Great Culture',
                desc: 'Collaborative and inclusive workplace that values diversity and innovation'
              },
              {
                icon: TrendingUp,
                title: 'Growth Opportunities',
                desc: 'Continuous learning and career development programs'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  whileHover={cardHoverAnimation}
                  className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center group"
                >
                  <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Open{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Positions
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                whileHover={cardHoverAnimation}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {job.title}
                  </h3>
                  <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Briefcase size={14} />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock size={14} />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <DollarSign size={14} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <button className="text-blue-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-white/5"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            How to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Apply
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Submit Application', desc: 'Send your resume and cover letter' },
              { step: '02', title: 'Initial Interview', desc: 'Phone or video screening call' },
              { step: '03', title: 'Final Interview', desc: 'In-person interview with hiring team' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">Have Questions?</h3>
          <p className="text-gray-400 mb-6">Our HR team is here to help you with your application</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:careers@bmw-pakistan.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
              >
                <Mail size={16} />
                careers@bmw-pakistan.com
              </motion.button>
            </Link>
            <Link href="tel:+9242111269123">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 backdrop-blur-sm border border-white/20"
              >
                <Phone size={16} />
                +92 42 111 269 123
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedJob.title}</h2>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {selectedJob.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <span>{selectedJob.department}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{selectedJob.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} />
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Job Description</h3>
                <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">What We Offer</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    alert(`Application submitted for ${selectedJob.title} position!\nWe will contact you soon.`)
                    setSelectedJob(null)
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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