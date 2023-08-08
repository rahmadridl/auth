## Rest API dengan ExpressJS

Ini adalah contoh aplikasi Rest API sederhana menggunakan ExpressJS untuk registrasi, login, dan mendapatkan informasi pengguna. Aplikasi ini menggunakan PostgreSQL sebagai database dan Sequelize sebagai ORM.

### Instalasi

1. Clone repositori ini:

```
git clone https://github.com/rahmadridl/auth.git
```

2. Pindah ke direktori proyek:

```
cd main
```

3. Install semua dependensi:

```
npm install
```

### Konfigurasi Database

1. Import database PostgreSQL pada schema.sql.
2. Konfigurasikan parameter koneksi database di dalam `.env_example`:

```
DB_NAME = ""
DB_USER = ""
DB_PASSWORD = ""
DB_HOST = ""
DB_PORT = ""
```

3. Buat baru file `.env`, copy dari `.env_example`

### Menjalankan Aplikasi

1. Jalankan aplikasi:

```
npm run dev
```

Aplikasi akan berjalan pada `http://localhost:3000`.

### Endpoint

- `POST /api/register`: Endpoint untuk mendaftar pengguna baru. Gunakan JSON body dengan properti `name`, `email`, dan `password`.

- `POST /api/login`: Endpoint untuk login pengguna. Gunakan JSON body dengan properti `email` dan `password`.

- `GET /api/me`: Endpoint untuk mendapatkan informasi pengguna yang sudah login. Bawa token JWT yang valid pada header dengan properti `Authorization`.

### Catatan

- Pastikan PostgreSQL sudah terinstal dan berjalan dengan benar di mesin Anda.
- Pastikan bahwa konfigurasi koneksi ke database dalam `app.js` sudah benar.
- Jika ada masalah dengan dependensi, coba jalankan `npm install` ulang.

### Lisensi

[MIT License](LICENSE)