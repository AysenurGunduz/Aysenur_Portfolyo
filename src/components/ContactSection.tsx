"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const emailAddress = "ahebrar02@gmail.com";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "Portfolyo iletişimi");
    const message = String(formData.get("message") ?? "");

    const body = `Merhaba Ayşenur,\n\n${message}\n\nGönderen: ${name}\nE-posta: ${email}`;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Benimle" highlight="İletişime Geç" />

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="glass-card h-full p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-nebula-500/10 text-nebula-400 flex items-center justify-center mb-6">
                  <Mail size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-starlight mb-4">
                  Bir fikrin mi var?
                </h3>
                <p className="text-stardust leading-relaxed">
                  Projeler, staj fırsatları veya sadece merhaba demek için bana
                  yazabilirsin. Mesajını bekliyorum.
                </p>
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="mt-8 text-nebula-400 hover:text-nebula-300 transition-colors break-all"
              >
                {emailAddress}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block text-sm text-stardust">
                  Ad Soyad
                  <input
                    name="name"
                    type="text"
                    required
                    className="contact-input"
                    placeholder="Adınız Soyadınız"
                  />
                </label>
                <label className="block text-sm text-stardust">
                  E-posta
                  <input
                    name="email"
                    type="email"
                    required
                    className="contact-input"
                    placeholder="ornek@mail.com"
                  />
                </label>
              </div>
              <label className="block text-sm text-stardust">
                Konu
                <input
                  name="subject"
                  type="text"
                  required
                  className="contact-input"
                  placeholder="Mesajınızın konusu"
                />
              </label>
              <label className="block text-sm text-stardust">
                Mesajınız
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="contact-input resize-y"
                  placeholder="Size nasıl yardımcı olabilirim?"
                />
              </label>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-nebula-500 to-aurora-500 text-white shadow-lg shadow-nebula-500/20 hover:shadow-nebula-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Send size={18} />
                {sent ? "Mail uygulamanız açılıyor" : "Mesaj Gönder"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}