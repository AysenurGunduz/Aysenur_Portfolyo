"use client";

import ScrollReveal from "./ScrollReveal";

interface Props {
  title: string;
  highlight: string;
}

export default function SectionTitle({ title, highlight }: Props) {
  return (
    <ScrollReveal className="text-center mb-16">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-starlight">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-nebula-500 to-aurora-500" />
    </ScrollReveal>
  );
}
