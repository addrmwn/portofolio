"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectModal({ project, onClose }: any) {
  const [index, setIndex] = useState(0);
  const images = project?.images || [];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-xl max-w-6xl w-full p-6 relative">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Image viewer */}
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <Image
                src={images[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="rounded-md object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_: string, i: number) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-accent" : "bg-slate-400/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Footer with Close button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="btn btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
