import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Music2 } from 'lucide-react';
import { siteData } from '../data/content';

export default function ContactSection() {
  const { meta } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#080706]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-[#c8a97e]" />
            <Music2 className="w-4 h-4 text-[#c8a97e]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
              GET IN TOUCH
            </span>
            <span className="h-[1px] w-8 bg-[#c8a97e]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal leading-[1.15] mb-6">
            Performances, lessons,<br />
            <span className="italic text-[#dfc299]">production or just hello</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/80 font-light leading-relaxed">
            Whether inquiring about concert bookings, private masterclasses, choir workshops, or recording collaborations — we welcome your message.
          </p>
        </div>

        {/* Contact Grid: Direct Info Card & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Direct Details Card */}
          <div className="lg:col-span-4 rounded-3xl bg-[#0e0d0b] border border-[#c8a97e]/20 p-8 flex flex-col justify-between shadow-piano-depth">
            <div>
              <div className="mb-8">
                <span className="font-script text-4xl text-[#dfc299]">Christie</span>
                <span className="font-cinzel text-[10px] tracking-[0.35em] text-[#c8a97e] block uppercase font-semibold">
                  ATELIER &amp; STUDIO
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-4 h-4 text-[#c8a97e] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-sans tracking-widest text-[#8f8a80] uppercase block">Email Inquiries</span>
                    <a href={`mailto:${meta.email}`} className="text-xs sm:text-sm text-[#f5f2eb] hover:text-[#dfc299] transition-colors break-all">
                      {meta.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-4 h-4 text-[#c8a97e] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-sans tracking-widest text-[#8f8a80] uppercase block">Telephone / Studio</span>
                    <a href={`tel:${meta.phone.replace(/[^0-9+]/g, '')}`} className="text-xs sm:text-sm text-[#f5f2eb] hover:text-[#dfc299] transition-colors">
                      {meta.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-4 h-4 text-[#c8a97e] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-sans tracking-widest text-[#8f8a80] uppercase block">Location</span>
                    <span className="text-xs sm:text-sm text-[#f5f2eb]">
                      {meta.location} · ZCK Studios
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-[10px] font-sans tracking-widest text-[#8f8a80] uppercase block mb-1">
                Response Time
              </span>
              <p className="text-xs text-[#d6d1c7]/75 font-light">
                Direct studio responses within 24–48 business hours.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-8 rounded-3xl bg-[#0e0d0b] border border-[#c8a97e]/20 p-8 sm:p-10 shadow-piano-depth">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c8a97e]/15 border border-[#c8a97e] flex items-center justify-center text-[#dfc299] shadow-gold-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] font-normal">
                  Thank You for Your Message
                </h3>
                <p className="font-sans text-sm text-[#d6d1c7]/80 max-w-md">
                  Your inquiry has been received. Christie and the studio team will review your message and reply promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', reason: 'General Inquiry', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#c8a97e]/40 text-xs font-sans tracking-wider uppercase text-[#dfc299] hover:bg-[#c8a97e] hover:text-[#080706] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans tracking-widest uppercase text-[#8f8a80] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-[#f5f2eb] text-sm focus:outline-none focus:border-[#c8a97e] transition-colors placeholder:text-[#8f8a80]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans tracking-widest uppercase text-[#8f8a80] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-[#f5f2eb] text-sm focus:outline-none focus:border-[#c8a97e] transition-colors placeholder:text-[#8f8a80]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans tracking-widest uppercase text-[#8f8a80] mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-[#f5f2eb] text-sm focus:outline-none focus:border-[#c8a97e] transition-colors placeholder:text-[#8f8a80]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans tracking-widest uppercase text-[#8f8a80] mb-2">
                      Reason for Inquiry
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-[#f5f2eb] text-sm focus:outline-none focus:border-[#c8a97e] transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Concert & Performance Booking">Concert &amp; Performance Booking</option>
                      <option value="Private Voice or Piano Lessons">Private Voice or Piano Lessons</option>
                      <option value="Recording & Arrangement (ZCK Studio)">Recording &amp; Arrangement (ZCK Studio)</option>
                      <option value="Song Bird Children's Project">Song Bird Children's Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans tracking-widest uppercase text-[#8f8a80] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, project, or learning goals..."
                    className="w-full px-4 py-3 rounded-xl bg-[#151310] border border-[#c8a97e]/20 text-[#f5f2eb] text-sm focus:outline-none focus:border-[#c8a97e] transition-colors placeholder:text-[#8f8a80]/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#c8a97e] via-[#dfc299] to-[#c8a97e] text-[#080706] font-sans text-xs tracking-[0.24em] font-semibold uppercase shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'SENDING...' : 'SEND A MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
