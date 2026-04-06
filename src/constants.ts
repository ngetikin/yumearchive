export const ASSETS = {
  logo: "/icon-logo-yumearchive.png",
  illustration: "/art.png",
  artists: [
    { name: "@ghamahp246", avatar: "/avatar-ghamahp246.png", role: "Artist" },
    { name: "@hurappi", avatar: "/avatar-hurappi.png", role: "Artist" },
    { name: "@jukutpremium", avatar: "/avatar-jukutpremium.png", role: "Artist" },
    { name: "@kazamizaqi", avatar: "/avatar-kazamizaqi.png", role: "Artist" },
    { name: "@luvviematchaw", avatar: "/avatar-luvviematchaw.png", role: "Artist" },
    { name: "@nanaelll", avatar: "/avatar-nanaelll.png", role: "Artist" },
    { name: "@osiic", avatar: "/avatar-osiic.png", role: "Artist" },
    { name: "@werksasura_ahiru580", avatar: "/avatar-werksasura_ahiru580.png", role: "Artist" },
    { name: "@yoruu2109", avatar: "/avatar-yoruu2109.png", role: "Artist" }
  ],
  gallery: Array.from({ length: 24 }, (_, i) => ({
    src: `/gallery-${i + 1}.jpg`,
    alt: `Yume Archive gallery artwork ${i + 1}`
  }))
};

export const PRICING = [
  { type: "Headshot", robux: "1.5K R", usd: "$15", idr: "45K", popular: false },
  { type: "Bust-up", robux: "2K R", usd: "$25", idr: "55K", popular: false },
  { type: "Half Body", robux: "3K R", usd: "$30", idr: "60K", popular: true },
  { type: "Full Body", robux: "4.5K R", usd: "$45", idr: "80K", popular: false },
  { type: "Chibi Full Body", robux: "500 R", usd: "$5", idr: "30K", popular: false }
];
