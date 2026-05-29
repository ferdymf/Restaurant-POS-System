<div align="center">

# 🍽️ Restaurant POS System
### Point of Sale berbasis Web untuk Restoran

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

Aplikasi POS sederhana berbasis web untuk restoran — mendukung pemesanan,
keranjang, serta proses pembayaran dengan validasi yang aman.

</div>

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🗂️ **Menu Interaktif** | Grid produk dengan filter kategori (All, Drinks, Main Course, Beverages, Desserts) dan animasi transisi |
| 🛒 **Keranjang Belanja** | Tambah/hapus item, ubah kuantitas, dan perhitungan total otomatis |
| 💳 **Multi-Metode Pembayaran** | Mendukung Cash, Credit Card, dan E-Wallet |
| 💵 **Validasi Cash Aman** | Transaksi hanya diproses jika nominal ≥ total; kembalian ditampilkan hanya saat input valid |
| 🌙 **Dark Mode** | Toggle gelap/terang dengan preferensi tersimpan di `localStorage` |
| ✨ **Animasi Halus** | Transisi halaman dan item menggunakan `react-transition-group` |

---

## 🛠️ Tech Stack

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

| Kategori | Library |
|----------|---------|
| **Build** | Vite 5 |
| **UI** | React 18, TypeScript |
| **Style** | TailwindCSS, PostCSS, Autoprefixer |
| **Ikon** | lucide-react |
| **Animasi** | react-transition-group |
| **Linting** | ESLint (Flat config, TypeScript ESLint) |

---

## ⚡ Menjalankan Secara Lokal

### Prasyarat
- **Node.js 18+** — unduh di [nodejs.org](https://nodejs.org/)
- **NPM** — terinstall otomatis bersama Node.js

### Langkah

**1. Clone repositori**
```bash
git clone https://github.com/ferdymf/restaurant-pos.git
cd restaurant-pos
```

**2. Install dependensi**
```bash
npm install
```

**3. Jalankan server development**
```bash
npm run dev
```

Aplikasi berjalan di `http://localhost:3000` 🚀

---

## 📜 Skrip yang Tersedia

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Menjalankan server development Vite |
| `npm run build` | Build untuk produksi ke folder `dist/` |
| `npm run preview` | Preview hasil build produksi secara lokal |
| `npm run lint` | Menjalankan ESLint untuk cek kode |

---

## 🗂️ Struktur Proyek

```
restaurant-pos/
├── src/
│   ├── main.tsx          # Entry React + mounting root
│   ├── App.tsx           # UI & logika POS, keranjang, pembayaran, dark mode
│   └── index.css         # Tailwind directives & animasi CSS tambahan
├── vite.config.ts        # Konfigurasi Vite
├── tailwind.config.js    # Konfigurasi Tailwind
├── postcss.config.js     # Konfigurasi PostCSS
└── package.json
```

---

## 💡 Catatan Perilaku Pembayaran Tunai

Tombol **"Process Payment"** akan nonaktif sampai kondisi berikut terpenuhi:

- ✅ Metode pembayaran sudah dipilih
- ✅ Jika memilih **Cash**: nominal yang dimasukkan valid dan `>= total`

Hal lain yang perlu diketahui:
- Input nominal diparse secara aman — karakter non-angka diabaikan otomatis
- Kembalian (*Change*) hanya muncul jika input valid dan tidak menghasilkan `NaN`

---

## 🚢 Build & Deploy

Build untuk produksi:
```bash
npm run build
```

Hasil build tersedia di folder `dist/` — siap dideploy ke:

[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

---

<div align="center">

Menemukan bug atau punya usulan fitur? Buat [issue](../../issues) atau [pull request](../../pulls)!

⭐ Jika bermanfaat, beri bintang di GitHub!

</div>
