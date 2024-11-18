'use client';

import { navigation } from '@/constants/navigation';
import { socials } from '@/constants/socials';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span>&copy; 2024 FictionalApp. All rights reserved.</span>
        </div>

        <nav className="flex space-x-6" aria-label="Footer Navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={pathname === item.href ? 'page' : undefined}
              className="hover:text-footerHover active:text-footerHover transition-colors duration-200 "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="hover:text-footerHover active:text-footerHover transition-colors duration-200 "
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
