export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: 'repair' | 'installation' | 'accessories';
  popular?: boolean;
}

export interface Problem {
  id: string;
  title: string;
  symptom: string;
  solution: string;
  price: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  location: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
