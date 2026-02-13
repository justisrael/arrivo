'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Properties', href: '/properties' },
        { label: 'Services', href: '/services' },
    ];

    return (
        <>
            {/* Skip to Content */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
            >
                Skip to main content
            </a>

            <header className="fixed top-0 w-full bg-secondary-background/95 backdrop-blur border-b border-zinc-800 z-50 transition-all duration-300">
                <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between" aria-label="Main navigation">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" aria-label="Estatein — Go to homepage">
                        <Image
                            src="/logo.svg"
                            alt="Estatein"
                            width={160}
                            height={48}
                            className="h-10 w-auto"
                            priority
                            sizes="160px"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2" role="menubar">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    role="menuitem"
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`px-6 py-2 rounded-lg transition text-sm focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none ${isActive
                                        ? 'bg-zinc-900 border border-zinc-800 text-white'
                                        : 'text-gray-400 hover:text-white border border-transparent'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA + Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link href="/properties" className="hidden md:block px-6 py-2 text-white hover:text-gray-300 transition">
                            Contact Us
                        </Link>
                        <button
                            className="md:hidden text-white focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-lg p-1"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden bg-[#141414] border-t border-zinc-800 px-4 py-4 space-y-3" role="menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                role="menuitem"
                                aria-current={pathname === link.href ? 'page' : undefined}
                                className={`block py-2 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded ${pathname === link.href ? 'text-white' : 'text-gray-400'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/properties" className="block w-full text-left text-gray-400 hover:text-white py-2" role="menuitem">
                            Contact Us
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}
