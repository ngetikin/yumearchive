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
            <p className="text-sm text-gray-600">Mendorong pertumbuhan talenta digital serta menciptakan ruang kolaborasi yang inspiratif.</p>
          </div>
        </div>
        
        <div>
          <h2 className="font-display text-4xl font-bold mb-6">What is Yume Archive?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Yume Archive adalah komunitas kreatif yang mewadahi designer, artist, dan AMV/GMV creator untuk berkumpul, berbagi karya, serta membangun koneksi dalam satu ekosistem yang kolaboratif.
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
      desc: "Menampilkan hasil karya sebagai bentuk ekspresi dan portofolio terbaikmu.",
      icon: <Palette className="text-yume-purple" />,
      color: "bg-purple-50"
    },
    {
      title: "Collaboration",
      desc: "Membuka peluang kerja sama antar kreator dari berbagai latar belakang skill.",
      icon: <Share2 className="text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Sharing Resource",
      desc: "Berbagi asset, referensi, dan inspirasi untuk tumbuh bersama komunitas.",
      icon: <Sparkles className="text-amber-500" />,
      color: "bg-amber-50"
    },
    {
      title: "Community Interaction",
      desc: "Membangun komunikasi aktif, diskusi, dan engagement melalui event seru.",
      icon: <MessageSquare className="text-yume-pink" />,
      color: "bg-pink-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Sebagai komunitas kreatif, Yume Archive menghadirkan berbagai aktivitas yang mendukung perkembangan anggotanya.</p>
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
    { name: "Hana", role: "Digital Painter", img: "https://picsum.photos/seed/art6/400/400" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-display text-4xl font-bold mb-2">Our Artists</h2>
          <p className="text-gray-500">Meet the creative minds behind the archive.</p>
        </div>
        <button className="text-yume-purple font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Artists <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="flex gap-6 px-6 overflow-x-auto pb-8 no-scrollbar">
        {artists.map((a, i) => (
          <motion.div 
            key={i}
            className="flex-shrink-0 w-64 group"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative">
              <img 
                src={a.img} 
                alt={a.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-full py-2 bg-white/20 backdrop-blur-md text-white rounded-xl text-sm font-bold border border-white/30">
                  View Profile
                </button>
              </div>
            </div>
            <h4 className="font-bold text-lg">{a.name}</h4>
            <p className="text-sm text-gray-400">{a.role}</p>
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
          <p className="text-gray-400 max-w-2xl mx-auto">Kumpulan karya terbaik dari para kreator Yume Archive.</p>
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
            { title: "Improve Skills", desc: "Meningkatkan skill melalui exposure karya dan feedback dari sesama kreator." },
            { title: "Get Feedback", desc: "Dapatkan kritik membangun untuk terus berkembang dalam bidang kreatifmu." },
            { title: "Find Friends", desc: "Temukan teman dengan hobi dan passion yang sama dalam lingkungan yang suportif." },
            { title: "Collaboration", desc: "Membuka peluang kolaborasi dan project bersama kreator hebat lainnya." }
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
          Bergabunglah dan jadi bagian dari komunitas kreatif yang terus berkembang. Ekspresikan dirimu bersama ribuan kreator lainnya.
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
  <footer className="py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yume-dark rounded-lg flex items-center justify-center text-white font-bold">Y</div>
          <span className="font-display font-bold text-xl tracking-tight">YumeArchive</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-yume-purple transition-colors">Twitter</a>
          <a href="#" className="hover:text-yume-purple transition-colors">Instagram</a>
          <a href="#" className="hover:text-yume-purple transition-colors">YouTube</a>
          <a href="#" className="hover:text-yume-purple transition-colors">Discord</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
        <p>© 2021-2026 Yume Archive. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
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
