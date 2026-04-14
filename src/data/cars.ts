import { Car } from '@/types/car'

export const cars: Car[] = [
  {
    id: '1',
    slug: 'bmw-7-series',
    name: 'BMW 7 Series',
    model: '7 Series',
    price: '$94,000',
    description: 'The pinnacle of luxury and innovation. The BMW 7 Series redefines executive travel with unprecedented comfort and cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    category: 'sedan',
    features: [
      'BMW Curved Display',
      'Executive Lounge Seating',
      'Sky Lounge Panoramic Glass Roof',
      'BMW Theater Screen'
    ],
    specs: {
      engine: '4.4L V8',
      power: '523 hp',
      acceleration: '4.1 sec',
      topSpeed: '155 mph'
    },
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    ]
  },
  {
    id: '2',
    slug: 'bmw-x5',
    name: 'BMW X5',
    model: 'X5',
    price: '$61,000',
    description: 'The Sports Activity Vehicle that combines versatility with sporty elegance. Perfect for family adventures and daily commutes.',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
    category: 'suv',
    features: [
      'xDrive Intelligent All-Wheel Drive',
      'Adaptive M Suspension',
      'Panoramic Glass Roof',
      'Harman Kardon Sound System'
    ],
    specs: {
      engine: '3.0L TwinPower Turbo',
      power: '335 hp',
      acceleration: '5.3 sec',
      topSpeed: '149 mph'
    },
    images: [
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b',
      'https://images.unsplash.com/photo-1600716051809-e997e11a5d52',
    ]
  },
  {
    id: '3',
    slug: 'bmw-i4',
    name: 'BMW i4',
    model: 'i4',
    price: '$66,000',
    description: 'All-electric Gran Coupe that delivers dynamic performance with zero emissions. The future of driving pleasure.',
    image: 'https://images.unsplash.com/photo-1687956096348-9f4d5c4a3d3b',
    category: 'electric',
    features: [
      'BMW eDrive Technology',
      'Curved Display',
      'Intelligent Personal Assistant',
      'Laserlight Technology'
    ],
    specs: {
      engine: 'Electric Motor',
      power: '536 hp',
      acceleration: '3.9 sec',
      topSpeed: '140 mph'
    },
    images: [
      'https://images.unsplash.com/photo-1687956096348-9f4d5c4a3d3b',
      'https://images.unsplash.com/photo-1687956096348-9f4d5c4a3d3a',
    ]
  },
  {
    id: '4',
    slug: 'bmw-m4',
    name: 'BMW M4 Competition',
    model: 'M4',
    price: '$79,000',
    description: 'The ultimate high-performance coupe. Uncompromising power meets precision engineering.',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
    category: 'coupe',
    features: [
      'M TwinPower Turbo',
      'M xDrive',
      'Carbon Fiber Roof',
      'M Sport Exhaust'
    ],
    specs: {
      engine: '3.0L M TwinPower Turbo',
      power: '503 hp',
      acceleration: '3.4 sec',
      topSpeed: '180 mph'
    },
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
      'https://images.unsplash.com/photo-1617814086368-b547dbb4f0c4',
    ]
  }
]