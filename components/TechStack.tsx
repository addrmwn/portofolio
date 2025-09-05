"use client";
import { DiVisualstudio } from "react-icons/di";

import {
  SiKotlin,
  SiCodeigniter,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";

const techs = [
  { name: "Kotlin / Compose", icon: <SiKotlin className="text-[#7F52FF]" /> }, // Kotlin purple
  { name: "PHP / Codeigniter", icon: <SiCodeigniter className="text-[#EE4323]" /> }, // CI orange-red
  { name: "Node / Express", icon: <SiNodedotjs className="text-[#68A063]" /> }, // Node green
  { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> }, // NestJS pink-red
  { name: "NextJS", icon: <SiNextdotjs className="text-black dark:text-white" /> }, // Next.js adapt
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> }, // JS yellow
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }, // MySQL blue
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> }, // PostgreSQL dark blue
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }, // Firebase yellow
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> }, // Git orange
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> }, // GitHub adapt
  { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> }, // Linux yellow
  { name: "VS Code", icon: <DiVisualstudio className="text-[#007ACC]" /> }, // VS Code blue
];

export default function TechStack() {
  return (
    <section className="card p-5">
      <h2 className="font-semibold text-lg mb-3">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {techs.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm"
          >
            {t.icon}
            <span className="text-sm font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
