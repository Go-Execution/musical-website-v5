import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { siteData } from '../data/content';

export default function Footer() {
  const { meta, socials } = siteData;
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const exploreLinks = [
    { label: 'About', href: '#about' },
    { label: 'Music', href: '#recordings' },
    { label: 'Performances', href: '#on-stage' },
    { label: 'Education', href: '#education' },
    { label: 'Song Bird', href: '#songbird' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Shop', href: '#shop' },
    { label: 'Contact', href: '#contact' },
    { label: 'What’s Coming', href: '#whats-coming' }
  ];

  return (
    <footer className="bg-[#050404] border-t border-[#c8a97e]/15 pt-20 pb-12 text-[#d6d1c7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block group mb-4">
              <span className="font-script text-4xl sm:text-5xl text-[#dfc299] group-hover:text-white transition-colors">
                Christie
              </span>
              <span className="font-cinzel text-[10px] tracking-[0.38em] text-[#c8a97e] block uppercase font-semibold">
                KANSKA
              </span>
            </a>

            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8f8a80] mb-6">
              Vocalist · Pianist · Composer · Educator
            </p>

            <div className="space-y-2 text-xs font-sans text-[#d6d1c7]/80">
              <p>
                <a href={`mailto:${meta.email}`} className="hover:text-[#dfc299] transition-colors">
                  {meta.email}
                </a>
              </p>
              <p>
                <a href={`tel:${meta.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#dfc299] transition-colors">
                  {meta.phone}
                </a>
              </p>
              <p className="text-[#8f8a80]">{meta.location} · ZCK Studios</p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h4 className="font-cinzel text-xs tracking-[0.25em] text-[#dfc299] uppercase font-semibold mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#8f8a80] hover:text-[#f5f2eb] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Links */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-xs tracking-[0.25em] text-[#dfc299] uppercase font-semibold mb-6">
              FOLLOW
            </h4>
            <ul className="space-y-2.5 text-xs font-sans grid grid-cols-2 gap-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8f8a80] hover:text-[#dfc299] transition-colors inline-flex items-center space-x-1"
                  >
                    <span>{s.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-xs tracking-[0.25em] text-[#dfc299] uppercase font-semibold mb-4">
              STAY IN CHRISTIE'S WORLD
            </h4>
            <p className="font-sans text-xs text-[#8f8a80] leading-relaxed mb-4">
              New music, performances, the book and musical, and shop releases.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#151310] border border-[#c8a97e]/40 flex items-center space-x-2 text-xs text-[#dfc299]">
                <Check className="w-4 h-4 text-[#c8a97e]" />
                <span>You’re on the list. Welcome!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0e0d0b] border border-[#c8a97e]/20 text-xs text-[#f5f2eb] placeholder:text-[#8f8a80]/50 focus:outline-none focus:border-[#c8a97e] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#c8a97e] text-[#080706] text-xs font-sans tracking-[0.2em] font-semibold uppercase hover:bg-[#dfc299] transition-colors shadow-gold-glow-subtle flex items-center justify-center space-x-1"
                >
                  <span>JOIN THE LIST</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-[#8f8a80] gap-4">
          <p>© 2026 Christie Kanska. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#about" className="hover:text-[#dfc299] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#dfc299] transition-colors">Terms</a>
            <a href="#shop" className="hover:text-[#dfc299] transition-colors">Shipping</a>
            <a href="#shop" className="hover:text-[#dfc299] transition-colors">Refunds</a>
            <a href="#shop" className="hover:text-[#dfc299] transition-colors">Digital Products</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
