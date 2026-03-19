"use client";

import { Mail, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-nebula-500/10 py-12">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-nebula-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold text-starlight mb-1">
              Ayşenur Ebrar
            </h2>
            <p className="text-stardust text-sm m-0">
              Bilgisayar Mühendisi Adayı
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                href: "mailto:ahebrar02@gmail.com",
                icon: <Mail size={18} />,
                label: "Email",
              },
              {
                href: "https://www.linkedin.com/in/ay%C5%9Fenur-g%C3%BCnd%C3%BCz",
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/AysenurGunduz",
                icon: <Github size={18} />,
                label: "GitHub",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full bg-transparent flex items-center justify-center text-stardust hover:bg-nebula-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-nebula-500/5 text-center">
          <p className="text-stardust/60 text-xs flex items-center justify-center gap-1 m-0">
            © 2025 Ayşenur Ebrar Gündüz — Made with{" "}
            <Heart size={12} className="text-red-400 fill-red-400" /> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
