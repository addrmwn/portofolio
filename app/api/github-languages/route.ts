import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME; // ganti sama username kamu
    const token = process.env.GITHUB_TOKEN;

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    const repos = await reposRes.json();

    const langTotals: Record<string, number> = {};

    for (const repo of repos) {
      const langRes = await fetch(repo.languages_url, {
        headers: token ? { Authorization: `token ${token}` } : {},
      });
      const langs = await langRes.json();
      for (const [lang, bytes] of Object.entries(langs)) {
        langTotals[lang] = (langTotals[lang] || 0) + (bytes as number);
      }
    }

    // 3. Hitung persen
const total = Object.values(langTotals).reduce((a, b) => a + b, 0);
let percentages = Object.fromEntries(
  Object.entries(langTotals).map(([lang, bytes]) => [
    lang,
    ((bytes / total) * 100).toFixed(2),
  ])
);

// Exclude bahasa yang gak relevan
const excluded = ["Jupyter Notebook", "Hack", "Shell"];
percentages = Object.fromEntries(
  Object.entries(percentages).filter(([lang]) => !excluded.includes(lang))
);

// Sort desc & ambil top 5
const top5 = Object.fromEntries(
  Object.entries(percentages)
    .sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]))
    .slice(0, 5)
);

return NextResponse.json(top5);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch GitHub languages" }, { status: 500 });
  }
}
