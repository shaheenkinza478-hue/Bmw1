// src/data/cars.ts
export const cars: Car[] = [
  // ... other cars
  {
    id: '3',
    slug: 'bmw-i4',
    name: 'BMW i4',
    model: 'i4',
    price: '$66,000',
    description: 'All-electric Gran Coupe that delivers dynamic performance with zero emissions.',
    image: 'https://images.unsplash.com/photo-1687956096348-9f4d5c4a3d3b', // ✅ YEH URL SAHI HAI
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
  // ... rest of cars
]