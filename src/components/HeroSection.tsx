"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Rocket } from "lucide-react";

export default function HeroSection() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-nebula-500/20 bg-nebula-500/5 text-nebula-400 text-sm font-medium"
            >
              <Rocket size={14} />
              <span>Bilgisayar Mühendisi Adayı</span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              <span className="text-starlight">Ayşenur</span>
              <br />
              <span className="gradient-text">Ebrar Gündüz</span>
            </h1>

            <p className="text-stardust text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisiyim.
              Kariyerime proje yönetimi, iş analistliği ve modern yazılım
              çözümleri ekseninde yön veriyor, analitik çözümler üretiyorum.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => handleClick("#projects")}
                className="px-7 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-nebula-500 to-aurora-500 text-white shadow-lg shadow-nebula-500/25 hover:shadow-nebula-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Projelerimi Gör
              </button>
              <button
                onClick={() => handleClick("#about")}
                className="px-7 py-3 rounded-xl font-semibold text-sm border border-nebula-500/30 text-nebula-400 hover:bg-nebula-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Beni Tanı
              </button>
            </div>

            <div className="flex gap-5 justify-center lg:justify-start">
              {[
                {
                  href: "mailto:ahebrar02@gmail.com",
                  icon: <Mail size={20} />,
                  label: "Email",
                },
                {
                  href: "https://www.linkedin.com/in/ay%C5%9Fenur-g%C3%BCnd%C3%BCz",
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/AysenurGunduz",
                  icon: <Github size={20} />,
                  label: "GitHub",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-stardust hover:text-nebula-400 hover:-translate-y-1 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="flex-1 flex justify-center relative"
          >
            {/* Orbit ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-nebula-500/20 animate-orbit" />
            <div
              className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-aurora-500/15 animate-orbit"
              style={{ animationDirection: "reverse", animationDuration: "25s" }}
            />

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-nebula-500/20 rounded-full blur-[100px]" />
            <div className="absolute w-56 h-56 bg-aurora-500/15 rounded-full blur-[80px] translate-x-10 translate-y-10" />

            {/* Photo */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-nebula-500/30 shadow-2xl shadow-nebula-500/20 z-10 group">
              <Image
                src="/images/profil.png"
                alt="Ayşenur Ebrar Gündüz"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Floating rocket */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [-5, 10, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 right-4 sm:right-8 text-nebula-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            >
              <Rocket size={40} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
