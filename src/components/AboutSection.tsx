"use client";

import { GraduationCap, Calendar, Star, FileDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Hakkımda &" highlight="Eğitim" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* About text */}
          <ScrollReveal className="lg:col-span-3" delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="font-heading text-2xl font-bold text-nebula-400 mb-6">
                Kısaca Ben
              </h3>

              <p className="text-stardust leading-relaxed mb-4">
                Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Şu
                anda{" "}
                <strong className="text-starlight">
                  Huawei Student Developer (HSD)
                </strong>{" "}
                Balıkesir bünyesinde başkan yardımcılığı görevini yürütmekteyim.
                Aynı zamanda{" "}
                <strong className="text-starlight">
                  Şişecam Geleceğe İlerleyen Kadınlar Programı
                </strong>{" "}
                kapsamında Yapay Zekâ ve STEM odaklı eğitimler almaktayım.
              </p>

              <p className="text-stardust leading-relaxed mb-4">
                TEKNOFEST Roket Yarışmaları (Lise ve Yüksek İrtifa kategorileri)
                sürecinde; aviyonik sistemler, gömülü yazılım, sensör
                entegrasyonu ve raporlama alanlarında aktif görev aldım. Bu
                süreçler sayesinde disiplinler arası çalışma, teknik problem
                çözme, proje yönetimi ve takım çalışması konularında önemli
                deneyimler edindim.
              </p>

              <div className="mt-6 pt-6 border-t border-nebula-500/10">
                <p className="text-starlight leading-relaxed">
                  <strong>Uzun Vadeli Hedefim:</strong> Proje yönetimi, yazılım
                  geliştirme ve analitik düşünme becerilerimi sürekli olarak
                  geliştirerek, ülkeme faydalı çözümler üretmek ve katma değer
                  sağlamaktır.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-nebula-500/15">
                <a
                  href="/images/cv.pdf"
                  download
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-nebula-500 to-aurora-500 text-white shadow-lg shadow-nebula-500/20 hover:shadow-nebula-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FileDown size={18} />
                  Özgeçmişimi (CV) İndir
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal className="lg:col-span-2" delay={0.25}>
            <div className="glass-card p-8 text-center flex flex-col justify-center h-full">
              <div className="text-5xl text-nebula-400 mb-5 flex justify-center">
                <GraduationCap size={56} strokeWidth={1.5} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-nebula-400 mb-6">
                Eğitim
              </h3>

              <h4 className="font-heading text-xl font-semibold text-starlight mb-2">
                Bilgisayar Mühendisliği
              </h4>
              <span className="text-stardust text-lg block mb-5">
                Balıkesir Üniversitesi
              </span>

              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nebula-500/10 text-nebula-400 text-sm font-medium border border-nebula-500/20">
                  <Calendar size={14} />
                  2023 - Devam Ediyor
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-500/10 text-aurora-400 text-sm font-medium border border-aurora-500/20">
                  <Star size={14} />
                  AGNO: 3.36
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
