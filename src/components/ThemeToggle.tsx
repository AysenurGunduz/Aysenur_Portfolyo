"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light-theme");
      setDark(false);
    }
  }, []);

  const toggle = () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setDark(!isLight);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Tema değiştir"
      className="p-2 rounded-full text-starlight hover:text-nebula-400 transition-all duration-300 hover:rotate-12 cursor-pointer"
    >
      {dark ? <Moon size={20} /> : <Sun size={20} className="text-amber-500" />}
    </button>
  );
}
