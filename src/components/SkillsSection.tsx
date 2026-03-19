"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import CertificateModal from "./CertificateModal";

const skills = [
  "Algoritma ve Programlama",
  "Python (PyQt, Pandas)",
  "Arduino Programlama",
  "Jira Kullanımı",
  "Proje Yönetimi",
  "Microsoft Office",
  "Web Geliştirme",
  "C# Programlama",
  "Veri Tabanı Sistemleri",
];

const certificates = [
  { src: "/images/savunma-sanayii-101.png", label: "Savunma Sanayii 101 Eğitimi" },
  { src: "/images/2024-roket-yarismasi.png", label: "2024 Teknofest Roket Yarışması" },
  { src: "/images/2022-roket-yarismasi.png", label: "2022 Teknofest Roket Yarışması" },
  { src: "/images/roketsan-akademi.jpg", label: "Roketsan Akademi Eğitimi" },
  { src: "/images/cloud.png", label: "HCCDA Cloud Native" },
  { src: "/images/tech-essential.png", label: "HCCDA Tech Essential" },
  { src: "/images/baun-tech-start.png", label: "BaunTech Start Katılım" },
  { src: "/images/tesekkur-belgesi.jpg", label: "Balıkesir Üni. Teşekkür" },
  { src: "/images/python-101.png", label: "Python 101 Eğitimi" },
  { src: "/images/python-201.png", label: "Python 201 Eğitimi" },
  { src: "/images/python-301.png", label: "Python 301 Eğitimi" },
  { src: "/images/openrocket.png", label: "OpenRocket Eğitim" },
];

const projects = [
  {
    img: "/images/saglikla.png",
    title: "Sağlıkla",
    subtitle: "Yapay Zeka Destekli Sağlık Uygulaması",
    date: "12/2025 – Devam Ediyor",
    desc: "Diyabet ve çölyak hastaları için Flutter, Firebase, Gemini AI ve OpenFoodFacts entegrasyonlu kişiselleştirilmiş beslenme risk değerlendirmesi yapan mobil sağlık asistanı. AppJam yarışmasında 2.'lik elde etti.",
    tags: ["Flutter", "Firebase", "Gemini AI"],
  },
  {
    img: "/images/portfolyo.png",
    title: "Portfolyo Web Sitesi",
    subtitle: "Kişisel Profil",
    date: "05/2025 – 06/2025",
    desc: "Web sistemlerinde kendimi geliştirmek ve görünürlüğümü artırmak adına kendi portfolyo sitemi JavaScript, HTML ve CSS kullanarak modern tasarım pratikleriyle geliştirdim.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    img: "/images/deprem-kayit.png",
    title: "Deprem Kayıt Uygulaması",
    subtitle: "Doğal Afetler için Mobil Çözümler",
    date: "05/2025 – Devam Ediyor",
    desc: "Enkaz altında kalan insanların bulunmasını kolaylaştıracak bir uygulama. İlk başta PyQt kullanarak masaüstü geliştirdim, ardından donanım entegresi için mobil uyarlamasına geçiş yaptım.",
    tags: ["Python", "PyQt", "Mobil"],
  },
  {
    img: "/images/kariyer-pusulasi.jpg",
    title: "Kariyer Pusulası",
    subtitle: "Kariyer Planlama Etkinliği",
    date: "11/2025 – Devam Ediyor",
    desc: "Mühendislik öğrencilerinin kariyer kaygılarını azaltmaya yönelik geliştirdiğim konferans projesi. Gençlik ve Spor Bakanlığı ÜNİDES programı kapsamında desteklenmeye hak kazandı.",
    tags: ["Proje Yönetimi", "Organizasyon"],
  },
];

export default function SkillsSection() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="" highlight="Portfolyo" />

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Skills */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full">
              <h3 className="font-heading text-xl font-bold text-starlight mb-6">
                Teknik ve Profesyonel Yetenekler
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-nebula-500/20 bg-nebula-500/5 text-starlight hover:bg-nebula-500/15 hover:border-nebula-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certificates */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="font-heading text-xl font-bold text-starlight mb-2">
                Eğitim ve Sertifikalar
              </h3>
              <p className="text-stardust text-sm mb-5">
                Sertifikalarımı incelemek için görsellerin üzerine tıklayabilirsiniz.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {certificates.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => {
                      setModalImg(c.src);
                      setModalAlt(c.label);
                    }}
                    className="group text-center cursor-pointer"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-nebula-500/10 group-hover:border-nebula-500/40 transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={c.src}
                        alt={c.label}
                        fill
                        className="object-cover"
                        sizes="150px"
                        unoptimized
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] text-stardust leading-tight line-clamp-2">
                      {c.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Projects */}
        <div id="projects">
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-bold text-starlight mb-8">
              Projeler
            </h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="glass-card overflow-hidden flex flex-col h-full group">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-cosmic-800/50">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold text-starlight mb-1">
                      {p.title}
                    </h3>
                    <h4 className="text-stardust text-sm font-medium mb-1">
                      {p.subtitle}
                    </h4>
                    <span className="text-nebula-400 text-xs font-semibold tracking-wider uppercase mb-3">
                      {p.date}
                    </span>
                    <p className="text-stardust text-sm leading-relaxed flex-1 mb-4">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-nebula-500/10 text-nebula-400 border border-nebula-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal
        src={modalImg}
        alt={modalAlt}
        onClose={() => setModalImg(null)}
      />
    </section>
  );
}
