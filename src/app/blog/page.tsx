import { Metadata } from 'next';

import { BlogPage } from '@/components/pages';

export const metadata: Metadata = {
  title: 'Some blog page title',
  description: 'Some blog page description',
};
export default function Blog() {
  return <BlogPage />;
}
