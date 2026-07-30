/**
 * KAMUS_CATATAN — sumber data (dictionary) untuk seluruh catatan.
 * File ini HANYA berisi data. Logika tampilan ada di render.js dan rekomendasi.js.
 *
 * Struktur setiap entri:
 *   1. judul         : string
 *   2. faseCatatan   : "Benih" | "Berkembang" | "Matang"
 *   3. kode          : { rumpunIlmu: string, tingkat: string }
 *   4. kataKunci     : string[]
 *
 * Field tambahan (di luar 4 field wajib) untuk kebutuhan teknis:
 *   id   : pengenal unik kartu
 *   file : path ke file .md yang akan di-fetch
 */

const KAMUS_CATATAN = [
  {
    id: "ck-001",
    judul: "Pengantar Machine Learning",
    faseCatatan: "Berkembang",
    kode: { rumpunIlmu: "Ilmu Komputer", tingkat: "Dasar" },
    kataKunci: ["machine learning", "algoritma", "data", "kecerdasan buatan"],
    file: "notes/pengantar-machine-learning.md"
  },
  {
    id: "ck-002",
    judul: "Struktur Data Lanjutan",
    faseCatatan: "Matang",
    kode: { rumpunIlmu: "Ilmu Komputer", tingkat: "Menengah" },
    kataKunci: ["struktur data", "algoritma", "pohon", "graf"],
    file: "notes/struktur-data-lanjutan.md"
  },
  {
    id: "ck-003",
    judul: "Dasar Termodinamika",
    faseCatatan: "Berkembang",
    kode: { rumpunIlmu: "Fisika", tingkat: "Dasar" },
    kataKunci: ["energi", "entropi", "kalor", "hukum fisika"],
    file: "notes/dasar-termodinamika.md"
  },
  {
    id: "ck-004",
    judul: "Filsafat Bahasa",
    faseCatatan: "Benih",
    kode: { rumpunIlmu: "Filsafat", tingkat: "Lanjut" },
    kataKunci: ["bahasa", "makna", "logika", "epistemologi"],
    file: "notes/filsafat-bahasa.md"
  }
];

// Ekspor untuk lingkungan module (opsional) & tetap tersedia sebagai variabel global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { KAMUS_CATATAN };
}
