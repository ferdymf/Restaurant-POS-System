
# Restaurant POS System

Aplikasi Point of Sale (POS) sederhana berbasis web untuk restoran, dibangun dengan Vite + React + TypeScript + TailwindCSS. Aplikasi ini mendukung pemesanan, keranjang, serta proses pembayaran dengan validasi yang aman.

## Fitur Utama
- **Daftar menu interaktif**: Grid produk dengan kategori (All, Drinks, Main Course, Beverages, Desserts) dan animasi transisi.
- **Keranjang belanja**: Tambah, hapus item, dan ubah kuantitas dengan perhitungan total otomatis.
- **Pembayaran**: Metode Cash, Credit Card, dan E-Wallet.
- **Validasi cash yang aman**: Transaksi hanya diproses jika nominal cash valid dan >= total. Kembalian ditampilkan hanya saat input valid.
- **Dark mode**: Mode gelap/terang dengan penyimpanan preferensi di `localStorage`.
- **Animasi halus**: Transisi halaman dan item menggunakan `react-transition-group`.

## Tech Stack
- **Build**: Vite 5
- **UI**: React 18, TypeScript
- **Style**: TailwindCSS, PostCSS, Autoprefixer
- **Ikon**: lucide-react
- **Animasi**: react-transition-group
- **Linting**: ESLint (Flat config, TypeScript ESLint)

## Persyaratan
- Node.js 18 atau lebih baru (sesuai kebutuhan Vite 5)
- NPM (terinstal bersama Node.js)

## Menjalankan Secara Lokal
1. Instal dependensi:
   ```bash
   npm install
   ```
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

## Skrip yang Tersedia
- `npm run dev` — Menjalankan server pengembangan Vite.
- `npm run build` — Build untuk produksi ke folder `dist/`.
- `npm run preview` — Menjalankan preview build produksi secara lokal.
- `npm run lint` — Menjalankan ESLint.

## Catatan Perilaku Pembayaran Tunai
- Input nominal diterima sebagai teks dan diparsing secara aman, mengabaikan karakter non-angka.
- Tombol "Process Payment" akan non-aktif sampai:
  - Metode pembayaran dipilih, dan
  - Jika memilih Cash, nominal yang dimasukkan valid serta `>= total`.
- Kembalian (`Change`) hanya ditampilkan jika input valid dan tidak menghasilkan `NaN`.

## Struktur Proyek Singkat
- `src/main.tsx` — Entry React + mounting root.
- `src/App.tsx` — UI dan logika POS, keranjang, pembayaran, dark mode.
- `src/index.css` — Tailwind directives dan animasi CSS tambahan.
- `vite.config.ts` — Konfigurasi Vite.
- `tailwind.config.js`, `postcss.config.js` — Konfigurasi Tailwind & PostCSS.

## Build & Deploy
Build produksi:
```bash
npm run build
```
Hasil build tersedia di folder `dist/` dan dapat dideploy ke layanan statis seperti Netlify/Vercel/Cloudflare Pages.

---
Jika menemukan bug atau memiliki usulan fitur, silakan buat issue atau pull request.
