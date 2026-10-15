import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredentialsRibbon from './components/CredentialsRibbon';
import Biography from './components/Biography';
import Chapters from './components/Chapters';
import Recordings from './components/Recordings';
import MomentsGallery from './components/MomentsGallery';
import OnStageVideo from './components/OnStageVideo';
import EducationQuote from './components/EducationQuote';
import SongBird from './components/SongBird';
import Timeline from './components/Timeline';
import WhatsComing from './components/WhatsComing';
import ShopSection from './components/ShopSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AudioDock from './components/AudioDock';
import CartDrawer from './components/CartDrawer';
import LightboxModal from './components/LightboxModal';
import ContactModal from './components/ContactModal';
import { siteData } from './data/content';

export default function App() {
  // Audio Player State
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(67); // 1:07 preview default

  // Shopping Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: "le-reve-vinyl",
      name: "Le Rêve – The Dream (Limited Vinyl)",
      price: 35,
      quantity: 1,
      image: "/assets/images/le-reve-cover.jpg"
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedItemId, setAddedItemId] = useState(null);

  // Lightbox & Modal States
  const [lightboxItem, setLightboxItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("General Inquiry");
  const [modalTitle, setModalTitle] = useState("Direct Studio Inquiry");

  // Audio Handler
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback interrupted or needs user gesture:", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (percent) => {
    if (audioRef.current && duration > 0) {
      const newTime = percent * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Cart Handlers
  const handleAddToCart = (product) => {
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 1800);

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Modal Handlers
  const openCustomModal = (topic, title) => {
    setModalTopic(topic);
    setModalTitle(title);
    setModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#080706] text-[#e8e4dc] selection:bg-[#c8a97e] selection:text-[#080706] relative">
      
      {/* Hidden Master Audio Element */}
      <audio
        ref={audioRef}
        src={siteData.album.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        preload="metadata"
      />

      {/* Global Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onOpenContact={() => openCustomModal("General Inquiry", "Direct Studio Inquiry")}
      />

      {/* 1. Hero Section */}
      <Hero
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
      />

      {/* 2. Credentials Ribbon Bar */}
      <CredentialsRibbon />

      {/* 3. Biography Section */}
      <Biography
        onOpenContact={() => openCustomModal("General Inquiry", "Direct Studio Inquiry")}
      />

      {/* 4. The Work / Five Chapters */}
      <Chapters />

      {/* 5. Music / Recordings & Audio Player */}
      <Recordings
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
        onOpenNewsletter={() => openCustomModal("Next Single / Release Notifications", "Get Next Single Updates")}
      />

      {/* 6. In Performance / Moments Photo Gallery */}
      <MomentsGallery
        onOpenLightbox={(item) => setLightboxItem(item)}
      />

      {/* 7. On Stage Concert Video Section */}
      <OnStageVideo />

      {/* 8. Education Pull Quote Interlude */}
      <EducationQuote
        onOpenLessons={() => openCustomModal("Private Voice or Piano Lessons", "Book Lessons with Christie")}
      />

      {/* 9. Song Bird Interactive Showcase */}
      <SongBird
        onExploreSongbird={() => openCustomModal("Song Bird Children's Project", "Inquire About Song Bird")}
      />

      {/* 10. Horizontal Career Timeline */}
      <Timeline
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
      />

      {/* 11. What's Coming Upcoming Projects */}
      <WhatsComing
        onOpenUpdates={() => openCustomModal("Next Single / Release Notifications", "Get Programme Updates")}
      />

      {/* 12. Atelier & Editions Shop */}
      <ShopSection
        onAddToCart={handleAddToCart}
        addedItemId={addedItemId}
      />

      {/* 13. Get in Touch & Booking Section */}
      <ContactSection />

      {/* 14. Luxury Atelier Footer */}
      <Footer />

      {/* Floating Audio Dock */}
      <AudioDock
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Interactive Contact / Booking / Updates Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialReason={modalTopic}
        initialTitle={modalTitle}
      />

    </div>
  );
}
