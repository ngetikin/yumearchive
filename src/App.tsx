import React, { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  Moon, 
  Cloud, 
  Sparkles, 
  Palette, 
  Video, 
  Layout, 
  Users, 
  Share2, 
  Rocket, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  MessageCircle
} from "lucide-react";
import { ASSETS, PRICING } from "./constants";

const SectionTitle = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-primary-soft font-medium tracking-widest uppercase text-sm"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={ASSETS.logo} alt="Yume Archive" className="w-10 h-10 rounded-full dreamy-glow" referrerPolicy="no-referrer" />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Yume Archive</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary-soft transition-colors">About</a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary-soft transition-colors">Gallery</a>
          <a href="#commission" className="text-sm font-medium hover:text-primary-soft transition-colors">Commission</a>
          <a 
            href="https://discord.gg/qHh7PpwW76" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-bg px-5 py-2 rounded-full text-secondary-dark font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            Join Discord
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 text-primary-soft/10 pointer-events-none"
        >
          <Moon size={400} />
        </motion.div>
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 text-accent-blue/10 pointer-events-none"
        >
          <Cloud size={300} />
        </motion.div>

        <div className="max-w-5xl w-full py-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1.5  rounded-full border border-primary-soft/30 text-primary-soft text-xs font-bold uppercase tracking-widest glass">
              Est. 2021 • Creative Hub
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-extrabold mb-6 leading-tight"
          >
            Your Dreams, <br />
            <span className="gradient-text">Our Canvas.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Yume Archive adalah komunitas kreatif digital yang menjadi ruang bagi designer, artist, dan video editor untuk berkumpul, berkarya, dan berkembang bersama.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#gallery" 
              className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Explore Gallery <ArrowRight size={18} />
            </a>
            <a 
              href="https://discord.gg/qHh7PpwW76" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full gradient-bg text-secondary-dark font-bold dreamy-glow hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Join Community <Sparkles size={18} />
            </a>
          </motion.div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-secondary-soft/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="About Us">Where Dreams Are Archived</SectionTitle>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Sejak didirikan pada 2021, Yume Archive berfokus membangun ekosistem yang mendukung kreativitas—tempat di mana ide dapat dieksplorasi, karya dapat ditampilkan, dan kolaborasi dapat terjadi secara alami.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Yume Archive bukan hanya komunitas, tetapi juga sebuah creative hub yang menghubungkan individu dengan passion yang sama dalam dunia visual dan digital.
              </p>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl">
                  <h3 className="font-display font-bold text-2xl mb-2">Vision</h3>
                  <p className="text-sm text-gray-400">Membangun ekosistem kreatif yang kolaboratif dan menjadi ruang berkembang bagi talenta digital.</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <h3 className="font-display font-bold text-2xl mb-2">Mission</h3>
                  <p className="text-sm text-gray-400">Menyediakan platform untuk menampilkan karya kreatif dan mendorong kolaborasi lintas bidang.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-64 bg-primary-soft/20 rounded-2xl overflow-hidden">
                  <img src={ASSETS.gallery[0].src} alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 bg-accent-purple/20 rounded-2xl overflow-hidden">
                  <img src={ASSETS.gallery[1].src} alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-accent-blue/20 rounded-2xl overflow-hidden">
                  <img src={ASSETS.gallery[2].src} alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="h-64 bg-primary-pastel/20 rounded-2xl overflow-hidden">
                  <img src={ASSETS.gallery[3].src} alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Core Focus">Our Creative Realm</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Layout className="text-primary-soft" />, title: "Graphic Design", desc: "Identitas visual, layout, dan komunikasi visual yang memukau." },
              { icon: <Palette className="text-accent-purple" />, title: "Digital Art", desc: "Ilustrasi dan karya ekspresif dari tangan para artist berbakat." },
              { icon: <Video className="text-accent-blue" />, title: "AMV / GMV", desc: "Video kreatif berbasis musik dan storytelling yang mendalam." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-secondary-soft/30">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Showcase">The Archive</SectionTitle>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {ASSETS.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="relative group rounded-2xl overflow-hidden break-inside-avoid"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-medium text-white/80">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle subtitle="Community">Meet The Creators</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            {ASSETS.artists.map((artist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 gradient-bg rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <img 
                    src={artist.avatar} 
                    alt={artist.name} 
                    className="w-16 h-16 rounded-full relative z-10 border-2 border-white/10 group-hover:border-primary-soft transition-colors"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors truncate w-full">
                  {artist.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-secondary-soft/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Activities">What We Do</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Showcase Karya", desc: "Menjadi tempat untuk menampilkan hasil karya sebagai portofolio dan ekspresi kreatif.", icon: <Share2 /> },
              { title: "Kolaborasi Kreator", desc: "Membuka peluang kerja sama antar anggota untuk menciptakan project bersama.", icon: <Rocket /> },
              { title: "Sharing & Resource", desc: "Berbagi referensi, asset, dan insight untuk mendukung proses kreatif.", icon: <Sparkles /> },
              { title: "Community Interaction", desc: "Diskusi, networking, dan interaksi aktif antar anggota.", icon: <Users /> },
              { title: "Creative Activities", desc: "Event, challenge, dan aktivitas komunitas untuk menjaga engagement.", icon: <Palette /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex flex-col gap-4"
              >
                <div className="text-primary-soft">{item.icon}</div>
                <h3 className="text-xl font-display font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Section */}
      <section id="commission" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Services">Commission & Pricing</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PRICING.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass p-8 rounded-3xl flex flex-col items-center text-center group hover:scale-105 transition-all ${item.popular ? 'border-primary-soft shadow-[0_0_30px_rgba(232,180,211,0.2)]' : ''}`}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg px-4 py-1 rounded-full text-[10px] font-black text-secondary-dark uppercase tracking-tighter">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-display font-bold mb-6">{item.type}</h3>
                <div className="space-y-2 mb-8">
                  <p className="text-3xl font-display font-black gradient-text">{item.idr}</p>
                  <p className="text-sm text-gray-500">{item.usd} / {item.robux}</p>
                </div>
                <button className="w-full py-3 rounded-xl bg-white/5 group-hover:bg-primary-soft group-hover:text-secondary-dark font-bold text-sm transition-colors">
                  Order Now
                </button>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 glass p-8 rounded-3xl border-dashed border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-primary-soft" /> Terms of Service
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• 50/50 system (Sketch → Finishing)</li>
                  <li>• Estimasi: 4–7 hari (tercepat)</li>
                  <li>• Revisi maksimal 3x</li>
                  <li>• Tidak bisa cancel setelah pembayaran</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                  <Palette size={20} className="text-accent-purple" /> What I Can Do
                </h4>
                <p className="text-sm text-gray-400">
                  SFW (Ecchi allowed), Male/Female, Shota/Loli, OC, Couple (BL/GL allowed).
                </p>
                <h4 className="font-display font-bold text-xl mt-6 mb-4 flex items-center gap-2">
                  <Rocket size={20} className="text-accent-blue" /> Payment Methods
                </h4>
                <p className="text-sm text-gray-400">
                  Robux Gift Card, PayPal, DANA / GoPay / ShopeePay.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto gradient-bg rounded-[3rem] p-12 md:p-20 text-center text-secondary-dark relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><Sparkles size={100} /></div>
            <div className="absolute bottom-10 right-10"><Moon size={150} /></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
            Ready to Archive <br />Your Dreams?
          </h2>
          <p className="text-lg md:text-xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas kreatif yang terus berkembang dan berkolaborasi. Ruang di mana kreativitas tidak hanya ditampilkan, tetapi juga dikembangkan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://discord.gg/qHh7PpwW76" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-secondary-dark text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              Join Our Discord <MessageCircle size={24} />
            </a>
            <a 
              href="https://www.instagram.com/yumearchive/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border-2 border-secondary-dark rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-secondary-dark hover:text-white transition-all"
            >
              Follow Instagram <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Yume Archive" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-lg">Yume Archive</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-soft transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-soft transition-colors">About</a>
            <a href="#gallery" className="hover:text-primary-soft transition-colors">Gallery</a>
            <a href="#commission" className="hover:text-primary-soft transition-colors">Commission</a>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            © 2026 Yume Archive. Built with <Sparkles size={14} className="text-primary-soft" />
          </div>
        </div>
      </footer>
    </div>
  );
}
