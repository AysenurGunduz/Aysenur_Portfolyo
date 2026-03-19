"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
      {/* Nebula blobs */}
      <div
        className="nebula-blob w-[600px] h-[600px] bg-nebula-500 -top-40 -left-40"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="nebula-blob w-[500px] h-[500px] bg-aurora-500 top-1/2 -right-40"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="nebula-blob w-[400px] h-[400px] bg-nebula-400 -bottom-20 left-1/3"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
