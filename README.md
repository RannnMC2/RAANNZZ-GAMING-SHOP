# RAANNZZ - Gaming Shop

Repo ini berisi scaffold awal untuk marketplace jual-beli akun game.

Tujuan: starter repo (MVP) dengan frontend Next.js + backend Express, README, dan skrip dev sehingga Anda atau tim bisa lanjutkan pengembangan.

Stack (default di scaffold):
- Frontend: Next.js (React)
- Backend: Node.js + Express
- Database: (belum terpasang) rekomendasi: PostgreSQL
- Storage: S3-compatible untuk gambar

Apa yang ada di repo ini:
- /frontend - starter Next.js app (minimal)
- /backend - starter Express API (minimal)
- docker-compose.yml - menjalankan frontend + backend untuk development
- README.md - panduan singkat

Langkah cepat menjalankan (butuh Node.js v18+):
1. Clone repo
2. Jalankan backend:
   cd backend
   cp .env.example .env
   npm install
   npm run dev

3. Jalankan frontend:
   cd frontend
   npm install
   npm run dev

Atau gunakan docker (jika telah terpasang):
  docker-compose up --build

Langkah berikutnya yang saya sarankan:
- Tambahkan database (Postgres) dan migrasi schema
- Integrasi storage (S3) untuk upload gambar
- Setup provider pembayaran sandbox (Stripe)
- Implement auth (JWT atau sesi), validasi dan rate-limit
- Buat issue awal (TODO) untuk endpoints utama

Jika Anda mau, saya bisa lanjutkan menambahkan fitur: auth, listings CRUD, upload gambar, dan integrasi Stripe sandbox.
