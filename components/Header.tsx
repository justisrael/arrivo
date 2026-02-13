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
      <header className={`fixed top-0 w-full bg-secondary-background/95 backdrop-blur border-b border-zinc-800 z-50 transition-all duration-300`}>
        <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Estatein" width={160} height={48} className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2 rounded-lg transition text-sm ${isActive
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
            <button className="hidden md:block px-6 py-2 text-white hover:text-gray-300 transition">Contact Us</button>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141414] border-t border-zinc-800 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 ${pathname === link.href ? 'text-white' : 'text-gray-400'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full text-left text-gray-400 hover:text-white py-2">Contact Us</button>
          </div>
        )}
      </header>
    </>
  );
}
