import React, { useState } from 'react';
import { Play, Pause, Disc3, ExternalLink, Volume2, ListMusic, ChevronDown, ChevronUp } from 'lucide-react';
import { siteData } from '../data/content';

export default function Recordings({ isPlaying, onTogglePlay, currentTime, duration, onSeek, onOpenNewsletter }) {
  const { album } = siteData;
  const [showTracklist, setShowTracklist] = useState(false);

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="recordings" className="relative py-24 sm:py-32 bg-[#080706]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-[1px] w-8 bg-[#c8a97e]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
            MUSIC
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal mb-16 tracking-tight">
          Recordings
        </h2>

        {/* Featured Album Showcase Card */}
        <div className="rounded-3xl bg-[#0e0d0b] border border-[#c8a97e]/20 p-6 sm:p-10 lg:p-12 shadow-piano-depth relative overflow-hidden mb-12">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8a97e]/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Album Cover Art */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-[#c8a97e]/30 shadow-2xl">
                <img
                  src={album.cover}
                  alt={album.coverAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vinyl Record Peeking Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-70 pointer-events-none" />
              </div>

              {/* Disc Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-[#151310] border border-[#c8a97e]/30 rounded-full p-3 shadow-xl flex items-center space-x-2">
                <Disc3 className={`w-5 h-5 text-[#c8a97e] ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                <span className="text-[10px] font-cinzel tracking-widest text-[#dfc299] uppercase font-semibold pr-1">
                  180g Vinyl &amp; Digital
                </span>
              </div>
            </div>

            {/* Album Details & Interactive Player */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#c8a97e] font-semibold">
                  {album.badge}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal leading-tight mb-4">
                {album.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/85 font-light leading-relaxed mb-6">
                {album.description}
              </p>

              {/* Arranger Credits */}
              <p className="font-sans text-xs text-[#8f8a80] tracking-wide mb-8 border-b border-white/5 pb-4">
                {album.credits}
              </p>

              {/* Working Audio Player Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#151310]/90 border border-[#c8a97e]/25 shadow-lg mb-8">
                
                <div className="flex items-center space-x-4 mb-3">
                  <button
                    onClick={onTogglePlay}
                    className="w-12 h-12 rounded-full bg-[#c8a97e] text-[#080706] flex items-center justify-center shadow-gold-glow hover:scale-105 active:scale-95 transition-all focus:outline-none flex-shrink-0"
                    title={isPlaying ? "Pause Preview" : "Play Preview"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm sm:text-base text-[#f5f2eb] truncate font-medium">
                      Le Rêve – The Dream (preview)
                    </p>
                    <p className="font-sans text-xs text-[#8f8a80] tracking-wider truncate">
                      Christie Kanska · Studio Master Track
                    </p>
                  </div>

                  {/* Dancing EQ Bars */}
                  {isPlaying && (
                    <div className="hidden sm:flex items-end space-x-1 h-5 px-2">
                      <span className="soundwave-bar" />
                      <span className="soundwave-bar" />
                      <span className="soundwave-bar" />
                      <span className="soundwave-bar" />
                    </div>
                  )}
                </div>

                {/* Scrubber Timeline */}
                <div className="space-y-1.5">
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const percent = clickX / rect.width;
                      onSeek(percent);
                    }}
                    className="h-1.5 bg-[#25221d] rounded-full overflow-hidden cursor-pointer relative group"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-[#8c714e] via-[#c8a97e] to-[#dfc299] relative"
                      style={{ width: `${progressPercent}%` }}
                    >
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#f5f2eb] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] font-sans tracking-widest text-[#8f8a80]">
                    <span>{formatTime(currentTime)}</span>
                    <span>{duration > 0 ? formatTime(duration) : '1:07'}</span>
                  </div>
                </div>

              </div>

              {/* Streaming Links & Tracklist Trigger */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                {/* Streaming Badges */}
                <div className="flex items-center space-x-3 sm:space-x-5">
                  {album.streamingLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans tracking-[0.2em] font-semibold text-[#8f8a80] hover:text-[#dfc299] transition-colors flex items-center space-x-1 uppercase"
                    >
                      <span>{s.name}</span>
                      <ExternalLink className="w-3 h-3 text-[#c8a97e]" />
                    </a>
                  ))}
                </div>

                {/* Tracklist Toggle Button */}
                <button
                  onClick={() => setShowTracklist(!showTracklist)}
                  className="inline-flex items-center space-x-1.5 text-xs font-sans tracking-[0.16em] uppercase text-[#c8a97e] hover:text-[#dfc299] transition-colors"
                >
                  <ListMusic className="w-4 h-4" />
                  <span>{showTracklist ? 'Hide Tracklist' : 'View Tracklist (8)'}</span>
                  {showTracklist ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

              </div>

              {/* Expandable Tracklist */}
              {showTracklist && (
                <div className="mt-6 pt-6 border-t border-[#c8a97e]/15 grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-300">
                  {album.tracks.map((t) => (
                    <div
                      key={t.num}
                      className="p-2.5 rounded-lg bg-[#151310]/50 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-3 truncate">
                        <span className="font-cinzel text-[11px] text-[#c8a97e]">{t.num}</span>
                        <span className="font-serif text-[#f5f2eb] truncate">{t.name}</span>
                      </div>
                      <span className="text-[#8f8a80] font-sans text-[11px] ml-2">{t.duration}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Next Release Banner */}
        <div className="rounded-2xl bg-[#0e0d0b] border border-[#c8a97e]/20 p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Title & Status */}
            <div className="md:col-span-4">
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#c8a97e] font-semibold block mb-1">
                {album.nextRelease.kicker}
              </span>
              <div className="flex items-center space-x-3">
                <h4 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] font-normal">
                  {album.nextRelease.title}
                </h4>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-sans tracking-widest uppercase bg-[#c8a97e]/15 text-[#dfc299] border border-[#c8a97e]/30">
                  ● {album.nextRelease.status}
                </span>
              </div>
              <div className="flex items-center space-x-4 mt-3 text-[11px] font-sans tracking-[0.16em] uppercase text-[#8f8a80]">
                {album.nextRelease.links.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-[#dfc299] transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Copy */}
            <div className="md:col-span-5">
              <p className="font-sans text-xs sm:text-sm text-[#d6d1c7]/80 leading-relaxed font-light">
                {album.nextRelease.note}
              </p>
            </div>

            {/* Right Action CTA */}
            <div className="md:col-span-3 flex md:justify-end">
              <button
                onClick={onOpenNewsletter}
                className="w-full md:w-auto px-6 py-3 rounded-full border border-[#c8a97e]/60 bg-transparent text-[#f5f2eb] hover:bg-[#c8a97e] hover:text-[#080706] text-xs font-sans tracking-[0.2em] font-semibold uppercase transition-all duration-300"
              >
                BE FIRST TO HEAR IT
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
