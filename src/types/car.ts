// src/data/cars.ts
export interface Car {
  id: string;
  slug: string;
  name: string;
  model: string;
  price: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  images: string[];
}

export const cars: Car[] = [
  // ... your cars
];