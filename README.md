# Bayucaraka ITS - Final Project 🚀

**Bayucaraka ITS** adalah landing page interaktif untuk tim riset UAV (Unmanned Aerial Vehicle) dari Institut Teknologi Sepuluh Nopember. Project ini dibangun dengan fokus pada performa tinggi, desain modern berbasis "Glassmorphism", dan elemen visual 3D yang dinamis.

---

## ✨ Fitur Utama

- **🚀 Interactive Hero Section**: Header dinamis dengan animasi teks gradien dan ornamen latar belakang yang bergerak.
- **🌌 3D Particle Background**: Latar belakang interaktif menggunakan library Three.js untuk memberikan kesan futuristik.
- **🌓 Toggle Dark/Light Mode**: Dukungan penuh untuk tema gelap dan terang dengan transisi yang halus.
- **📱 Responsive Design**: Layout yang optimal di berbagai perangkat, mulai dari smartphone hingga desktop.
- **🏅 Achievement Wall**: Komponen yang menampilkan sejarah prestasi tim yang dikelompokkan berdasarkan tahun.
- **🛠 Division Showcase**: Informasi detail mengenai divisi strategis tim (VTOL, FW, Racing Plane, Tech Dev, Official).
- **📸 Mission Logs Gallery**: Galeri visual kegiatan tim dengan efek hover yang interaktif.

---

## 🛠 Teknologi yang Digunakan

Proyek ini menggunakan stack teknologi modern untuk memastikan kecepatan dan kemudahan pengembangan:

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animasi 3D**: [Three.js](https://threejs.org/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Bahasa**: [TypeScript](https://www.typescript.lang/)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes)

---

## 📋 Prasyarat Instalasi

Pastikan Anda sudah menginstal perangkat lunak berikut di komputer Anda:

- **Node.js** (Versi 20.x atau terbaru)
- **npm**, **yarn**, **pnpm**, atau **bun** sebagai package manager.

---

## 🚀 Memulai Proyek

1. **Clone Repository**
   ```bash
   git clone [https://github.com/username/final-project-bayucaraka-its.git](https://github.com/username/final-project-bayucaraka-its.git)
   cd Final-Project-Bayucaraka-ITS
Instal Dependensi

Bash
npm install
# atau
pnpm install
Jalankan Server Pengembangan

Bash
npm run dev
Buka http://localhost:3000 di browser Anda untuk melihat hasilnya.

Build untuk Produksi

Bash
npm run build
npm run start
📂 Struktur Proyek
Plaintext
.
├── app/
│   ├── layout.tsx       # Root layout & font configuration
│   ├── page.tsx         # Main entry point (Landing Page)
│   └── globals.css      # Tailwind & custom CSS animations
├── components/          # Reusable UI components
├── public/              # Statics assets (images, icons, etc.)
├── package.json         # Project dependencies & scripts
└── tsconfig.json        # TypeScript configuration
💡 Contoh Penggunaan
Untuk memodifikasi konten seperti daftar prestasi atau divisi, Anda dapat mengedit file app/page.tsx. Contoh menambahkan data prestasi baru:

TypeScript
const rawAchievements = [
  {
    year: 2026,
    category: "KRTI",
    item: "1st place Special Award",
    badge: "Terbaru",
  },
  // ...data lainnya
];
🤝 Kontribusi
Kontribusi selalu terbuka untuk pengembangan project ini!

Fork project ini.

Buat branch fitur baru (git checkout -b fitur/FiturKeren).

Commit perubahan Anda (git commit -m 'Menambahkan fitur keren').

Push ke branch tersebut (git push origin fitur/FiturKeren).

Buat Pull Request.

📄 Lisensi
Project ini dilisensikan di bawah Lisensi MIT - lihat file LICENSE untuk detail lebih lanjut.

#GarudakuJayaSelalu 🇮🇩
