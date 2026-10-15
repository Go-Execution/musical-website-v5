import React, { useState } from 'react';
import { Feather, Heart, Sparkles, Trees, ArrowRight } from 'lucide-react';
import { siteData } from '../data/content';

export default function SongBird({ onExploreSongbird }) {
  const { songbird } = siteData;
  const [activePillar, setActivePillar] = useState(0);

  const pillarIcons = [
    <Sparkles className="w-4 h-4 text-[#c8a97e]" />,
    <Heart className="w-4 h-4 text-[#c8a97e]" />,
    <Feather className="w-4 h-4 text-[#c8a97e]" />,
    <Trees className="w-4 h-4 text-[#c8a97e]" />
  ];

  return (
    <section id="songbird" className="relative py-28 sm:py-36 bg-[#080706] overflow-hidden">
      
      {/* Golden Glow Vignette */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#c8a97e]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Pillars */}
          <div className="lg:col-span-7">
            
            {/* Kicker */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                {songbird.kicker}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5f2eb] font-normal tracking-tight leading-[0.95] mb-6">
              Song<br />
              <span className="italic text-[#dfc299]">Bird</span>
            </h2>

            {/* Tagline */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#f5f2eb]/90 leading-relaxed max-w-xl mb-8">
              {songbird.tagline}
            </p>

            {/* Narrative description */}
            <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/80 font-light leading-relaxed max-w-lg mb-10">
              {songbird.description}
            </p>

            {/* Interactive 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {songbird.pillars.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activePillar === idx
                      ? 'bg-[#151310] border-[#c8a97e]/60 shadow-gold-glow-subtle'
                      : 'bg-[#0e0d0b]/80 border-white/5 hover:border-[#c8a97e]/20'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    {pillarIcons[idx]}
                    <h4 className="font-serif text-base text-[#f5f2eb] font-medium">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#8f8a80] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onExploreSongbird}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c8a97e] via-[#dfc299] to-[#c8a97e] text-[#080706] font-sans text-xs tracking-[0.24em] font-semibold uppercase shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center space-x-2.5"
            >
              <span>{songbird.action}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Right Column: Elevated Golden Songbird Artwork */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-[#0e0d0b] border border-[#c8a97e]/25 p-8 flex flex-col items-center justify-center shadow-piano-depth group overflow-hidden">
              
              {/* Subtle Staff Lines in Background */}
              <div className="absolute inset-0 flex flex-col justify-center space-y-6 opacity-20 pointer-events-none px-6">
                <div className="h-[1px] bg-[#c8a97e]" />
                <div className="h-[1px] bg-[#c8a97e]" />
                <div className="h-[1px] bg-[#c8a97e]" />
                <div className="h-[1px] bg-[#c8a97e]" />
                <div className="h-[1px] bg-[#c8a97e]" />
              </div>

              {/* Elevated Golden Songbird SVG Emblem */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 text-[#dfc299] transform group-hover:scale-105 transition-transform duration-700 ease-out">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                  {/* Musical Note Staff Curve */}
                  <path d="M20 150 C 60 145, 120 155, 180 148" stroke="#c8a97e" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  
                  {/* Branch Silhouette */}
                  <path d="M40 150 Q 100 145, 160 150" stroke="#8c714e" strokeWidth="3" strokeLinecap="round" />
                  <path d="M90 147 Q 110 135, 125 140" stroke="#8c714e" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Songbird Body (Sculptural Golden Silhouette) */}
                  <path
                    d="M75 145 C 65 130, 70 100, 95 90 C 110 82, 130 85, 145 98 C 158 110, 160 130, 150 145 C 135 152, 90 155, 75 145 Z"
                    fill="url(#goldGradient)"
                    className="opacity-95"
                  />
                  
                  {/* Bird Head & Beak */}
                  <circle cx="140" cy="95" r="18" fill="url(#goldGradient)" />
                  <polygon points="156,92 178,98 156,104" fill="#dfc299" />
                  <circle cx="144" cy="91" r="2.5" fill="#080706" />

                  {/* Bird Wing (Sculpted Feather Layer) */}
                  <path
                    d="M95 110 C 115 105, 135 115, 130 132 C 120 145, 95 142, 85 130 C 80 120, 85 112, 95 110 Z"
                    fill="#dfc299"
                    opacity="0.9"
                  />
                  
                  {/* Tail Feathers */}
                  <path d="M75 143 L 42 152 L 48 140 Z" fill="#8c714e" />

                  {/* Musical Notes Floating from Beak */}
                  <g className="animate-pulse">
                    <circle cx="180" cy="80" r="3" fill="#dfc299" />
                    <line x1="183" y1="80" x2="183" y2="65" stroke="#dfc299" strokeWidth="1.5" />
                    <line x1="183" y1="65" x2="192" y2="68" stroke="#dfc299" strokeWidth="1.5" />
                  </g>
                  <g className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                    <circle cx="170" cy="60" r="2.5" fill="#c8a97e" />
                    <line x1="172.5" y1="60" x2="172.5" y2="48" stroke="#c8a97e" strokeWidth="1.2" />
                  </g>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="goldGradient" x1="60" y1="80" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#dfc299" />
                      <stop offset="0.5" stopColor="#c8a97e" />
                      <stop offset="1" stopColor="#8c714e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Emblem Badge Caption */}
              <div className="relative z-10 text-center mt-4">
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#dfc299] uppercase font-semibold block">
                  Original Children’s Work
                </span>
                <span className="font-sans text-[11px] text-[#8f8a80] tracking-wider">
                  Illustrated Book &amp; Musical Stage Suite
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
