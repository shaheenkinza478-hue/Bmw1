// src/components/home/CarCard.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Car } from '@/types/car'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Gauge, Star, ArrowRight } from 'lucide-react'

interface CarCardProps {
  car: Car
}

const CarCard = ({ car }: CarCardProps) => {
  // Category colors
  const categoryColors = {
    sedan: 'bg-blue-500',
    suv: 'bg-green-500',
    coupe: 'bg-purple-500',
    convertible: 'bg-orange-500',
    electric: 'bg-cyan-500'
  }

  const categoryColor = categoryColors[car.category as keyof typeof categoryColors] || 'bg-gray-500'

  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden rounded-t-lg">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`absolute top-4 left-4 ${categoryColor} text-white px-3 py-1 text-xs font-bold uppercase rounded-full flex items-center gap-1 shadow-lg`}
          >
            {car.category === 'electric' && <Zap size={12} className="text-yellow-300" />}
            {car.category}
          </motion.span>

          {/* Price Badge */}
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-blue-400 px-3 py-1 text-sm font-bold rounded-full border border-blue-500/30"
          >
            {car.price}
          </motion.span>

          {/* Featured Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles size={20} className="text-yellow-400" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title and Model */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{car.name}</h3>
            <p className="text-sm text-gray-400">{car.model}</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">
            {car.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center p-2 bg-gray-800/50 rounded-lg">
              <Gauge size={14} className="text-blue-400 mx-auto mb-1" />
              <p className="text-[10px] text-gray-400">Power</p>
              <p className="text-xs font-bold text-white truncate">{car.specs.power}</p>
            </div>
            <div className="text-center p-2 bg-gray-800/50 rounded-lg">
              <Zap size={14} className="text-yellow-400 mx-auto mb-1" />
              <p className="text-[10px] text-gray-400">0-60</p>
              <p className="text-xs font-bold text-white">{car.specs.acceleration}</p>
            </div>
            <div className="text-center p-2 bg-gray-800/50 rounded-lg">
              <Star size={14} className="text-purple-400 mx-auto mb-1" />
              <p className="text-[10px] text-gray-400">Top Spd</p>
              <p className="text-xs font-bold text-white truncate">{car.specs.topSpeed}</p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="flex flex-wrap gap-1 mb-4">
            {car.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="text-[10px] text-gray-500 bg-gray-800/30 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
            {car.features.length > 2 && (
              <span className="text-[10px] text-gray-500 bg-gray-800/30 px-2 py-1 rounded-full">
                +{car.features.length - 2}
              </span>
            )}
          </div>

          {/* === REDESIGNED BUTTON === */}
          <Link href={`/models/${car.slug}`} className="mt-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group/btn"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-lg blur opacity-0 group-hover/btn:opacity-100 transition duration-500"
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
              
              <div className="relative bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2 group-hover/btn:bg-black/60 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2 text-gray-300 group-hover/btn:text-white font-medium text-sm tracking-wide">
                  Explore Model
                  <ArrowRight size={14} className="text-blue-400 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 group-hover/btn:translate-x-1" />
                </span>
                {/* Inner shine */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          </Link>
          {/* === END REDESIGNED BUTTON === */}
        </div>
      </Card>
    </motion.div>
  )
}

export default CarCard