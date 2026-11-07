export interface CoursePreview {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  lessons: number;
  duration: string;
  priceUGX: number;
  priceUSD: number;
  isFreePreview: boolean;
}

export const featuredCourses: CoursePreview[] = [
  {
    id: 'intro-investing',
    title: 'Introduction to Investing',
    category: 'Foundations',
    level: 'Beginner',
    description: 'Understand what investing means, how markets work and why long-term thinking matters.',
    lessons: 8,
    duration: '2h 15m',
    priceUGX: 45000,
    priceUSD: 12,
    isFreePreview: true,
  },
  {
    id: 'budgeting-saving',
    title: 'Budgeting & Saving Essentials',
    category: 'Financial Literacy',
    level: 'Beginner',
    description: 'Build a practical budget, create an emergency fund and develop healthy saving habits.',
    lessons: 6,
    duration: '1h 40m',
    priceUGX: 30000,
    priceUSD: 8,
    isFreePreview: true,
  },
  {
    id: 'risk-diversification',
    title: 'Investment Risk & Diversification',
    category: 'Risk Management',
    level: 'Intermediate',
    description: 'Learn how risk works, why diversification matters and how to think about asset allocation.',
    lessons: 7,
    duration: '2h 00m',
    priceUGX: 55000,
    priceUSD: 15,
    isFreePreview: false,
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest & Long-Term Planning',
    category: 'Long-Term Planning',
    level: 'Beginner',
    description: 'See how compound growth works and how small, consistent decisions can shape long-term outcomes.',
    lessons: 5,
    duration: '1h 20m',
    priceUGX: 25000,
    priceUSD: 7,
    isFreePreview: true,
  },
];
