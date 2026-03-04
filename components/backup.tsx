"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  Sun,
  Moon,
  Menu,
  X,
  Instagram,
  Linkedin,
  Youtube,
  Aperture,
  ArrowUpRight,
  Plane,
  Trophy,
  Crosshair,
  ArrowUpCircle,
  Map as MapIcon,
  Wind,
  Zap,
  Cpu,
  Code2,
  Briefcase,
  Users,
} from "lucide-react";

const GlobalStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    html { scroll-behavior: smooth; }
    body {
      background: radial-gradient(circle at 20% 20%, #dbeafe 0, transparent 30%),
        radial-gradient(circle at 80% 0%, #e0f2fe 0, transparent 26%),
        radial-gradient(circle at 50% 70%, #e0e7ff 0, transparent 28%),
        linear-gradient(180deg, #f8fafc, #e2e8f0);
      color: #0f172a;
      transition: background-color 0.6s ease, color 0.4s ease;
    }
    .dark body {
      background: radial-gradient(circle at 15% 20%, #0b1c43 0, transparent 32%),
        radial-gradient(circle at 85% 0%, #082f49 0, transparent 28%),
        radial-gradient(circle at 50% 75%, #0f172a 0, transparent 30%),
        linear-gradient(180deg, #020617, #0b1224 50%, #020617 100%);
      color: #e2e8f0;
    }
    .glass {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
      border: 1px solid rgba(255, 255, 255, 0.14);
      box-shadow: 0 20px 60px rgba(2, 6, 23, 0.22);
      backdrop-filter: blur(14px);
    }
    .dark .glass {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.35));
      border-color: rgba(148, 163, 184, 0.15);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
    }
    .gradient-text {
      background: linear-gradient(120deg, #60a5fa, #a855f7, #22d3ee, #60a5fa);
      background-size: 240% 240%;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      animation: gradientShift 12s ease infinite;
    }
    .hover-card { transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; }
    .hover-card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 24px 55px rgba(59, 130, 246, 0.15);
      border-color: rgba(59, 130, 246, 0.35);
    }
    .floating-blob {
      position: absolute; width: 420px; height: 420px; border-radius: 9999px;
      filter: blur(80px); opacity: 0.28; pointer-events: none; mix-blend-mode: screen;
      animation: blobFloat 18s ease-in-out infinite;
    }
    .floating-blob.blob-1 { top: 6%; left: 8%; background: #60a5fa; }
    .floating-blob.blob-2 { bottom: 8%; right: 6%; background: #a855f7; animation-delay: 4s; }
    .floating-blob.blob-3 { top: 40%; right: 30%; background: #22d3ee; animation-delay: 2s; }
    
    @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes blobFloat { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.04); } 100% { transform: translateY(0) scale(1); } }
  `,
    }}
  />
);


const ThreeBackground = () => {
const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const count = 320;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 28;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.07,
      color: 0x60a5fa,
      opacity: 0.9,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 5;

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0015; // Dibuat lebih smooth dari Vue aslinya
      particles.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
  window.removeEventListener("resize", handleResize);

  if (animationId) cancelAnimationFrame(animationId);

  geometry.dispose();
  material.dispose();
  renderer.dispose();

  if (mountRef.current && renderer.domElement) {
    mountRef.current.removeChild(renderer.domElement);
  }
};
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 opacity-60 pointer-events-none dark:mix-blend-screen mix-blend-multiply"
    />
  );
};

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

type AchievementYear = {
  year: number;
  items: AchievementItem[];
};
type AchievementItem = {
  year: number
  category: string
  item: string
  badge: string
}

function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center glass border-b border-white/10 backdrop-blur-md bg-white/30 dark:bg-black/30">
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg rotate-3 group-hover:rotate-0 transition-transform text-white shadow-lg shadow-blue-500/50">
          B
        </div>
        <span className="font-bold tracking-[0.2em] text-xl hidden sm:block dark:text-white">
          BAYUCARAKA
        </span>
      </div>

      <div className="flex items-center space-x-4 md:space-x-8">
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase opacity-80 dark:text-white">
          <a
            href="#about"
            className="hover:text-blue-500 transition hover:drop-shadow"
          >
            Tentang
          </a>
          <a
            href="#divisions"
            className="hover:text-blue-500 transition hover:drop-shadow"
          >
            Divisi
          </a>
          <a
            href="#gallery"
            className="hover:text-blue-500 transition hover:drop-shadow"
          >
            Galeri
          </a>
          <a
            href="#achievements"
            className="hover:text-blue-500 transition hover:drop-shadow"
          >
            Prestasi
          </a>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl glass hover:bg-white/10 transition-all duration-300 group border border-transparent hover:border-white/20"
        >
          {!isDark ? (
            <Moon className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform" />
          )}
        </button>

        <a
          href="https://bayucaraka-its.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-md text-[10px] font-black uppercase tracking-widest transition text-white shadow-lg shadow-blue-600/20"
        >
          Official Site
        </a>

        <button
          className="md:hidden p-2 rounded-lg border border-white/20 hover:bg-white/10 transition backdrop-blur"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <Menu className="w-5 h-5 text-slate-900 dark:text-white" />
          ) : (
            <X className="w-5 h-5 text-slate-900 dark:text-white" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full px-6 pb-6 pt-2 md:hidden glass backdrop-blur-lg border-b border-white/10 space-y-3">
          {["Tentang", "Divisi", "Galeri", "Prestasi"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm font-semibold text-slate-800 dark:text-white hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

const Hero = () => (
  <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20 overflow-hidden">
    <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
      UAV Research Team
    </div>
    <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter">
      <span className="gradient-text">BAYUCARAKA</span>
    </h1>
    <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
      Mengeksplorasi batas teknologi udara otonom sejak 2014.
      <br className="hidden md:block" />
      Dari ITS untuk Indonesia, menuju masa depan penerbangan.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 z-10">
      <a
        href="#divisions"
        className="px-10 py-4 bg-blue-600 text-white dark:bg-white dark:text-black font-bold rounded-sm hover:scale-105 transition shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-1"
      >
        Divisi Kami
      </a>
      <a
        href="#gallery"
        className="px-10 py-4 border border-blue-500/20 dark:border-white/20 hover:bg-blue-500/5 rounded-sm font-medium transition backdrop-blur-sm hover:-translate-y-1"
      >
        Lihat Galeri
      </a>
    </div>
  </header>
);

const About = () => {
  const stats = [
    { value: 5, label: "Divisi" },
    { value: "50+", label: "Awards" },
    { value: 11, label: "Tahun" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto py-32 px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center space-x-2 text-blue-500 mb-4">
            <div className="h-px w-8 bg-blue-500"></div>
            <span className="text-xs font-bold uppercase tracking-widest">
              Profil Tim
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Face of Bayucaraka ITS
          </h2>
          <div className="space-y-6 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              Bayucaraka ITS adalah tim riset robotika unggulan dari{" "}
              <span className="font-semibold text-blue-600 dark:text-white">
                Institut Teknologi Sepuluh Nopember
              </span>{" "}
              yang berfokus pada pengembangan UAV (Unmanned Aerial Vehicle).
            </p>
            <p>
              Kami melakukan riset mulai dari desain aerodinamika, manufaktur
              material komposit, hingga sistem kendali otonom berbasis AI.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {stats.map((item) => (
              <div
                key={item.label}
                className="p-6 glass rounded-2xl text-center border-t-2 border-t-blue-500 hover-card"
              >
                <div className="text-3xl font-bold text-blue-500 mb-1">
                  {item.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-square glass rounded-3xl flex items-center justify-center p-12 overflow-hidden group border border-blue-500/20 relative hover-card">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-50"></div>
            <div className="text-center z-10">
              <Plane className="w-24 h-24 mx-auto mb-4 text-blue-500" />
              <p className="text-6xl font-black italic mb-2 gradient-text">
                #GJS
              </p>
              <p className="text-blue-500 dark:text-blue-400 font-mono tracking-[0.4em] uppercase text-xs">
                Garudaku Jaya Selalu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Divisions = () => {
  const divisions = [
    {
      title: "VTOL",
      icon: ArrowUpCircle,
      bgIcon: Crosshair,
      desc: "Drone hybrid dengan kemampuan lepas landas vertikal dan efisiensi jelajah fixed-wing.",
    },
    {
      title: "FW / ARNAYADIRGA",
      icon: Plane,
      bgIcon: MapIcon,
      desc: "Fixed Wing untuk misi jarak jauh seperti mapping, dropping payload, dan pemadaman titik api.",
    },
    {
      title: "RACING PLANE",
      icon: Zap,
      bgIcon: Wind,
      desc: "UAV kecepatan tinggi untuk manuver ekstrem dan performa maksimal di lintasan balap.",
    },
    {
      title: "TECH DEV",
      icon: Code2,
      bgIcon: Cpu,
      desc: "Riset flight controller, GCS, telemetri jarak jauh, dan integrasi AI.",
    },
    {
      title: "OFFICIAL",
      icon: Users,
      bgIcon: Briefcase,
      desc: "Manajemen tim, branding, relasi sponsor, dan administrasi operasional.",
    },
  ];

  return (
    <section
      id="divisions"
      className="bg-blue-500/5 dark:bg-white/[0.02] border-y border-blue-500/10 dark:border-white/5 py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Strategic Divisions
          </h2>
          <p className="text-slate-500 dark:text-gray-500">
            Struktur tim yang solid untuk menghadapi berbagai tantangan
            dirgantara.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="p-10 glass rounded-3xl group hover:border-blue-500/50 transition duration-300 relative overflow-hidden border border-transparent hover-card"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <div.bgIcon className="w-24 h-24" />
              </div>
              <div className="mb-8 inline-block p-4 bg-blue-600/10 rounded-2xl text-blue-500">
                <div.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                {div.title}
              </h3>
              <p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed">
                {div.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const gallery = [
    {
      title: "Autonomous Flight Test",
      tag: "MISSION: KRTI 2025",
      desc: "Pengujian sistem navigasi otonom.",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
      class: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Avionics Assembly",
      tag: "DIV: TECH DEV",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      class: "md:row-span-2",
    },
    {
      title: "Team Discussion",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      class: "",
    },
    {
      title: "Mapping Mission",
      desc: "Area coverage: 50 Hectares",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      class: "md:col-span-2",
    },
    {
      title: "Telemetry Data",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      class: "",
    },
    {
      title: "Competition Field",
      tag: "SAFMC 2024",
      img: "https://images.unsplash.com/photo-1563207153-f4047864aa36?q=80&w=2071&auto=format&fit=crop",
      class: "",
    },
  ];

  return (
    <section id="gallery" className="max-w-7xl mx-auto py-32 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 text-blue-500 mb-2">
            <Aperture className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Visual Data
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Mission Logs</h2>
        </div>
        <a
          href="https://instagram.com/bayucaraka.its"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold text-blue-500 hover:text-blue-400 flex items-center mt-4 md:mt-0"
        >
          Lihat Instagram <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[600px]">
        {gallery.map((item, i) => (
          <div
            key={i}
            className={`${item.class} relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg shadow-black/40 hover-card bg-slate-800`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              {item.tag && (
                <span className="text-blue-400 text-xs font-mono tracking-widest mb-1">
                  {item.tag}
                </span>
              )}
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
              {item.desc && (
                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Achievements = () => {
  const rawAchievements = [
    {
      year: 2025,
      category: "KRTI",
      item: "1st place KRTI Racing Plane Division",
      badge: "Terbaru",
    },
    {
      year: 2025,
      category: "KRTI",
      item: "2nd place KRTI VTOL Division",
      badge: "Terbaru",
    },
    {
      year: 2024,
      category: "KRTI",
      item: "1st place KRTI VTOL Division",
      badge: "Nasional",
    },
    {
      year: 2024,
      category: "KRTI",
      item: "3rd place KRTI Racing Plane Division",
      badge: "Nasional",
    },
    {
      year: 2023,
      category: "KRTI",
      item: "2nd place KRTI Fixed Wing Division",
      badge: "Nasional",
    },
    {
      year: 2022,
      category: "TUBITAK",
      item: "2nd place Fixed Wing Category",
      badge: "Internasional",
    },
    {
      year: 2022,
      category: "FIRA AIR",
      item: "1st Place FIRA AIR Simulation Cup",
      badge: "Internasional",
    },
  ];

  const groupedAchievements = useMemo(() => {
    const map = new Map();
    rawAchievements.forEach((a) => {
      if (!map.has(a.year)) map.set(a.year, []);
      map.get(a.year).push(a);
    });
    return Array.from(map, ([year, items]) => ({ year, items })).sort(
      (a, b) => b.year - a.year,
    );
  }, []);

  return (
    <section id="achievements" className="max-w-6xl mx-auto py-32 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">
            Wall of Achievements
          </h2>
          <p className="text-slate-500 dark:text-gray-500 max-w-lg">
            Dedikasi dan kerja keras yang membuahkan hasil di kancah nasional
            maupun internasional.
          </p>
        </div>
        <div className="text-6xl font-black text-blue-600/10 hidden lg:block select-none">
          HISTORY
        </div>
      </div>
      <div className="space-y-6">
        {groupedAchievements.map((yearData) => (
          <div
            key={yearData.year}
            className="group p-8 glass rounded-2xl border-l-4 border-l-blue-500 hover:border-blue-400 transition hover-card"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-[10px] font-black rounded uppercase">
                {yearData.items[0].badge}
              </span>
              <span className="text-2xl font-bold opacity-20">
                {yearData.year}
              </span>
            </div>
            <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
              Prestasi Tahun {yearData.year}
            </h4>
            <ul className="space-y-2 text-slate-500 dark:text-gray-400 text-sm">
              {yearData.items.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                  {item.item} ({item.category})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-blue-500/10 glass mt-20 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-blue-500/5">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-4xl font-black italic text-blue-600/30 mb-2">
            #GarudakuJayaSelalu
          </p>
        </div>
        <div className="flex space-x-4">
          {[Instagram, Linkedin, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-slate-400 hover:text-blue-500 transition transform hover:-translate-y-1"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(true); 

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen font-sans">
      <GlobalStyles />
      <ThreeBackground />

      {/* Background Ornaments */}
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="floating-blob blob-3"></div>

      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <main className="relative pt-20 md:pt-24 overflow-x-hidden">
        <Hero />
        <About />
        <Divisions />
        <Gallery />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
}
