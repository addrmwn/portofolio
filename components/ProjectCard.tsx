"use client";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export default function ProjectCard({ p, onClick }: any) {
  return (
    <div
      className="card cursor-pointer hover:shadow-lg transition flex flex-col"
      onClick={() => onClick(p)}
    >
      {/* Thumbnail */}
      <div className="thumb">
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
        </div>

        {/* Footer: badge + GitHub button */}
        <div className="mt-3 flex items-center gap-2">
          {p.link ? (
            <>
              <span className="badge badge-oss">Public</span>
              <Link
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // biar klik link gak buka modal
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
