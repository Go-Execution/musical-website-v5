import React, { useState } from 'react';
import { Play, Sparkles, ExternalLink } from 'lucide-react';
import { siteData } from '../data/content';

export default function OnStageVideo() {
  const { video } = siteData;
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="on-stage" className="relative py-24 sm:py-32 bg-[#080706]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-[#c8a97e]/15">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                {video.kicker}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              {video.title}
            </h2>
          </div>

          <a
            href="https://www.youtube.com/@Christie119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-sans tracking-[0.2em] uppercase text-[#c8a97e] hover:text-[#dfc299] transition-colors"
          >
            <span>{video.sub}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Stage Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0e0d0b] border border-[#c8a97e]/30 shadow-piano-depth aspect-video max-w-5xl mx-auto group">
          {isPlayingVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={video.titleVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <>
              {/* Poster Image */}
              <img
                src={video.poster}
                alt={video.titleVideo}
                className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] group-hover:scale-102 transition-transform duration-700"
              />

              {/* Theater Ambient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-[#080706]/30 to-black/40" />

              {/* Center Play Button with Pulsing Gold Rings */}
              <button
                onClick={() => setIsPlayingVideo(true)}
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c8a97e]/90 text-[#080706] flex items-center justify-center shadow-gold-glow hover:bg-[#dfc299] hover:scale-110 active:scale-95 transition-all duration-300 z-10 group/btn focus:outline-none"
                aria-label="Play concert video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </button>

              {/* Video Info Watermark Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90">
                <div>
                  <h4 className="font-serif text-lg sm:text-2xl text-[#f5f2eb] drop-shadow-md">
                    {video.titleVideo}
                  </h4>
                  <p className="font-sans text-xs tracking-wider text-[#dfc299] mt-0.5">
                    {video.channel}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#c8a97e]/30 text-[11px] font-sans tracking-widest text-[#d6d1c7] uppercase">
                  <Sparkles className="w-3 h-3 text-[#c8a97e]" />
                  <span>Concert Recording</span>
                </span>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
