"use client";

import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    date: "09/2025 - Devam Ediyor",
    title: "Kampüs Elçisi Yardımcılığı",
    company: "Huawei Student Developers Balıkesir",
    desc: "Huawei Student Developer Programının Balıkesir Üniversitesi kampüs elçisi yardımcılığını üstlenmekteyim. 4 komiteye böldüğümüz çekirdek ekibin yönetimi ve idaresini gerçekleştirmekteyim.",
  },
  {
    date: "09/2025 - Devam Ediyor",
    title: "Şişecam Geleceğe İlerleyen Kadınlar Programı",
    company: "Katılımcı",
    desc: "Toplumsal cinsiyet eşitliği ve kadınların güçlenmesi odağındaki STEM ve yapay zeka eğitimleri, mentörlük oturumları ve rol model buluşmalarını içeren kapsamlı gelişim programına hak kazanarak katılım sağlamaktayım.",
  },
  {
    date: "08/2025 - 09/2025",
    title: "Bilgi Teknolojileri - Gönüllü Stajyer",
    company: "Social Office",
    desc: "1 aylık gönüllü stajımda Excel, AutoCAD, Python ve Photoshop üzerine eğitimler alarak temel ve ileri düzey beceriler edindim. Proje bazlı uygulamalarla bu bilgileri pekiştirerek pratik deneyim kazandım.",
  },
  {
    date: "08/2025 - 09/2025",
    title: "Arayüz Tasarımcısı",
    company: "Farmo Atlas İnsansız Kara Aracı Ekibi",
    desc: "İnsansız kara aracı projesi için PyQt tabanlı modern bir kullanıcı arayüzü tasarladım. Veri yönetimi ve senkronizasyon için Firebase tabanlı veritabanı entegrasyonu gerçekleştirdim.",
  },
  {
    date: "01/2024 - 08/2025",
    title: "Raporlama Sorumlusu - Yazılım Başsorumlusu",
    company: "Misya Havacılık ve Uzay Teknolojileri",
    desc: "2024 itibariyle Roket Takımında raporlama sorumlusu olarak görev aldım. 2024 senesinde Yüksek İrtifa Kategorisinde 9. olduk. 2025'te aktif olarak yazılım alanı başsorumlusu oldum; gömülü sistem kodlamaları ve algoritma tasarımları yaptım.",
  },
  {
    date: "01/2022 - 08/2022",
    title: "Raporlama Sorumlusu",
    company: "Helyak Roket Takımı",
    desc: "Teknofest Roket Yarışması Lise Kategorisi kapsamında model roket sistemi geliştirdik. Roketin aviyonik ve mekanik sistemleri üzerinde çalışıp raporlama süreçlerinde yer aldım. Finale yükseldik ve 9. sırada yer aldık.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="İş ve Ekip" highlight="Deneyimi" />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-500/40 via-aurora-500/20 to-transparent" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative pl-14 mb-10 last:mb-0">
                {/* Dot */}
                <div className="absolute left-[13px] top-6 w-[14px] h-[14px] rounded-full bg-nebula-500 shadow-[0_0_0_4px_var(--color-cosmic-950),0_0_12px_rgba(6,182,212,0.4)]" />

                <div className="glass-card p-6">
                  <span className="inline-block text-xs font-semibold tracking-wider text-nebula-400 mb-2 uppercase">
                    {exp.date}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-starlight mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-stardust text-sm font-medium mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-stardust text-sm leading-relaxed m-0">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
