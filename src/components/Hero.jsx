import React from 'react';
import { Play, Pause, ArrowDown, Music2 } from 'lucide-react';
import { siteData } from '../data/content';

export default function Hero({ isPlaying, onTogglePlay }) {
  const { tagline, name, roles } = siteData.meta;

  return (
    <section id="hero" className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#080706] pt-20">
      
      {/* Background Hero Image with Masterful Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/christie-hero.jpg"
          alt="Christie Kanska at the grand piano"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/65 to-[#080706]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/75 via-transparent to-[#080706]/75" />
        <div className="absolute inset-0 hero-vignette opacity-80" />
      </div>

      {/* Hero Content Stage */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Subtle Musical Clef Accent */}
        <div className="flex items-center space-x-3 mb-6 opacity-85">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c8a97e]" />
          <Music2 className="w-4 h-4 text-[#c8a97e]" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c8a97e]" />
        </div>

        {/* Lyrical Tagline Quote */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#f5f2eb] font-normal tracking-wide max-w-2xl leading-relaxed mb-6 px-2 drop-shadow-md">
          “{tagline}”
        </p>

        {/* Signature & Nameplate */}
        <div className="flex flex-col items-center select-none my-2 w-full">
          <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-gold-gradient leading-none tracking-normal drop-shadow-xl transform -rotate-1">
            Christie
          </h1>
          <p className="font-cinzel text-xs sm:text-base md:text-lg tracking-[0.35em] sm:tracking-[0.45em] text-[#dfc299] uppercase -mt-2 sm:-mt-4 font-semibold">
            KANSKA
          </p>
        </div>

        {/* Roles Subtitle */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 my-6 sm:my-7 text-[10px] sm:text-xs md:text-sm font-sans tracking-[0.16em] sm:tracking-[0.26em] text-[#d6d1c7]/90 uppercase max-w-lg">
          {roles.map((role, idx) => (
            <React.Fragment key={role}>
              <span className="hover:text-[#dfc299] transition-colors">{role}</span>
              {idx < roles.length - 1 && (
                <span className="text-[#c8a97e] opacity-60">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          {/* Primary Filled Gold Button */}
          <button
            onClick={onTogglePlay}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c8a97e] via-[#dfc299] to-[#c8a97e] text-[#080706] font-sans text-xs tracking-[0.24em] font-semibold uppercase shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>PAUSE ALBUM</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>LISTEN NOW</span>
              </>
            )}
          </button>

          {/* Ghost Outlined Pill Button */}
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#151310]/60 backdrop-blur-sm border border-[#c8a97e]/40 text-[#f5f2eb] font-sans text-xs tracking-[0.24em] font-medium uppercase hover:border-[#c8a97e] hover:bg-[#c8a97e]/15 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
          >
            <span>HER STORY</span>
          </a>
        </div>

      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#credentials" className="text-[10px] tracking-[0.3em] font-sans uppercase text-[#8f8a80]">
          EXPLORE
        </a>
        <ArrowDown className="w-3.5 h-3.5 text-[#c8a97e] animate-bounce" />
      </div>

    </section>
  );
}
