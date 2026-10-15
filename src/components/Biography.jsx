import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { siteData } from '../data/content';

export default function Biography({ onOpenContact }) {
  const { bioLead, bioParagraph1, bioParagraph2, bioParagraph3 } = siteData.meta;

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080706] overflow-hidden">
      
      {/* Subtle Background Radial Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c8a97e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Main Photo: Christie at Piano */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#c8a97e]/25 shadow-piano-depth group">
                <img
                  src="/assets/images/pic012.jpg"
                  alt="Christie Kanska at the grand piano"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-sans tracking-[0.2em] text-[#d6d1c7] uppercase">
                  <span>Concert Grand Pianist</span>
                  <span className="text-[#c8a97e]">Atelier Series</span>
                </div>
              </div>

              {/* Secondary Floating Overlapping Photo 1 (Choir / Classroom) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-48 sm:w-60 rounded-xl overflow-hidden border-2 border-[#151310] shadow-2xl group hidden sm:block">
                <img
                  src="/assets/images/christie-kanska-children-choir.webp"
                  alt="Christie Kanska teaching children's choir"
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-2 left-3 text-[10px] font-sans tracking-widest text-[#dfc299] uppercase font-medium">
                  Brooklyn Choir
                </span>
              </div>

              {/* Secondary Overlapping Photo 2 (Live Stage) */}
              <div className="absolute -top-6 -left-4 sm:-left-8 z-0 w-36 sm:w-44 rounded-xl overflow-hidden border border-[#c8a97e]/20 opacity-70 hidden sm:block">
                <img
                  src="/assets/images/banner_shows.jpg"
                  alt="Carnegie Hall solo performance"
                  className="w-full h-24 sm:h-28 object-cover filter brightness-90"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                BIOGRAPHY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f5f2eb] font-normal leading-[1.18] tracking-tight mb-8">
              {bioLead}
            </h2>

            {/* Lead Narrative */}
            <p className="font-serif italic text-lg sm:text-xl text-[#dfc299] font-normal leading-relaxed mb-6">
              {bioParagraph1}
            </p>

            {/* Historical Milestones Body */}
            <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/85 font-light leading-relaxed mb-6">
              {bioParagraph2}
            </p>

            {/* Founder Note */}
            <div className="p-4 rounded-xl bg-[#151310]/80 border-l-2 border-[#c8a97e] border-y border-r border-white/5 mb-8">
              <p className="font-sans text-xs sm:text-sm text-[#f5f2eb] leading-relaxed">
                {bioParagraph3}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#timeline"
                className="group inline-flex items-center space-x-2 text-xs tracking-[0.22em] font-sans font-semibold uppercase text-[#f5f2eb] hover:text-[#dfc299] transition-colors"
              >
                <span>MORE ABOUT CHRISTIE</span>
                <ArrowRight className="w-4 h-4 text-[#c8a97e] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2 text-xs tracking-[0.22em] font-sans font-medium uppercase text-[#8f8a80] hover:text-[#f5f2eb] transition-colors"
              >
                <span>GET IN TOUCH</span>
                <span className="text-[#c8a97e]">↗</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
