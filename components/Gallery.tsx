"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { gallery } from "@/lib/content";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? gallery[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="06" eyebrow="Moments" title="Gallery" />

        <div className="grid grid-flow-row-dense auto-rows-[10rem] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[12rem]">
          {gallery.map((item, i) => {
            const ratio = item.w / item.h;
            const wide = ratio >= 1.6;
            return (
              <figure
                key={item.src}
                onClick={() => setActiveIndex(i)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden border border-border ${
                  wide ? "col-span-2" : "col-span-1"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={wide ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-2 text-[12px] text-white opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActiveIndex(null)}
              className="absolute top-5 right-5 icon-btn border-white/20 text-white hover:border-white/40 hover:text-white"
            >
              <X size={16} />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center gap-3"
            >
              <div
                className="relative max-h-[75vh] w-full overflow-hidden rounded-md"
                style={{ aspectRatio: `${active.w} / ${active.h}` }}
              >
                <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
              </div>
              <p className="text-[13.5px] text-white/80">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
