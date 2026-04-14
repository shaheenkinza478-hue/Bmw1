'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, Calendar, User, Clock, Tag, Sparkles, ArrowRight, Newspaper, X } from 'lucide-react'

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6) // Initially show 6 articles
  const [loading, setLoading] = useState(false)

  // All news articles data
  const allNewsArticles = [
    {
      id: 1,
      title: 'All-New BMW 7 Series Arrives in Pakistan',
      excerpt: 'The flagship luxury sedan redefines comfort and technology with its revolutionary design and cutting-edge features.',
      fullContent: 'The all-new BMW 7 Series represents the pinnacle of luxury and innovation. With its bold design, advanced technology, and unparalleled comfort, this flagship sedan sets new standards in the automotive industry. Key features include the BMW Curved Display, Executive Lounge seating, and the revolutionary BMW Theater Screen. The 7 Series offers a range of powerful engines including a V8 and an all-electric i7 variant. Experience the future of luxury driving with the new BMW 7 Series, now available at all BMW dealerships across Pakistan.',
      date: 'March 15, 2024',
      author: 'BMW Team',
      category: 'New Models',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'BMW Announces Electric Vehicle Expansion',
      excerpt: 'BMW Pakistan is expanding its electric vehicle lineup with new models and charging infrastructure across major cities.',
      fullContent: 'BMW Pakistan is committed to sustainable mobility with an ambitious electric vehicle expansion plan. The company will introduce three new electric models in the coming year and expand its charging network to over 100 locations nationwide. The new charging stations will feature DC fast charging capabilities, allowing customers to charge up to 80% in just 30 minutes. BMW is also investing in solar-powered charging stations and offering home charging solutions to make electric mobility more accessible than ever.',
      date: 'March 10, 2024',
      author: 'EV Division',
      category: 'Electric',
      image: '/bmw4.jpg',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'BMW Wins "Best Luxury Brand" Award 2024',
      excerpt: 'BMW has been recognized as the best luxury automotive brand in Pakistan for exceptional service and customer satisfaction.',
      fullContent: 'BMW Pakistan has been honored with the prestigious "Best Luxury Automotive Brand" award for 2024. This recognition reflects our commitment to excellence in every aspect of our business, from vehicle quality to customer service. The award was presented at the annual Automotive Excellence Awards ceremony in Lahore. BMW Pakistan was praised for its innovative approach, exceptional after-sales service, and the outstanding performance of its vehicles. This marks the fifth consecutive year that BMW has received this honor.',
      date: 'March 5, 2024',
      author: 'Awards Team',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      readTime: '3 min read'
    },
    {
      id: 4,
      title: 'New Service Center Opens in Islamabad',
      excerpt: 'BMW Pakistan expands service network with a state-of-the-art facility in the capital city.',
      fullContent: 'BMW Pakistan has opened a new state-of-the-art service center in Islamabad to better serve customers in the capital region. The facility features 15 service bays, the latest diagnostic equipment, and a team of certified BMW technicians. Customers can enjoy a comfortable waiting area with premium amenities, including a cafe and business center. The new center also offers express service for routine maintenance and a dedicated area for electric vehicle servicing. This expansion brings the total number of BMW service centers in Pakistan to 12.',
      date: 'February 28, 2024',
      author: 'Operations Team',
      category: 'Service',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
      readTime: '2 min read'
    },
    {
      id: 5,
      title: 'BMW X5 Now Available with Hybrid Option',
      excerpt: 'The popular luxury SUV now comes with an efficient hybrid powertrain for better fuel economy.',
      fullContent: 'The BMW X5 xDrive45e plug-in hybrid is now available at all BMW dealerships. This innovative powertrain combines a 3.0-liter turbocharged engine with an electric motor to deliver 389 horsepower while offering up to 50 miles of electric-only range. The hybrid X5 can accelerate from 0-60 mph in just 5.3 seconds while achieving exceptional fuel efficiency. The battery can be fully charged in under 5 hours using a standard home charger. This model retains all the luxury and capability of the X5 while offering significantly reduced emissions.',
      date: 'February 20, 2024',
      author: 'Product Team',
      category: 'Models',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'BMW Driving Experience Returns to Lahore',
      excerpt: 'Register now for the ultimate driving experience event featuring the full BMW lineup.',
      fullContent: 'The BMW Driving Experience event returns to Lahore on March 30-31 at the Defense Raya Golf Course. Participants will have the opportunity to test drive the entire BMW lineup, including the new 7 Series, X5, i4, and M4 Competition. Professional driving instructors will guide participants through challenging courses designed to showcase the performance and handling capabilities of each vehicle. Registration is now open with limited slots available. Participants will also receive exclusive BMW merchandise and refreshments throughout the event.',
      date: 'February 15, 2024',
      author: 'Events Team',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
      readTime: '3 min read'
    },
    // Additional articles for load more
    {
      id: 7,
      title: 'BMW M4 Competition Breaks Track Record',
      excerpt: 'The high-performance coupe sets a new lap record at the local racing circuit.',
      fullContent: 'The BMW M4 Competition has set a new track record at the Lahore Racing Circuit, completing the lap in just 2 minutes and 15 seconds. This achievement demonstrates the exceptional performance capabilities of BMW\'s M division. The record-breaking car featured the M Driver\'s Package and was piloted by professional racing driver Ahsan Iqbal. This marks the third consecutive year that a BMW model has held the lap record at this venue.',
      date: 'February 10, 2024',
      author: 'Performance Team',
      category: 'Models',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
      readTime: '3 min read'
    },
    {
      id: 8,
      title: 'BMW Introduces Advanced Driver Assistance',
      excerpt: 'New safety features coming to all 2024 BMW models.',
      fullContent: 'BMW has announced the introduction of advanced driver assistance systems across its entire 2024 model lineup. The new features include Level 2+ autonomous driving capabilities, enhanced emergency braking, and a 360-degree camera system with real-time object detection. These technologies represent BMW\'s commitment to safety and innovation. The systems will be available starting in Q2 2024 and will be standard on all new vehicles.',
      date: 'February 5, 2024',
      author: 'Technology Team',
      category: 'New Models',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      readTime: '4 min read'
    },
    {
      id: 9,
      title: 'BMW Sustainability Initiative Launched',
      excerpt: 'New eco-friendly practices implemented across all dealerships.',
      fullContent: 'BMW Pakistan has launched a comprehensive sustainability initiative across all its dealerships. The program includes solar panel installations, water conservation systems, and recycling programs. The initiative aims to reduce the company\'s carbon footprint by 40% by 2026. All dealerships will also transition to renewable energy sources for their operations. This commitment to sustainability reflects BMW\'s dedication to environmental responsibility.',
      date: 'January 28, 2024',
      author: 'Sustainability Team',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
      readTime: '3 min read'
    },
    {
      id: 10,
      title: 'BMW Customer Appreciation Event Announced',
      excerpt: 'Special offers and exclusive experiences for BMW owners.',
      fullContent: 'BMW Pakistan is hosting a Customer Appreciation Day on March 25th at all dealerships. The event will feature exclusive test drives, special financing offers, and complimentary vehicle inspections. Customers will also have the opportunity to meet BMW executives and participate in a prize draw to win a weekend with a BMW M4 Competition. This annual event is BMW\'s way of thanking customers for their loyalty and support throughout the year.',
      date: 'January 20, 2024',
      author: 'Customer Relations',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      readTime: '2 min read'
    },
    {
      id: 11,
      title: 'BMW Expands Service Network to Faisalabad',
      excerpt: 'New service center brings BMW care closer to customers.',
      fullContent: 'BMW Pakistan has opened a new state-of-the-art service center in Faisalabad, marking the 13th service facility in the country. The center features 8 service bays, a dedicated electric vehicle charging station, and a team of certified BMW technicians trained in Germany. This expansion is part of BMW\'s commitment to providing exceptional after-sales service to customers across Pakistan.',
      date: 'January 15, 2024',
      author: 'Operations Team',
      category: 'Service',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
      readTime: '3 min read'
    },
    {
      id: 12,
      title: 'BMW Electric Charging Network Hits 100 Locations',
      excerpt: 'Major milestone in electric vehicle infrastructure development.',
      fullContent: 'BMW Pakistan has achieved a significant milestone with 100 operational charging stations across the country. The network includes DC fast chargers at 30 key locations and Level 2 chargers at all dealerships. This expansion makes BMW the largest electric vehicle charging network operator in Pakistan. The company plans to add 50 more stations by the end of 2024, further strengthening its commitment to sustainable mobility.',
      date: 'January 10, 2024',
      author: 'EV Division',
      category: 'Electric',
      image: '/bmw4.jpg',
      readTime: '4 min read'
    }
  ]

  // Filter articles by category
  const filteredArticles = activeCategory === 'All' 
    ? allNewsArticles 
    : allNewsArticles.filter(article => article.category === activeCategory)

  // Get visible articles
  const visibleArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  // Load more function
  const handleLoadMore = () => {
    setLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount(prev => prev + 6)
      setLoading(false)
    }, 800)
  }

  // Reset visible count when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisibleCount(6)
  }

  // Categories for filter
  const categories = ['All', 'New Models', 'Electric', 'Awards', 'Service', 'Models', 'Events']

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

  const cardHoverAnimation = {
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
              <Newspaper size={14} />
              LATEST UPDATES
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            BMW{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              News
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from BMW Pakistan
          </p>
          {/* Article Counter */}
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-800/30 px-4 py-2 rounded-full">
            <span className="text-blue-400 font-bold">{filteredArticles.length}</span>
            <span className="text-gray-400">Articles Available</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">Showing {visibleCount} of {filteredArticles.length}</span>
          </div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleArticles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={fadeInUp}
              whileHover={cardHoverAnimation}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-white">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <User size={12} />
                    <span>{article.author}</span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-blue-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button - With Loading State */}
        {hasMore && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              disabled={loading}
              className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg inline-flex items-center gap-2 group shadow-2xl shadow-blue-600/30 transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More News
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* No More Articles Message */}
        {!hasMore && visibleCount > 0 && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-sm">You've seen all {filteredArticles.length} articles</p>
          </motion.div>
        )}

        {/* Newsletter Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-white/5"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Get the latest news and updates delivered to your inbox</p>
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <X size={18} />
            </button>

            {/* Article Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                {selectedArticle.category}
              </span>
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{selectedArticle.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>{selectedArticle.author}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedArticle.title}
              </h2>

              {/* Full Content */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{selectedArticle.fullContent}</p>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-3">Share this article</h4>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button className="w-10 h-10 bg-sky-600/20 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-12.066c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button className="w-10 h-10 bg-pink-600/20 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
                  </button>
                </div>
              </div>

              {/* Back Button */}
              <div className="mt-6">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
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