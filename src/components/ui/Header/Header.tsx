'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigation } from '@/constants/navigation';

import { Button } from '../Button';

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const navigateToFeatures = () => {
        setIsMobileMenuOpen(false);
        router.push('#features');
    };

    return (
        <header className="bg-white shadow-md" role="banner">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-customColor">
                    <span className="sr-only">Go to home page</span>
                    FictionalApp
                </Link>

                <nav
                    className="hidden md:flex space-x-8"
                    aria-label="Primary Navigation"
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            aria-label={item.label}
                            aria-current={pathname === item.href ? 'page' : undefined}
                            className="hover:text-customColor transition-colors "
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Button
                    className="hidden md:block"
                    onClick={() => router.push('#features')}
                    variant="primary"
                    size="medium"
                >
                    Get Started
                </Button>

                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-customColor "
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <nav
                    id="mobile-menu"
                    className="md:hidden bg-white shadow-md"
                    role="dialog"
                    aria-label="Mobile Navigation"
                >
                    <ul className="flex flex-col space-y-4 p-4">
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="block text-customColor hover:text-customColor transition-colors "
                                    onClick={toggleMobileMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button
                                onClick={navigateToFeatures}
                                variant="primary"
                                size="medium"
                            >
                                Get Started
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};
