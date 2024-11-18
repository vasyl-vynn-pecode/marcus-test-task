import feature1 from '@/assets/images/home/feature-1.jpeg';
import feature2 from '@/assets/images/home/feature-2.jpeg';
import feature3 from '@/assets/images/home/feature-3.jpeg';
import { StaticImageData } from 'next/image';

export interface Feature {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Task Automation',
    description:
      'Eliminate repetitive tasks with powerful automation tools, freeing up your time for what really matters.',
    image: feature1,
  },
  {
    id: 2,
    title: 'Collaborative Tools',
    description:
      'Collaborate seamlessly with your team using real-time communication and shared project dashboards.',
    image: feature2,
  },
  {
    id: 3,
    title: 'Analytics & Insights',
    description:
      'Gain actionable insights with in-depth analytics to optimize your productivity and achieve your goals faster.',
    image: feature3,
  },
];
