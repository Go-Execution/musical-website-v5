import React, { useState } from 'react';
import { X, Send, CheckCircle2, Music } from 'lucide-react';
import { siteData } from '../data/content';

export default function ContactModal({ isOpen, onClose, initialReason = "General Inquiry", initialTitle = "Direct Studio Inquiry" }) {
  const { meta } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: initialReason,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#080706]/90 backdrop-blur-md transition-opacity cursor-pointer"
      />

      <div className="relative z-10 max-w-lg w-full bg-[#0e0d0b] border border-[#c8a97e]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#8f8a80] hover:text-[#f5f2eb] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#c8a97e]/15 border border-[#c8a97e] flex items-center justify-center text-[#dfc299] shadow-gold-glow">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-[#f5f2eb]">
              Message Received
            </h3>
            <p className="font-sans text-xs text-[#8f8a80] max-w-xs leading-relaxed">
              Christie and the studio team will be in touch with you shortly. Thank you!
            </p>
            <button
              onClick={handleClose}
              className="mt-2 px-6 py-2 rounded-full bg-[#c8a97e] text-[#080706] text-xs font-sans tracking-widest font-semibold uppercase"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6">
              <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-[#c8a97e] font-semibold block mb-1">
                CHRISTIE KANSKA ATELIER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] font-normal">
                {initialTitle}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-[#8f8a80] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-base sm:text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c8a97e] transition-colors placeholder:text-[#8f8a80]/50"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-[#8f8a80] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-base sm:text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c8a97e] transition-colors placeholder:text-[#8f8a80]/50"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-[#8f8a80] mb-1">
                  Topic / Inquiring About
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-base sm:text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c8a97e] transition-colors"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Private Voice or Piano Lessons">Private Voice or Piano Lessons</option>
                  <option value="Next Single / Release Notifications">Next Single / Release Notifications</option>
                  <option value="Performance Booking">Performance Booking</option>
                  <option value="Song Bird Children's Project">Song Bird Children's Project</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-[#8f8a80] mb-1">
                  Message or Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about what you're looking for..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-base sm:text-xs text-[#f5f2eb] focus:outline-none focus:border-[#c8a97e] transition-colors resize-none placeholder:text-[#8f8a80]/50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c8a97e] via-[#dfc299] to-[#c8a97e] text-[#080706] font-sans text-xs tracking-[0.2em] font-semibold uppercase shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{loading ? 'SENDING...' : 'SUBMIT INQUIRY'}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
