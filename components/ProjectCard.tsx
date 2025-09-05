"use client";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export default function ProjectCard({ p, onClick }: any) {
  return (
    <div className="card hover:shadow-lg transition flex flex-col">
      {/* Thumbnail - klik di sini aja */}
      <div className="thumb cursor-pointer" onClick={() => onClick(p)}>
        <Image
          src={p.images?.[0] || "/images/placeholder.png"}
          alt={p.title}
          width={400}
          height={250}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-ink-dim">{p.description}</p>

          {/* Tech Stack */}
          {p.tech && p.tech.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tech.map((t: string, idx: number) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center gap-2">
          {p.link ? (
            <>
              <span className="badge badge-oss">Public</span>
              <Link
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </Link>
            </>
          ) : (
            <span className="badge badge-private">Private</span>
          )}
        </div>
      </div>
    </div>
  );
}
