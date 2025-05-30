// Sample data for featured artists
export const featuredArtists = [
    {
        id: 1,
        name: "Neon Dreams",
        image: "/retro-profile.png",
        category: "Trending Creators",
    },
    {
        id: 2,
        name: "Cyber Pulse",
        image: "/cyberpunk-profile.png",
        category: "Trending Creators",
    },
    {
        id: 3,
        name: "Synth Wave",
        image: "/futuristic-profile.png",
        category: "Trending Creators",
    },
    {
        id: 4,
        name: "Lo-Fi Dreams",
        image: "/synthwave-album-cover-1.jpg",
        category: "Curated Themes",
    },
    {
        id: 5,
        name: "Soul Revival",
        image: "/synthwave-album-cover-3.jpg",
        category: "Curated Themes",
    },
    {
        id: 6,
        name: "Staff Pick",
        image: "/abstract-album-art.png",
        category: "Staff Picks",
    },
    {
        id: 7,
        name: "Fresh Upload",
        image: "/colorful-album-art.png",
        category: "New Uploads This Week",
    },
    {
        id: 8,
        name: "Midnight Vibes",
        image: "/dark-moody-album-art.png",
        category: "Staff Picks",
    },
]

// Sample data for riffs
export const riffs = [
    {
        id: 1,
        title: "Neon Sunset",
        artist: "Cyber Dreams",
        artistId: 1,
        genre: "Synth",
        mood: "Chill",
        instrument: "Synthesizer",
        price: 25,
        currency: "RIFF",
        image: "/synthwave-album-cover-1.jpg",
        stakable: true,
        backstage: true,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-05-15T12:00:00Z",
        tips: 42,
        description:
            "A dreamy synth riff perfect for late-night drives along neon-lit streets. Inspired by 80s retrofuturism and modern electronic music.",
    },
    {
        id: 2,
        title: "Midnight Drive",
        artist: "Retrowave",
        artistId: 2,
        genre: "Synth",
        mood: "Energetic",
        instrument: "Synthesizer",
        price: 30,
        currency: "RIFF",
        image: "/synthwave-album-cover-3.jpg",
        stakable: true,
        backstage: false,
        unlockable: true,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-06-20T12:00:00Z",
        tips: 35,
        description:
            "High-energy synth riff with pulsing arpeggios and a driving beat. Perfect for adding retro vibes to modern productions.",
    },
    {
        id: 3,
        title: "Soul Groove",
        artist: "Funk Master",
        artistId: 3,
        genre: "Soul",
        mood: "Groovy",
        instrument: "Bass",
        price: 20,
        currency: "MATIC",
        image: "/soul-funk-album-art.png",
        stakable: false,
        backstage: true,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-04-10T12:00:00Z",
        tips: 28,
        description:
            "A funky bass line that captures the essence of 70s soul. Recorded with vintage equipment for authentic warmth and character.",
    },
    {
        id: 4,
        title: "Dreamy Loops",
        artist: "Lo-Fi King",
        artistId: 4,
        genre: "Lo-Fi",
        mood: "Chill",
        instrument: "Piano",
        price: 15,
        currency: "RIFF",
        image: "/lofi-chill-album-art.png",
        stakable: true,
        backstage: false,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-07-05T12:00:00Z",
        tips: 50,
        description:
            "Mellow piano loops with subtle vinyl crackle and warm tape saturation. Perfect for lo-fi hip hop beats and study playlists.",
    },
    {
        id: 5,
        title: "Bass Drop",
        artist: "EDM Wizard",
        artistId: 5,
        genre: "EDM",
        mood: "Energetic",
        instrument: "Synthesizer",
        price: 35,
        currency: "MATIC",
        image: "/edm-album-art.png",
        stakable: true,
        backstage: true,
        unlockable: true,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-08-12T12:00:00Z",
        tips: 38,
        description:
            "Massive bass drop with cutting-edge sound design. Ready to drop into your next EDM track and blow the roof off.",
    },
    {
        id: 6,
        title: "Guitar Riff 101",
        artist: "Rock Legend",
        artistId: 6,
        genre: "Rock",
        mood: "Intense",
        instrument: "Guitar",
        price: 40,
        currency: "RIFF",
        image: "/rock-guitar-album-art.png",
        stakable: false,
        backstage: false,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-03-25T12:00:00Z",
        tips: 45,
        description:
            "Classic rock guitar riff with distortion and attitude. Recorded through a vintage tube amp for that authentic rock sound.",
    },
    {
        id: 7,
        title: "Jazz Improv",
        artist: "Smooth Sax",
        artistId: 7,
        genre: "Jazz",
        mood: "Relaxed",
        instrument: "Saxophone",
        price: 28,
        currency: "MATIC",
        image: "/jazz-saxophone-album-art.png",
        stakable: true,
        backstage: false,
        unlockable: true,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-09-01T12:00:00Z",
        tips: 32,
        description:
            "Smooth saxophone improvisation over jazz chord changes. Recorded in a single take with minimal processing for natural dynamics.",
    },
    {
        id: 8,
        title: "Hip Hop Beat",
        artist: "Beat Maker",
        artistId: 8,
        genre: "Hip Hop",
        mood: "Confident",
        instrument: "Drums",
        price: 32,
        currency: "RIFF",
        image: "/hip-hop-beat-album-art.png",
        stakable: true,
        backstage: true,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-07-18T12:00:00Z",
        tips: 60,
        description:
            "Hard-hitting drum beat with booming 808s and crisp hi-hats. Ready to be the foundation of your next hip hop track.",
    },
]

// Sample data for bargain bin riffs
export const bargainRiffs = [
    {
        id: 9,
        title: "Hidden Gem",
        artist: "Unknown Artist",
        artistId: 9,
        genre: "Experimental",
        mood: "Mysterious",
        instrument: "Synthesizer",
        price: 5,
        currency: "RIFF",
        image: "/experimental-indie-album-art.png",
        stakable: true,
        backstage: false,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-02-10T12:00:00Z",
        tips: 12,
        description:
            "Experimental sound design with unconventional textures and rhythms. A true hidden gem waiting to be discovered.",
    },
    {
        id: 10,
        title: "First Demo",
        artist: "Rising Star",
        artistId: 10,
        genre: "Indie",
        mood: "Hopeful",
        instrument: "Guitar",
        price: 8,
        currency: "RIFF",
        image: "/indie-demo-album-art.png",
        stakable: true,
        backstage: false,
        unlockable: true,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-01-05T12:00:00Z",
        tips: 18,
        description:
            "The first demo from an up-and-coming artist. Raw, authentic, and full of potential. Get in early on this rising talent.",
    },
    {
        id: 11,
        title: "Garage Session",
        artist: "Punk Rockers",
        artistId: 11,
        genre: "Punk",
        mood: "Angry",
        instrument: "Guitar",
        price: 7,
        currency: "MATIC",
        image: "/placeholder.svg?height=300&width=300&query=punk%20garage%20album%20art",
        stakable: true,
        backstage: false,
        unlockable: false,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-03-15T12:00:00Z",
        tips: 15,
        description:
            "Raw, energetic punk riff recorded in a garage with minimal equipment. Captures the DIY spirit of punk rock.",
    },
    {
        id: 12,
        title: "Bedroom Pop",
        artist: "Indie Voice",
        artistId: 12,
        genre: "Pop",
        mood: "Melancholic",
        instrument: "Synthesizer",
        price: 6,
        currency: "RIFF",
        image: "/placeholder.svg?height=300&width=300&query=bedroom%20pop%20album%20art",
        stakable: true,
        backstage: false,
        unlockable: true,
        audio: "/placeholder-audio.mp3",
        createdAt: "2023-05-20T12:00:00Z",
        tips: 22,
        description:
            "Dreamy bedroom pop synth line with lo-fi aesthetics. Created with minimal equipment but maximum creativity.",
    },
]

// Genre categories for floor bins
export const genres = [
    "Synth",
    "Soul",
    "Lo-Fi",
    "EDM",
    "Rock",
    "Jazz",
    "Hip Hop",
    "Punk",
    "Pop",
    "Indie",
    "Experimental",
    "Funk",
]

// Mood categories
export const moods = [
    "Chill",
    "Energetic",
    "Groovy",
    "Intense",
    "Relaxed",
    "Confident",
    "Mysterious",
    "Hopeful",
    "Angry",
    "Melancholic",
]

// Instrument categories
export const instruments = ["Synthesizer", "Guitar", "Bass", "Drums", "Piano", "Saxophone", "Violin", "Trumpet"]
