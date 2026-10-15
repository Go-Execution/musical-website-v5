import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function Chapters() {
  const { chapters } = siteData;
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#0b0a09] border-t border-[#c8a97e]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#c8a97e]/15">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                THE WORK
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal leading-[1.12]">
              One artist, <span className="italic text-[#dfc299]">five chapters</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/80 leading-relaxed font-light">
              Performer, recording artist, teacher, creator and producer — each part of Christie’s work feeds the others in harmony.
            </p>
          </div>
        </div>

        {/* Chapters Accordion / List Rows */}
        <div className="divide-y divide-[#c8a97e]/15">
          {chapters.map((ch, idx) => (
            <a
              key={ch.id}
              href={ch.target}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 relative px-2 sm:px-4 rounded-xl hover:bg-[#151310]/60"
            >
              {/* Left Title with Roman Index */}
              <div className="flex items-baseline space-x-6 sm:space-x-8 mb-3 md:mb-0">
                <span className="font-cinzel text-xs tracking-[0.2em] text-[#8f8a80] group-hover:text-[#c8a97e] transition-colors">
                  {ch.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f5f2eb] group-hover:text-[#dfc299] group-hover:translate-x-1 transition-all duration-300">
                  {ch.title}
                </h3>
              </div>

              {/* Right Description & Arrow */}
              <div className="flex items-center justify-between md:justify-end space-x-6 lg:space-x-12 pl-12 md:pl-0">
                <p className="font-sans text-xs sm:text-sm text-[#8f8a80] group-hover:text-[#d6d1c7] transition-colors max-w-sm">
                  {ch.desc}
                </p>

                <div className="w-10 h-10 rounded-full border border-[#c8a97e]/25 flex items-center justify-center text-[#c8a97e] group-hover:border-[#c8a97e] group-hover:bg-[#c8a97e] group-hover:text-[#080706] group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
