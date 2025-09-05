"use client";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [data, setData] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/github-languages")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="card p-5">
        <h2 className="font-semibold text-lg mb-2">GitHub — Most Used Languages</h2>
        <p className="text-slate-500 dark:text-slate-400">Loading...</p>
      </div>
    );
  }

  return (
    <section className="card p-5">
      <h2 className="font-semibold text-lg mb-2">GitHub — Most Used Languages</h2>
      <div className="space-y-2">
        {Object.entries(data).map(([lang, percent]) => (
          <div key={lang}>
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>{lang}</span>
              <span>{percent}%</span>
            </div>
            <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
