<div align="center">
  <img src="https://github.com/ngetikin/yumearchive/blob/main/Yumearchive/image.png?raw=true" alt="Yume Archive Banner" width="100%" />
  <br /><br />
  <h1>Yume Archive</h1>
  <p><em>Your Dreams, Our Canvas.</em></p>
</div>

---

## 📖 Tentang Project

**Yume Archive** adalah website landing page untuk komunitas kreatif digital yang berdiri sejak 2021. Platform ini menjadi ruang bagi designer, digital artist, dan video editor (AMV/GMV) untuk berkumpul, menampilkan karya, dan berkolaborasi. Website ini menampilkan galeri karya, profil artist, informasi komisi, serta link ke komunitas Discord dan Instagram.

---

## ✨ Features

- 🎨 **Gallery Showcase** — Masonry grid untuk menampilkan 24+ karya seni komunitas
- 👥 **Artist Profiles** — Showcase avatar dan nama 9 artist aktif
- 💰 **Commission & Pricing** — Info harga komisi (Headshot, Bust-up, Half Body, Full Body, Chibi) dalam IDR, USD, dan Robux
- 📋 **Terms of Service** — Transparansi aturan komisi dan metode pembayaran
- 🌙 **Dark Theme UI** — Desain gelap dengan aksen pastel dan glassmorphism
- 🎬 **Smooth Animations** — Scroll-triggered animations menggunakan Framer Motion
- 📱 **Fully Responsive** — Optimal di desktop, tablet, dan mobile

---

## 🛠 Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (motion.dev) |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 🖼 Preview

![Preview](https://github.com/ngetikin/yumearchive/blob/main/Yumearchive/image.png?raw=true)

🔗 **Live:** [yumearchive.vercel.app](https://yumearchive.vercel.app)

---

## 🚀 Installation

### Prerequisites

- Node.js (v18+)
- npm

### Langkah-langkah

```bash
# Clone repository
git clone https://github.com/ngetikin/yumearchive.git
cd yumearchive

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Server akan berjalan di `http://localhost:3000`.

### Scripts Lainnya

| Command | Deskripsi |
|---------|-----------|
| `npm run build` | Build untuk production |
| `npm run preview` | Preview production build |
| `npm run lint` | Type-check dengan TypeScript |
| `npm run clean` | Hapus folder `dist/` |

---

## 📁 Folder Structure

```
yumearchive/
├── public/                  # Static assets
│   ├── art.png              # Hero illustration
│   ├── avatar-*.png         # Artist avatars (9 files)
│   ├── gallery-*.jpg        # Gallery artworks (24 files)
│   ├── icon-logo-yumearchive.png
│   ├── icon-rounded.png     # Favicon
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx              # Main component (landing page)
│   ├── constants.ts         # Asset URLs & pricing data
│   ├── index.css            # Global styles & custom utilities
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
├── .env.example             # Environment variable template
└── README.md                # Project documentation
```

---

## 🤝 Contributing

Kontribusi sangat terbuka! Jika ingin membantu:

1. **Fork** repository ini
2. Buat branch baru: `git checkout -b feature/nama-fitur`
3. Commit perubahan: `git commit -m "feat: tambah fitur X"`
4. Push ke branch: `git push origin feature/nama-fitur`
5. Buka **Pull Request**

Pastikan code sudah di-type-check dengan `npm run lint` sebelum submit PR.

---

## 🗺 Roadmap

- [ ] Halaman detail per artist dengan portfolio lengkap
- [ ] Sistem booking komisi langsung via website
- [ ] Blog / resource sharing section
- [ ] Multi-language support (EN/ID)
- [ ] Dark/light mode toggle

---

## 👥 Team

| Role | Username |
|------|----------|
| Developer | [@osiic](https://github.com/osiic) |
| Community Lead | [@ngetikin](https://github.com/ngetikin) |

**Artists:** @ghamahp246, @hurappi, @jukutpremium, @kazamizaqi, @luvviematchaw, @nanaelll, @werksasura_ahiru580, @yoruu2109

---

## 📬 Contact & Community

- 💬 **Discord:** [Join Server](https://discord.gg/qHh7PpwW76)
- 📸 **Instagram:** [@yumearchive](https://www.instagram.com/yumearchive/)

---

<div align="center">
  <sub>© 2026 Yume Archive. Built with ✨ by the community.</sub>
</div>
