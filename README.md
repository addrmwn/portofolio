# 🚀 Personal Portfolio

Portofolio modern & minimalis untuk menampilkan project, tech stack, dan pengalaman saya sebagai **Fullstack Developer** & **Network Engineer**.

## ✨ Features
- ⚡ Built with [Next.js](https://nextjs.org/) & [Tailwind CSS](https://tailwindcss.com/)
- 🎨 Dark mode with smooth toggle animation
- 📊 GitHub stats & tech stack integration (real-time from GitHub API)
- 📱 Responsive design (mobile & desktop ready)

## 📦 Installation, Configuration & Run

```bash
# 📥 Clone repo
git clone https://github.com/addrmwn/portofolio.git
cd portofolio

# 📦 Install dependencies
npm install

# ⚙️ Salin file environment & edit
cp env-example .env

# 📝 Isi file .env sesuai kebutuhan
# 🔑 Ganti dengan username GitHub kamu
GITHUB_USERNAME=your-github-username

# 🔒 Token opsional biar gak kena rate limit
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxx

# 🚀 Running the App

# 💻 Development mode
npm run dev

# 🏗️ Production build
npm run build
npm start

