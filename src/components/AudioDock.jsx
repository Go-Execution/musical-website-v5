import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3, ChevronUp, ChevronDown, Music } from 'lucide-react';

export default function AudioDock({ isPlaying, onTogglePlay, currentTime, duration, onSeek }) {
  const [minimized, setMinimized] = useState(false);
  const [muted, setMuted] = useState(false);

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <aside
      aria-label="Floating audio player"
      className="fixed bottom-5 right-5 z-40 max-w-sm w-[calc(100vw-2.5rem)] sm:w-80 transition-all duration-300"
    >
      <div className="rounded-2xl bg-[#0e0d0b]/95 backdrop-blur-xl border border-[#c8a97e]/35 shadow-piano-depth p-3.5 text-[#f5f2eb]">
        
        {/* Main Dock Bar */}
        <div className="flex items-center justify-between space-x-3">
          
          {/* Vinyl & Play Toggle with Pop-Out Album Thumbnail on Hover */}
          <div className="flex items-center space-x-3 min-w-0 relative group/player">
            
            {/* Pop-Out Album Art Tooltip Card on Hover */}
            <div className="absolute -top-32 left-0 pointer-events-none opacity-0 group-hover/player:opacity-100 transform translate-y-2 group-hover/player:translate-y-0 scale-95 group-hover/player:scale-100 transition-all duration-300 z-50">
              <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-[#c8a97e] shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(200,169,126,0.3)] bg-[#151310] relative">
                <img
                  src="/assets/images/le-reve-cover.jpg"
                  alt="Le Rêve – The Dream"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="font-cinzel text-[8px] text-[#dfc299] font-bold tracking-widest uppercase">
                    Le Rêve (2019)
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full bg-[#c8a97e] text-[#080706] flex items-center justify-center flex-shrink-0 shadow-gold-glow-subtle hover:bg-[#dfc299] active:scale-95 transition-all focus:outline-none"
              title={isPlaying ? "Pause Preview" : "Play Preview"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <div className="min-w-0 cursor-pointer">
              <div className="flex items-center space-x-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-[#c8a97e]'}`} />
                <p className="font-serif text-xs text-[#f5f2eb] truncate font-medium group-hover/player:text-[#dfc299] transition-colors">
                  Le Rêve – The Dream
                </p>
              </div>
              <p className="font-sans text-[10px] text-[#8f8a80] truncate tracking-wider">
                Christie Kanska · Master
              </p>
            </div>
          </div>

          {/* Equalizer Bars & Toggle Button */}
          <div className="flex items-center space-x-2">
            {isPlaying && (
              <div className="flex items-end space-x-0.5 h-3.5 px-1">
                <span className="soundwave-bar" />
                <span className="soundwave-bar" />
                <span className="soundwave-bar" />
              </div>
            )}

            <button
              onClick={() => setMinimized(!minimized)}
              className="p-1 text-[#8f8a80] hover:text-[#dfc299] transition-colors focus:outline-none"
              title={minimized ? "Expand player" : "Minimize player"}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Expanded Progress Scrubber & Controls */}
        {!minimized && (
          <div className="mt-3 pt-2.5 border-t border-white/5 space-y-1.5">
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percent = clickX / rect.width;
                onSeek(percent);
              }}
              className="h-1 bg-[#25221d] rounded-full overflow-hidden cursor-pointer relative group"
            >
              <div
                className="h-full bg-gradient-to-r from-[#8c714e] to-[#c8a97e]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[9px] font-sans text-[#8f8a80] tracking-widest uppercase">
              <span>{formatTime(currentTime)}</span>
              <span className="text-[#c8a97e]">Studio Release</span>
              <span>{duration > 0 ? formatTime(duration) : '1:07'}</span>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
