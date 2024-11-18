'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui';

import { featuresData } from './featuresData';

export const FeaturesSection = () => {
  const router = useRouter();

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Features That Empower You
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover how our platform can revolutionize your workflow with
          cutting-edge features designed to save time and enhance productivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-6 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            onClick={() => router.push('#pricing')}
            variant="primary"
            size="large"
            className="px-8 py-4"
          >
            Explore Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};
