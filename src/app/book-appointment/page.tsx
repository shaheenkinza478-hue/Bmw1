'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, ArrowRight, Calendar, Clock, User, Phone, Mail,
  Car, Wrench, Shield, CalendarDays, MessageSquare, CheckCircle,
  AlertCircle, ChevronRight, Star, Zap, Gauge, Cpu, MapPin,
  Headphones, Award, Users, ThumbsUp
} from 'lucide-react'

export default function BookAppointmentPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
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

  const serviceTypes = [
    { id: 'maintenance', name: 'Maintenance Service', icon: Wrench, color: 'text-blue-500', bg: 'bg-blue-500/10', desc: 'Regular maintenance to keep your BMW performing at its best' },
    { id: 'repair', name: 'Repair Service', icon: Shield, color: 'text-green-500', bg: 'bg-green-500/10', desc: 'Expert repair services for any issues' },
    { id: 'inspection', name: 'Vehicle Inspection', icon: Gauge, color: 'text-purple-500', bg: 'bg-purple-500/10', desc: 'Comprehensive vehicle checkup' },
    { id: 'diagnostic', name: 'Diagnostic Check', icon: Cpu, color: 'text-amber-500', bg: 'bg-amber-500/10', desc: 'Advanced diagnostic testing' },
    { id: 'oil-change', name: 'Oil Change', icon: Zap, color: 'text-red-500', bg: 'bg-red-500/10', desc: 'Quick and efficient oil change service' },
    { id: 'tire-service', name: 'Tire Service', icon: Car, color: 'text-cyan-500', bg: 'bg-cyan-500/10', desc: 'Tire rotation, balancing, and replacement' },
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ]

  const locations = [
    { id: 'lahore', name: 'Lahore Central', address: '123 Mall Road, Lahore', phone: '+92 42 111 269 123' },
    { id: 'karachi', name: 'Karachi Main', address: '456 Shahrah-e-Faisal, Karachi', phone: '+92 21 111 269 124' },
    { id: 'islamabad', name: 'Islamabad', address: '321 Blue Area, Islamabad', phone: '+92 51 111 269 125' },
    { id: 'rawalpindi', name: 'Rawalpindi', address: '654 Murree Road, Rawalpindi', phone: '+92 51 111 269 126' },
  ]

  const testimonials = [
    { name: 'Ahmed Khan', text: 'Excellent service! My BMW X5 was serviced quickly and professionally.', rating: 5 },
    { name: 'Fatima Ali', text: 'The online booking system is so convenient. Highly recommended!', rating: 5 },
    { name: 'Omar Farooq', text: 'Certified technicians and genuine parts. Trustworthy service.', rating: 5 },
  ]

  // Floating icons
  const floatingIcons = [
    { Icon: Calendar, color: "text-blue-500", delay: 0, x: '5%', y: '15%' },
    { Icon: Clock, color: "text-green-500", delay: 2, x: '90%', y: '25%' },
    { Icon: Wrench, color: "text-purple-500", delay: 4, x: '15%', y: '85%' },
    { Icon: Shield, color: "text-amber-500", delay: 1, x: '85%', y: '75%' },
    { Icon: Car, color: "text-cyan-500", delay: 3, x: '45%', y: '45%' },
    { Icon: Star, color: "text-yellow-500", delay: 2.5, x: '25%', y: '35%' },
    { Icon: Award, color: "text-purple-500", delay: 1.5, x: '75%', y: '55%' },
    { Icon: Users, color: "text-green-500", delay: 3.5, x: '55%', y: '65%' },
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

  const handleSubmit = () => {
    alert('Appointment booked successfully! We will contact you shortly.')
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
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1.3, 1.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Large Rotating Orb */}
        <motion.div
          style={{ scale, rotate }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
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
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537"
              alt="Book Appointment"
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
                  BMW SERVICE
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Book an{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Appointment
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Schedule your BMW service appointment online. Our expert technicians are ready to provide your vehicle with the care it deserves.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: APPOINTMENT FORM */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Progress Steps with Labels */}
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="flex justify-between items-center">
                  {[
                    { num: 1, label: 'Service Type' },
                    { num: 2, label: 'Date & Time' },
                    { num: 3, label: 'Your Info' }
                  ].map((item) => (
                    <div key={item.num} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        step >= item.num ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'
                      }`}>
                        {item.num}
                      </div>
                      <span className={`text-sm mt-2 ${
                        step >= item.num ? 'text-blue-500' : 'text-gray-500'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Progress Bar */}
                <div className="relative mt-4 h-1 bg-gray-800 rounded-full">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${(step - 1) * 50}%` }}
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Step 1: Service Type */}
              {step === 1 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                >
                  <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
                    Select <span className="text-blue-500">Service Type</span>
                  </motion.h3>
                  
                  <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 mb-8">
                    {serviceTypes.map((service) => {
                      const Icon = service.icon
                      const isSelected = selectedService === service.id
                      return (
                        <motion.button
                          key={service.id}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.02, y: -2 }}
                          onClick={() => setSelectedService(service.id)}
                          className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 text-left ${
                            isSelected 
                              ? 'bg-blue-600/20 border-blue-500' 
                              : `${service.bg} border-white/10 hover:border-blue-500/30`
                          }`}
                        >
                          <div className={`${service.color} bg-black/50 p-3 rounded-lg`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-lg mb-1">{service.name}</h4>
                            <p className="text-gray-400 text-sm">{service.desc}</p>
                          </div>
                          {isSelected && (
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                          )}
                        </motion.button>
                      )
                    })}
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStep(2)}
                      disabled={!selectedService}
                      className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full text-lg flex items-center gap-2 transition-all duration-300 ${
                        !selectedService ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
                      }`}
                    >
                      Next Step
                      <ArrowRight size={18} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                >
                  <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
                    Select <span className="text-blue-500">Date & Time</span>
                  </motion.h3>
                  
                  <motion.div variants={fadeInUp} className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Preferred Time
                    </label>
                    <select 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Select Location
                    </label>
                    <select 
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Choose a service center</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Location Details */}
                  {selectedLocation && (
                    <motion.div
                      variants={fadeInUp}
                      className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30"
                    >
                      <h4 className="text-white font-bold mb-2">Location Details</h4>
                      <p className="text-gray-300 text-sm">
                        {locations.find(l => l.id === selectedLocation)?.address}
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        {locations.find(l => l.id === selectedLocation)?.phone}
                      </p>
                    </motion.div>
                  )}

                  <motion.div variants={fadeInUp} className="flex justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStep(1)}
                      className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-3 rounded-full text-lg"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStep(3)}
                      disabled={!selectedDate || !selectedTime || !selectedLocation}
                      className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full text-lg flex items-center gap-2 transition-all duration-300 ${
                        !selectedDate || !selectedTime || !selectedLocation ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
                      }`}
                    >
                      Next Step
                      <ArrowRight size={18} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 3: Personal Information */}
              {step === 3 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                >
                  <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
                    Your <span className="text-blue-500">Information</span>
                  </motion.h3>
                  
                  <motion.div variants={staggerContainer} className="space-y-4 mb-6">
                    <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2 text-sm font-medium">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., BMW X5"
                        className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any specific concerns or requirements..."
                        className="w-full px-4 py-3 bg-black/50 text-white rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStep(2)}
                      className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-3 rounded-full text-lg"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg flex items-center gap-2"
                    >
                      Book Appointment
                      <CheckCircle size={18} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: BENEFITS */}
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
                WHY BOOK WITH US
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                Service{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Benefits
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Clock,
                  title: 'Quick Service',
                  desc: 'Fast turnaround times with efficient service',
                  color: 'text-blue-500',
                  stats: 'Same-day service available'
                },
                {
                  icon: Shield,
                  title: 'Certified Technicians',
                  desc: 'Expert mechanics trained by BMW',
                  color: 'text-green-500',
                  stats: '10+ years experience'
                },
                {
                  icon: Car,
                  title: 'Genuine Parts',
                  desc: 'Original BMW parts for your vehicle',
                  color: 'text-purple-500',
                  stats: '2-year warranty'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center group"
                >
                  <div className={`${item.color} bg-black/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-3">{item.desc}</p>
                  <span className="text-sm text-blue-500 font-semibold">{item.stats}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: TESTIMONIALS */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-padding mx-auto mr-20 ml-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                CUSTOMER EXPERIENCES
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4">
                What Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Customers Say
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="text-white font-bold">{testimonial.name}</p>
                </motion.div>
              ))}
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
                Need Help?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Contact Us
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our team is ready to assist you with any questions
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
                <Link href="/support">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm border border-white/20"
                  >
                    24/7 Support
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