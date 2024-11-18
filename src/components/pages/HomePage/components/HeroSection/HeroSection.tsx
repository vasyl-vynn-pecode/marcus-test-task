'use client';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';
import heroImage from '@/assets/images/home/hero-image.jpeg';

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to FictionalApp
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The ultimate solution to manage everything effortlessly.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative w-[500px] h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={heroImage}
              priority
              loading="eager"
              alt="Hero Image"
              fill
              sizes="(max-width: 768px) 100vw, 
                               (max-width: 1200px) 50vw, 
                               33vw"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <Button
          onClick={() => router.push('#features')}
          variant="primary"
          size="medium"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
