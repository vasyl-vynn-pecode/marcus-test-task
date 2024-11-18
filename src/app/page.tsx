import { HomePage } from '@/components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Some page title',
  description: 'Some page description',
};
export default function Home() {
  return <HomePage />;
}
