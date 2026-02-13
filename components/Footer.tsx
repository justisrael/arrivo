import Image from 'next/image';
import { Mail, Send, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Home',
      links: ['Hero Section', 'Features', 'Properties', 'Testimonials', "FAQ's"],
    },
    {
      title: 'About Us',
      links: ['Our Story', 'Our Works', 'How It Works', 'Our Team', 'Our Clients'],
    },
    {
      title: 'Properties',
      links: ['Portfolio', 'Categories'],
    },
    {
      title: 'Services',
      links: [
        'Valuation Mastery',
        'Strategic Marketing',
        'Negotiation Wizardry',
        'Closing Success',
        'Property Management',
      ],
    },
    {
      title: 'Contact Us',
      links: ['Contact Form', 'Our Offices'],
    },
  ];

  return (
    <footer className="bg-background text-white pt-20 pb-10 px-4 md:px-6 lg:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          {/* Left Side: Logo and Newsletter */}
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold">Estatein</span>
            </div>

            <div className="relative group">
              <div className="flex items-center bg-transparent border border-zinc-800 rounded-xl px-4 py-4 focus-within:border-zinc-600 transition-all">
                <Mail className="text-zinc-500 mr-3" size={20} />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent border-none outline-none text-white placeholder-zinc-500 w-full"
                />
                <button className="text-white hover:text-purple-500 transition-colors ml-2">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 flex-grow">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-zinc-500 font-medium mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white hover:text-purple-500 transition-all text-sm font-medium">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 bg-[#1A1A1A] -mx-4 md:-mx-6 lg:-mx-12 px-4 md:px-6 lg:px-12 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto pb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-sm text-zinc-400">@2023 Estatein. All Rights Reserved.</p>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white transition">
                Terms & Conditions
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[Facebook, Linkedin, Twitter, Youtube].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:bg-zinc-800 transition-all"
                >
                  <Icon size={18} className="text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
