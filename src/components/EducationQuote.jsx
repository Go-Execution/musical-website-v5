import React from 'react';
import { Quote, Music, GraduationCap } from 'lucide-react';
import { siteData } from '../data/content';

export default function EducationQuote({ onOpenLessons }) {
  const { quote } = siteData;

  return (
    <section id="education" className="relative py-28 sm:py-36 bg-[#0b0a09] border-y border-[#c8a97e]/15 overflow-hidden">
      
      {/* Background Subtle Piano Strings Line Artwork */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-15 pointer-events-none">
        <div className="piano-string" />
        <div className="piano-string" />
        <div className="piano-string" />
        <div className="piano-string" />
        <div className="piano-string" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Quote Glyph & Note */}
        <div className="w-14 h-14 rounded-full bg-[#151310] border border-[#c8a97e]/30 flex items-center justify-center text-[#dfc299] shadow-gold-glow-subtle mb-8">
          <Quote className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Kicker */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="h-[1px] w-6 bg-[#c8a97e]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
            {quote.kicker}
          </span>
          <span className="h-[1px] w-6 bg-[#c8a97e]" />
        </div>

        {/* Grand Pull Quote */}
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#f5f2eb] font-normal leading-snug tracking-tight mb-8">
          “{quote.text}”
        </blockquote>

        {/* Subtext */}
        <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/80 max-w-2xl leading-relaxed font-light mb-10">
          {quote.subtext}
        </p>

        {/* Lesson CTA Button */}
        <button
          onClick={onOpenLessons}
          className="px-8 py-3.5 rounded-full border border-[#c8a97e] bg-[#c8a97e]/10 text-[#f5f2eb] hover:bg-[#c8a97e] hover:text-[#080706] text-xs font-sans tracking-[0.24em] font-semibold uppercase shadow-gold-glow-subtle transition-all duration-300 active:scale-[0.98]"
        >
          {quote.action}
        </button>

      </div>
    </section>
  );
}
