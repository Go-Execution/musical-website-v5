import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, isPlaying, onTogglePlay, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'recordings', 'on-stage', 'education', 'songbird', 'timeline', 'whats-coming', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'MUSIC', href: '#recordings' },
    { label: 'PERFORMANCES', href: '#on-stage' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'SONG BIRD', href: '#songbird' },
    { label: 'TIMELINE', href: '#timeline' },
    { label: 'SHOP', href: '#shop' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080706]/92 backdrop-blur-md border-b border-[#c8a97e]/15 py-3 shadow-piano-depth'
            : 'bg-gradient-to-b from-[#080706]/90 via-[#080706]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="group flex flex-col items-center select-none text-left focus:outline-none">
            <span className="font-script text-3xl sm:text-4xl text-[#f5f2eb] leading-none tracking-normal group-hover:text-[#dfc299] transition-colors">
              Christie
            </span>
            <span className="font-cinzel text-[9px] tracking-[0.38em] text-[#c8a97e] uppercase -mt-0.5 font-semibold">
              KANSKA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#dfc299] font-semibold'
                      : 'text-[#d6d1c7]/80 hover:text-[#f5f2eb]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-5">
            {/* Audio Toggle Pill */}
            <button
              onClick={onTogglePlay}
              className={`hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs tracking-wider transition-all duration-300 border ${
                isPlaying
                  ? 'bg-[#c8a97e]/15 border-[#c8a97e]/50 text-[#dfc299] shadow-gold-glow-subtle'
                  : 'bg-[#151310]/80 border-white/10 text-[#8f8a80] hover:text-[#f5f2eb] hover:border-[#c8a97e]/30'
              }`}
              title={isPlaying ? "Pause Le Rêve preview" : "Play Le Rêve preview"}
            >
              {isPlaying ? (
                <>
                  <div className="flex items-end space-x-0.5 h-3 w-3">
                    <span className="soundwave-bar" />
                    <span className="soundwave-bar" />
                    <span className="soundwave-bar" />
                  </div>
                  <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-[#dfc299]">Le Rêve</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#8f8a80]" />
                  <span className="font-sans text-[11px] uppercase tracking-widest">Listen</span>
                </>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#d6d1c7] hover:text-[#dfc299] transition-colors focus:outline-none"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c8a97e] text-[#080706] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-gold-glow-subtle">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book / Message CTA Button */}
            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs tracking-[0.18em] uppercase font-medium rounded-full bg-gradient-to-r from-[#c8a97e]/20 via-[#c8a97e]/30 to-[#c8a97e]/20 border border-[#c8a97e]/40 text-[#f5f2eb] hover:border-[#c8a97e] hover:bg-[#c8a97e] hover:text-[#080706] transition-all duration-300"
            >
              Inquire
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#d6d1c7] hover:text-[#dfc299] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Safe-Area & Overflow Scroll */}
      <div
        className={`fixed inset-0 z-50 bg-[#080706]/98 backdrop-blur-2xl lg:hidden transition-all duration-300 overflow-y-auto px-6 py-12 flex flex-col justify-between ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex flex-col">
            <span className="font-script text-4xl text-[#dfc299]">Christie</span>
            <span className="font-cinzel text-[9px] tracking-[0.4em] text-[#c8a97e] uppercase -mt-1 font-semibold">KANSKA</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full border border-white/10 text-[#d6d1c7] hover:text-[#dfc299] focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="my-auto py-8 flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base tracking-[0.25em] font-serif text-[#f5f2eb] hover:text-[#dfc299] transition-colors py-2 active:bg-white/5 rounded-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-[#c8a97e]/20 flex flex-col items-center space-y-3">
          <button
            onClick={() => {
              onTogglePlay();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3.5 rounded-full bg-[#151310] border border-[#c8a97e]/30 text-xs tracking-[0.2em] text-[#dfc299] uppercase flex items-center justify-center space-x-2 active:scale-98 transition-transform"
          >
            <Volume2 className="w-4 h-4 text-[#c8a97e]" />
            <span>{isPlaying ? "Pause Preview" : "Play Album Preview"}</span>
          </button>

          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3.5 rounded-full bg-[#c8a97e] text-[#080706] text-xs font-semibold tracking-[0.2em] uppercase active:scale-98 transition-transform"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
}
