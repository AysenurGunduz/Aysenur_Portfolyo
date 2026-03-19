import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayşenur Ebrar Gündüz — Portfolyo",
  description:
    "Bilgisayar Mühendisliği Öğrencisi | Proje Yönetimi, Yazılım Geliştirme & Analitik Çözümler",
  icons: { icon: "/images/profil.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
