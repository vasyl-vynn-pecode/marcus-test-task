'use client';

import Link from 'next/link';
import { useData } from './useData';

export const BlogPage = () => {
  const { data: posts, loading, error } = useData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-blue-500 text-lg">Loading articles</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <p className="text-red-500 text-lg font-bold mb-4">
          Something went wrong!
        </p>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <ul className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link className="hover:text-blue-500 font-medium" href="/">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-bold">Posts</li>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.slice(0, 12).map((post) => (
            <div key={post.id} className="bg-white p-6 shadow-md rounded">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
