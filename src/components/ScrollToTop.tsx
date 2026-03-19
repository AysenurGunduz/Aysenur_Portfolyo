"use client";

import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setLaunching(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
    setTimeout(() => setLaunching(false), 1500);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: launching ? -800 : 0,
          }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: launching ? 1 : 0.3,
            ease: launching ? "easeIn" : "easeOut",
          }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-nebula-500 to-aurora-500 text-white shadow-lg shadow-nebula-500/30 flex items-center justify-center hover:shadow-nebula-500/50 hover:-translate-y-1 transition-shadow cursor-pointer"
          aria-label="Yukarı Çık"
        >
          <Rocket size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
