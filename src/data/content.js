export const siteData = {
  meta: {
    name: "Christie Kanska",
    roles: ["VOCALIST", "PIANIST", "COMPOSER", "MUSIC EDUCATOR"],
    tagline: "Music that opens the heart and teaches it to sing",
    email: "zckmusicproduction1@gmail.com",
    phone: "+1 (774) 239-1173",
    location: "New York, NY",
    bioLead: "A life in music, from Yerevan to Carnegie Hall",
    bioParagraph1: "Christie Kanska’s work as vocalist, pianist, composer and educator is carried by honesty and artistic mastery — and a love for people, nature and life that runs through her original music and poetic lyrics.",
    bioParagraph2: "Born in Yerevan, Armenia, she began the piano at seven, taught voice in Thessaloniki and graduated from Berklee College of Music on scholarship. She has sung at Carnegie Hall, toured her album “Le Rêve – The Dream” across India, and is a Recording Academy member, GRAMMY U Mentor, Steinway & Sons educator and RCM certified teacher.",
    bioParagraph3: "She is the founder of ZCK Music Academy & Recording Studios and the creator of Song Bird."
  },

  credentials: [
    { title: "Berklee College of Music", role: "Graduate", detail: "Scholarship recipient" },
    { title: "Recording Academy", role: "Member · GRAMMY U Mentor", detail: "Voting member" },
    { title: "Carnegie Hall", role: "Performer · NYC Educators", detail: "Concert soloist" },
    { title: "RCM", role: "Certified educator", detail: "Royal Conservatory Gold Medal" },
    { title: "Steinway & Sons", role: "Official educator", detail: "Steinway Educational Partner" }
  ],

  chapters: [
    {
      id: "music",
      number: "01",
      title: "Music",
      desc: "Recordings, original songs and Latin jazz",
      target: "#recordings",
      image: "/assets/images/le-reve-cover.jpg",
      subtitle: "Le Rêve — The Dream (2019)",
      tags: ["Latin Jazz", "Bossa Nova", "Fusion", "Original Compositions"]
    },
    {
      id: "performance",
      number: "02",
      title: "Performance",
      desc: "Carnegie Hall, international tours and live concerts",
      target: "#on-stage",
      image: "/assets/images/christie-live.jpg",
      subtitle: "Carnegie Hall & International Tours",
      tags: ["Solo Vocal", "Concert Piano", "Jazz Ensembles", "Touring"]
    },
    {
      id: "education",
      number: "03",
      title: "Education",
      desc: "Piano, voice, choir and children's music",
      target: "#education",
      image: "/assets/images/christie-kanska-teaching-1.webp",
      subtitle: "Steinway Piano & Voice Masterclasses",
      tags: ["RCM Curriculum", "Steinway Studio", "Children's Choirs", "Masterclasses"]
    },
    {
      id: "songbird",
      number: "04",
      title: "Song Bird",
      desc: "Mindfulness, kindness, imagination and nature",
      target: "#songbird",
      image: "/assets/images/christie-kanska-children-choir.webp",
      subtitle: "Original Children's Story & Suite",
      tags: ["Children's Story", "Original Songs", "Mindfulness", "Interactive"]
    },
    {
      id: "studio",
      number: "05",
      title: "ZCK Studio",
      desc: "Recording, production and arrangement",
      target: "#contact",
      image: "/assets/images/christie-kanska-gallery-3.webp",
      subtitle: "ZCK Recording Studios New York",
      tags: ["Sound Engineering", "Arrangements", "Voice Tracking", "Production"]
    }
  ],

  album: {
    id: "le-reve",
    badge: "LATEST ALBUM · 2019",
    title: "Le Rêve — The Dream",
    cover: "/assets/images/le-reve-cover.jpg",
    coverAlt: "Le Rêve – The Dream album cover",
    description: "Latin jazz mixed with fusion: Christie’s original instrumental “Le Rêve” and bossa nova standards including Bananeira, Dindi, Triste, Fotografia, No More Blues, One Note Samba and The Girl From Ipanema. Arranged by Zdenek Kansky & Christie.",
    credits: "Christie Kanska (vocals, keys) · Zdenek Kansky (electric & acoustic guitars, bass, arrangement).",
    audioSrc: "/assets/audio/le-reve-the-dream-2019.mp3",
    streamingLinks: [
      { name: "Spotify", url: "https://open.spotify.com/album/7odkqThKgoum5Uo6Jk0R0F" },
      { name: "Apple Music", url: "https://music.apple.com/us/artist/christie-kanska/1451556186" },
      { name: "Amazon Music", url: "https://www.amazon.com/dp/B07N8MV5QW" }
    ],
    tracks: [
      { num: "01", name: "Le Rêve (The Dream)", duration: "4:32", original: true },
      { num: "02", name: "Bananeira", duration: "3:48", original: false },
      { num: "03", name: "Dindi", duration: "4:15", original: false },
      { num: "04", name: "Triste", duration: "3:52", original: false },
      { num: "05", name: "Fotografia", duration: "4:06", original: false },
      { num: "06", name: "No More Blues", duration: "3:30", original: false },
      { num: "07", name: "One Note Samba", duration: "3:18", original: false },
      { num: "08", name: "The Girl From Ipanema", duration: "4:22", original: false }
    ],
    nextRelease: {
      kicker: "NEXT RELEASE",
      title: "A new single",
      status: "COMING SOON",
      note: "A new single from Christie is on the way. Join the list to hear it first and be told the moment it's out.",
      links: [
        { label: "FULL DISCOGRAPHY", href: "#recordings" },
        { label: "VIDEOS", href: "#on-stage" },
        { label: "BUY MUSIC", href: "#shop" }
      ]
    }
  },

  moments: [
    {
      id: 1,
      title: "Live Vocal Concert",
      category: "Performance",
      location: "New York Stage",
      src: "/assets/images/christie-live.jpg",
      aspect: "tall"
    },
    {
      id: 2,
      title: "The Jazz Quartet",
      category: "Performance",
      location: "Live at the Bakery",
      src: "/assets/images/christie-kanska-gallery-1.webp",
      aspect: "wide"
    },
    {
      id: 3,
      title: "Acoustic Solo & Bass",
      category: "Live",
      location: "Carnegie Hall Series",
      src: "/assets/images/banner_shows.jpg",
      aspect: "wide"
    },
    {
      id: 4,
      title: "Studio Vocal Tracking",
      category: "Studio",
      location: "ZCK Studios New York",
      src: "/assets/images/christie-kanska-gallery-3.webp",
      aspect: "tall"
    },
    {
      id: 5,
      title: "Children's Choir Direction",
      category: "Education",
      location: "Brooklyn Children's Academy",
      src: "/assets/images/christie-kanska-children-choir.webp",
      aspect: "wide"
    },
    {
      id: 6,
      title: "Steinway Piano Masterclass",
      category: "Piano",
      location: "Private Studio Atelier",
      src: "/assets/images/christie-kanska-teaching-1.webp",
      aspect: "wide"
    }
  ],

  video: {
    kicker: "PERFORMANCE",
    title: "On stage",
    sub: "PERFORMANCES",
    videoId: "lsQk0nE9K3E",
    titleVideo: "Christie's Music Life — Live Showcase",
    channel: "ZCK Music Academy & Recording Studios",
    poster: "/assets/images/performance-video.jpg"
  },

  quote: {
    kicker: "EDUCATION",
    text: "Music is one of those vocations that gets into your blood and keeps you dreaming throughout your life.",
    subtext: "Piano, voice, choir and children’s music, following the Royal Conservatory curriculum — for students of every age, in person and online.",
    action: "LESSONS WITH CHRISTIE"
  },

  songbird: {
    kicker: "CREATED BY CHRISTIE KANSKA",
    title: "Song Bird",
    tagline: "A musical journey of mindfulness, kindness, imagination and connection with nature.",
    description: "An inspiring multimedia story and musical experience crafted by Christie Kanska to awaken emotional intelligence, gentle awareness, and pure vocal expression in young hearts.",
    pillars: [
      { id: "mindfulness", title: "Mindfulness", desc: "Listening closely and being present through music." },
      { id: "kindness", title: "Kindness", desc: "Songs that open the heart toward others." },
      { id: "imagination", title: "Imagination", desc: "Music as a doorway to wonder and creativity." },
      { id: "nature", title: "Connection with nature", desc: "Finding music in the living world around us." }
    ],
    action: "EXPLORE SONG BIRD"
  },

  timeline: [
    {
      year: "Yerevan",
      period: "BEGINNINGS",
      title: "Armenia",
      text: "Born in Yerevan, Armenia. Begins piano at seven and sings with the National Chorus."
    },
    {
      year: "1995",
      period: "GREECE",
      title: "Conservatory Faculty",
      text: "Vocal faculty at the New Odeon of Thessaloniki and the Filippos Nakas Odeon Conservatory."
    },
    {
      year: "1997",
      period: "THE STAGE",
      title: "European Capital of Culture",
      text: "Lead singer of her jazz band at festivals in Thessaloniki, European Capital of Culture."
    },
    {
      year: "2004",
      period: "BERKLEE",
      title: "Berklee College of Music",
      text: "Bachelor of Music in Professional Music, Berklee College of Music, on scholarship."
    },
    {
      year: "2010",
      period: "NEW YORK",
      title: "ZCK Studios",
      text: "Founds ZCK Music Academy & Recording Studios in New York for voice and piano excellence."
    },
    {
      year: "2019",
      period: "LE RÊVE",
      title: "Studio Album & Tour",
      text: "Releases “Le Rêve – The Dream” and tours its Latin jazz fusion across major Indian stages."
    },
    {
      year: "2020",
      period: "RECOGNITION",
      title: "Academy & Steinway",
      text: "Becomes Recording Academy member and Steinway & Sons official educator. Writes “Stay Home.”"
    },
    {
      year: "2023",
      period: "GRAMMY U",
      title: "GRAMMY U Mentor",
      text: "Appointed as official Recording Academy GRAMMY U Mentor, guiding the next generation of musical artists."
    }
  ],

  whatsComing: [
    {
      title: "New single",
      status: "COMING SOON",
      statusColor: "gold",
      note: "Title and release date to be announced shortly.",
      category: "Music"
    },
    {
      title: "Children’s book",
      status: "COMING SOON",
      statusColor: "gold",
      note: "An illustrated story being brought to life with original music.",
      category: "Publication"
    },
    {
      title: "Musical",
      status: "IN DEVELOPMENT",
      statusColor: "blue",
      note: "The children’s book, adapted for the musical theatre stage.",
      category: "Theater"
    },
    {
      title: "Children’s album",
      status: "IN PRODUCTION",
      statusColor: "amber",
      note: "Original songs sung by Christie’s Brooklyn children’s choir.",
      category: "Choir Album"
    }
  ],

  shop: [
    {
      id: "le-reve-vinyl",
      name: "Le Rêve – The Dream (Limited Vinyl)",
      price: 35,
      category: "Vinyl & CD",
      image: "/assets/images/le-reve-cover.jpg",
      description: "180g heavyweight audiophile vinyl with deluxe matte gatefold sleeve and liner notes."
    },
    {
      id: "le-reve-cd",
      name: "Le Rêve – The Dream (Digipak CD)",
      price: 18,
      category: "Vinyl & CD",
      image: "/assets/images/le-reve-cover.jpg",
      description: "Original CD release with full 12-page photography and lyrics booklet."
    },
    {
      id: "songbird-book",
      name: "Song Bird: The Illustrated Book & Music",
      price: 24,
      category: "Books",
      image: "/assets/images/christie-kanska-children-choir.webp",
      description: "Hardcover children’s musical storybook with companion audio listening codes."
    },
    {
      id: "private-lesson",
      name: "Private Voice or Piano Masterclass (60 min)",
      price: 130,
      category: "Education",
      image: "/assets/images/christie-kanska-teaching-1.webp",
      description: "One-on-one session with Christie Kanska in person (NYC) or globally via HD stream."
    }
  ],

  socials: [
    { name: "Spotify", href: "https://open.spotify.com/album/7odkqThKgoum5Uo6Jk0R0F" },
    { name: "Apple Music", href: "https://music.apple.com/us/artist/christie-kanska/1451556186" },
    { name: "Amazon Music", href: "https://www.amazon.com/dp/B07N8MV5QW" },
    { name: "YouTube", href: "https://www.youtube.com/@Christie119" },
    { name: "Instagram", href: "https://www.instagram.com/christiekanska/" },
    { name: "Facebook", href: "https://www.facebook.com/christie.kanska" },
    { name: "TikTok", href: "https://www.tiktok.com/@christiekanska" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/christie-kanska-221a6b2a/" },
    { name: "X / Twitter", href: "https://twitter.com/ChristieKanska" }
  ]
};
