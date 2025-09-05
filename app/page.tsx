"use client";
import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <main className="space-y-6">
      {/* HERO */}
<section className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-2">
  {/* Avatar kiri */}
  <motion.img
    src="/avatar.jpg"
    alt="Bagus Adi Darmawan"
    className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-slate-300 dark:border-slate-700 object-cover shadow-lg"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  />

  {/* Intro kanan */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
<h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
  Hey, 👋 I’m <span className="text-accent">Bagus Adi Darmawan</span>
</h1>

    {/* Badges dengan warna highlight */}
    <div className="flex flex-wrap gap-2 mt-3 text-sm">
      <span className="badge bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
        Website Developer
      </span>
      <span className="badge bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
        Mobile Developer (Kotlin/Compose)
      </span>
      <span className="badge bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
        Always building
      </span>
    </div>

    <div className="mt-4 flex gap-3 flex-wrap">
      <a href="#projects" className="btn btn-primary">View Projects</a>
      <a href="mailto:adarmawan106@gmail.com" className="btn">Contact</a>
    </div>
  </motion.div>
</section>

      {/* ABOUT & AVAILABILITY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h2 className="font-semibold text-lg mb-2">About</h2>
         <p>I build API backends, websites with <b>PHP/CodeIgniter</b>, and Android apps with <b>Kotlin/Compose</b>. Exploring <b>Clean Architecture</b> and shipping small, useful tools. Coffee + music.</p>

        </div>
        <div className="card p-5">
          <h2 className="font-semibold text-lg mb-2">Availability & Contact</h2>
         <p>Open for freelance &amp; full-time roles. Focus: <b>Full-stack</b> (API backends, websites with PHP/CodeIgniter, Android with Kotlin/Compose). Remote-friendly.</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <a className="btn btn-primary" href="mailto:adarmawan106@gmail.com">Email Me</a>
            <a className="btn" href="https://github.com/addrmwn" target="_blank" rel="noopener">GitHub</a>
            <a className="btn" href="#" rel="noopener">Download CV</a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
  <section id="projects" className="space-y-3">
      <h2 className="font-semibold text-lg">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} onClick={setSelected} />
        ))}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>


      {/* GITHUB STATS (static sample) */}
      <section className="card p-5">
        <h2 className="font-semibold text-lg mb-2">GitHub — Most Used Languages</h2>
        <div aria-hidden className="h-2 rounded-full bg-gradient-to-r from-accent via-slate-400 to-slate-400"></div>
        <div className="mt-2 flex gap-4 text-sm text-slate-500 dark:text-slate-400 flex-wrap">
          <span>JavaScript 47.15%</span>
          <span>PHP 30.50%</span>
          <span>CSS 14.36%</span>
          <span>HTML 6.66%</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">*Hook to GitHub API later for live data.</p>
      </section>

      {/* STACK */}
<TechStack />


      <footer className="text-center text-slate-500 dark:text-slate-400 py-4">© {new Date().getFullYear()} Adi Darmawan — modern minimal</footer>
    </main>
  );
}
