import React from 'react';
import { siteData } from '../data/content';
import { Award } from 'lucide-react';

export default function CredentialsRibbon() {
  const { credentials } = siteData;

  return (
    <section id="credentials" className="relative z-20 bg-[#0b0a09] border-y border-[#c8a97e]/15 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ribbon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 items-center text-center">
          {credentials.map((cred, idx) => (
            <div
              key={cred.title}
              className={`flex flex-col items-center justify-center p-2 relative group ${
                idx === credentials.length - 1 && credentials.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              {/* Vertical divider on desktop */}
              {idx > 0 && (
                <span className="hidden md:block absolute -left-3 lg:-left-4 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gradient-to-b from-transparent via-[#c8a97e]/20 to-transparent" />
              )}

              <p className="font-serif text-sm sm:text-base text-[#f5f2eb] font-medium tracking-wide group-hover:text-[#dfc299] transition-colors">
                {cred.title}
              </p>
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.16em] text-[#8f8a80] uppercase mt-1">
                {cred.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
