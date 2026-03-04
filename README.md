# 🚀 Bayucaraka ITS – Final Project

**Bayucaraka ITS** adalah landing page interaktif untuk tim riset **UAV (Unmanned Aerial Vehicle)** dari **Institut Teknologi Sepuluh Nopember**.  
Project ini dibuat dengan fokus pada **performa tinggi**, **desain modern (Glassmorphism)**, dan **visual 3D dinamis**.

---

# ✨ Fitur Utama

### 🚀 Interactive Hero Section
Header dinamis dengan animasi teks gradien serta ornamen background yang bergerak.

### 🌌 3D Particle Background
Latar belakang interaktif menggunakan **Three.js** untuk memberikan nuansa futuristik.

### 🌓 Dark / Light Mode
Dukungan tema gelap dan terang dengan transisi halus.

### 📱 Fully Responsive
Layout optimal di berbagai perangkat: mobile, tablet, hingga desktop.

### 🏅 Achievement Wall
Menampilkan daftar prestasi tim berdasarkan tahun.

### 🛠 Division Showcase
Informasi tentang divisi dalam tim:
- VTOL
- Fixed Wing
- Racing Plane
- Tech Development
- Official

### 📸 Mission Logs Gallery
Galeri kegiatan tim dengan efek hover interaktif.

---

# 🛠 Tech Stack

Project ini menggunakan teknologi modern untuk performa maksimal.

| Technology | Description |
|---|---|
| **Next.js 15+** | Framework React dengan App Router |
| **React 19** | UI Library |
| **Tailwind CSS 4** | Styling modern utility-first |
| **Three.js** | 3D animation |
| **Lucide React** | Icon library |
| **TypeScript** | Static typing |
| **Next Themes** | Dark / Light mode |

---

# 📋 Prasyarat

Pastikan sudah terinstall:

- Node.js **v20+**
- npm / yarn / pnpm / bun

Cek versi Node:

```bash
node -v
```

---

# ⚡ Instalasi & Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/username/final-project-bayucaraka-its.git
cd final-project-bayucaraka-its
```

### 2. Install Dependencies

```bash
npm install
```

atau

```bash
pnpm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka di browser:

```
http://localhost:3000
```

---

# 🏗 Build untuk Production

```bash
npm run build
npm run start
```

---

# 📂 Struktur Project

```
.
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page utama
│   └── globals.css       # Global styling & animation
│
├── components/           # Reusable components
├── public/               # Static assets
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# 💡 Contoh Modifikasi Konten

Edit file:

```
app/page.tsx
```

Contoh menambahkan achievement baru:

```ts
const rawAchievements = [
  {
    year: 2026,
    category: "KRTI",
    item: "1st Place Special Award",
    badge: "Terbaru",
  },
];
```

---

# 🤝 Contributing

Kontribusi selalu terbuka!

1. Fork repository ini
2. Buat branch fitur

```bash
git checkout -b feature/nama-fitur
```

3. Commit perubahan

```bash
git commit -m "Add: fitur baru"
```

4. Push branch

```bash
git push origin feature/nama-fitur
```

5. Buat Pull Request

---

# 📄 License

Project ini menggunakan **MIT License**.

---

# 🇮🇩 Garudaku Jaya Selalu
