import { motion } from "motion/react";
import { 
  Palette, 
  Users, 
  Video, 
  Share2, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  Disc as Discord
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-yume-purple to-yume-pink rounded-lg flex items-center justify-center text-white font-bold">Y</div>
        <span className="font-display font-bold text-xl tracking-tight">YumeArchive</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#home" className="hover:text-yume-purple transition-colors">Home</a>
        <a href="#about" className="hover:text-yume-purple transition-colors">About</a>
        <a href="#features" className="hover:text-yume-purple transition-colors">Features</a>
        <a href="#gallery" className="hover:text-yume-purple transition-colors">Gallery</a>
      </div>
      <a 
        href="https://discord.gg/qHh7PpwW76" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-yume-dark text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-yume-purple transition-all hover:scale-105 active:scale-95"
      >
        <Discord size={18} />
        Join Discord
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yume-purple/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yume-pink/10 rounded-full blur-3xl" />
    
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yume-purple/10 text-yume-purple text-xs font-bold mb-6">
          <Sparkles size={14} />
          ESTABLISHED 2021
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-tight mb-6">
          Yume <br />
          <span className="text-gradient">Archive</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
          Creative Community for Designers, Artists & Editors. A space where ideas grow, creativity is explored, and connections are formed.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-yume-purple text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-yume-purple/30 transition-all hover:-translate-y-1">
            Explore Works
            <ArrowRight size={20} />
          </button>
          <button className="bg-white border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-yume-purple/30 transition-all">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <motion.img 
          src="https://osiic.github.io/yumearchive/assets/img/3.png"
          alt="Yume Archive Illustration"
          className="w-full h-auto relative z-10 drop-shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          referrerPolicy="no-referrer"
        />
        {/* Decorative floating objects */}
        <motion.div 
          className="absolute top-10 right-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-20"
          animate={{ rotate: 360, y: [0, 15, 0] }}
          transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
        >
          <Palette className="text-yume-purple" size={24} />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-0 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-20"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Video className="text-yume-pink" size={28} />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/yume-creative/800/800" 
              alt="Community" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-[240px]">
            <h4 className="font-bold text-yume-purple mb-2">Creative Ecosystem</h4>
            <p className="text-sm text-gray-600">Fostering digital talent growth and creating an inspiring collaborative space.</p>
          </div>
        </div>
        
        <div>
          <h2 className="font-display text-4xl font-bold mb-6">What is Yume Archive?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Yume Archive is a creative community that brings together designers, artists, and AMV/GMV creators to gather, share their work, and build connections within a collaborative ecosystem.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Founded", value: "2021" },
              { label: "Community", value: "Creative" },
              { label: "Focus", value: "Collaboration" },
              { label: "Environment", value: "Supportive" }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
                <p className="font-display font-bold text-lg text-yume-dark">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "Showcase Artwork",
      desc: "Display your work as a form of expression and your best portfolio.",
      icon: <Palette className="text-yume-purple" />,
      color: "bg-purple-50"
    },
    {
      title: "Collaboration",
      desc: "Open up collaboration opportunities among creators from various skill backgrounds.",
      icon: <Share2 className="text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Sharing Resource",
      desc: "Share assets, references, and inspiration to grow together as a community.",
      icon: <Sparkles className="text-amber-500" />,
      color: "bg-amber-50"
    },
    {
      title: "Community Interaction",
      desc: "Build active communication, discussions, and engagement through exciting events.",
      icon: <MessageSquare className="text-yume-pink" />,
      color: "bg-pink-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">As a creative community, Yume Archive offers various activities that support the growth of its members.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtistsPreview = () => {
  const artists = [
    { name: "Sora", role: "Illustrator", img: "https://picsum.photos/seed/art1/400/400" },
    { name: "Ryu", role: "Motion Designer", img: "https://picsum.photos/seed/art2/400/400" },
    { name: "Yuki", role: "AMV Creator", img: "https://picsum.photos/seed/art3/400/400" },
    { name: "Mika", role: "Graphic Artist", img: "https://picsum.photos/seed/art4/400/400" },
    { name: "Ken", role: "Video Editor", img: "https://picsum.photos/seed/art5/400/400" },
    { name: "Hana", role: "Digital Painter", img: "https://picsum.photos/seed/art6/400/400" },
    { name: "Aoi", role: "3D Artist", img: "https://picsum.photos/seed/art7/400/400" },
    { name: "Ren", role: "Animator", img: "https://picsum.photos/seed/art8/400/400" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-display text-4xl font-bold mb-2">Our Artists</h2>
        <p className="text-gray-500">Meet the creative minds behind the archive.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
        {artists.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={a.img}
                alt={a.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yume-dark/90 via-yume-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="font-bold text-white text-sm">{a.name}</h4>
              <p className="text-white/70 text-xs">{a.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const GalleryPreview = () => {
  const items = [
    { title: "Neon Dreams", type: "Design", img: "https://picsum.photos/seed/gallery1/600/800" },
    { title: "Cyberpunk Soul", type: "Art", img: "https://picsum.photos/seed/gallery2/600/400" },
    { title: "Lost in Melody", type: "AMV", img: "https://picsum.photos/seed/gallery3/600/600" },
    { title: "Urban Flow", type: "Design", img: "https://picsum.photos/seed/gallery4/600/500" },
    { title: "Ethereal Light", type: "Art", img: "https://picsum.photos/seed/gallery5/600/900" },
    { title: "Rhythm of Night", type: "AMV", img: "https://picsum.photos/seed/gallery6/600/450" }
  ];

  return (
    <section id="gallery" className="py-24 bg-yume-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Gallery Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A collection of the best works from Yume Archive creators.</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden break-inside-avoid"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yume-dark/90 via-yume-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-yume-pink mb-2 uppercase tracking-widest">{item.type}</span>
                <h3 className="font-display font-bold text-2xl mb-4">{item.title}</h3>
                <button className="flex items-center gap-2 text-sm font-bold hover:text-yume-purple transition-colors">
                  View Details <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-white text-yume-dark px-10 py-4 rounded-2xl font-bold hover:bg-yume-purple hover:text-white transition-all">
            Explore Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyJoin = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="font-display text-4xl font-bold mb-8">Why Join Us?</h2>
        <div className="space-y-8">
          {[
            { title: "Improve Skills", desc: "Enhance your skills through work exposure and feedback from fellow creators." },
            { title: "Get Feedback", desc: "Receive constructive criticism to continue growing in your creative field." },
            { title: "Find Friends", desc: "Find friends with similar hobbies and passions in a supportive environment." },
            { title: "Collaboration", desc: "Open up collaboration opportunities and projects with other great creators." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center font-display font-bold text-yume-purple group-hover:bg-yume-purple group-hover:text-white transition-colors">
                0{i + 1}
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl rotate-3">
          <img 
            src="https://picsum.photos/seed/yume-join/800/1000" 
            alt="Join Community" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-yume-pink rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  </section>
);

const CommunityCTA = () => (
  <section className="py-24 px-6">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-yume-purple to-yume-pink p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-yume-purple/30"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="relative z-10">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Join Our <br /> Creative Space
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Join and become part of a continuously growing creative community. Express yourself alongside thousands of other creators.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="https://discord.gg/qHh7PpwW76" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-yume-purple px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
          >
            <Discord size={24} />
            Join Discord
          </a>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold">1,200+</span>
            <span className="text-white/60 text-sm font-medium">Active Members</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-yume-dark text-white relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-yume-purple/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yume-pink/10 rounded-full blur-3xl" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yume-purple to-yume-pink rounded-xl flex items-center justify-center text-white font-bold text-lg">Y</div>
            <span className="font-display font-bold text-2xl tracking-tight">YumeArchive</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A creative community for designers, artists, and AMV/GMV creators to collaborate, share, and grow together since 2021.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="text-gray-400 hover:text-yume-purple transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-yume-purple transition-colors">About</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-yume-purple transition-colors">Features</a></li>
            <li><a href="#gallery" className="text-gray-400 hover:text-yume-purple transition-colors">Gallery</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yume-purple transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yume-purple transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yume-purple transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.594 4.933c-.12-.093-.254-.167-.396-.218a1.003 1.003 0 0 0-.861.072c-2.516 1.438-5.353 2.08-8.437 1.92-3.084-.16-5.784-1.387-8.098-3.68a1 1 0 0 0-1.707.707v6.999c0 3.562 1.292 6.626 3.876 9.192 2.584 2.566 5.652 3.858 9.206 3.875 3.554.017 6.626-1.258 9.215-3.816 2.589-2.558 3.883-5.622 3.883-9.192V7.2a1 1 0 0 0-.375-.783l-6.306-4.484zm-1.594 2.467v3.6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3.6c0-.265.215-.48.48-.48h4.04c.265 0 .48.215.48.48z"/></svg>
            </a>
            <a href="https://discord.gg/qHh7PpwW76" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yume-purple transition-colors">
              <Discord size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">Join our Discord community</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10">
        {[
          { value: "1,200+", label: "Active Members" },
          { value: "500+", label: "Artworks Shared" },
          { value: "50+", label: "Events Hosted" },
          { value: "Since 2021", label: "Creating Together" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-display font-bold text-3xl text-gradient mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-400 font-medium">
        <p>© 2021-2026 Yume Archive. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-yume-light selection:bg-yume-purple/30 selection:text-yume-purple">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <ArtistsPreview />
        <GalleryPreview />
        <WhyJoin />
        <CommunityCTA />
      </main>
      <Footer />
    </div>
  );
}
