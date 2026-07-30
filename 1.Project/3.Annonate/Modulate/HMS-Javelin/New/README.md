# Katalog Catatan — Template Viewer Markdown

Template untuk menampilkan catatan `.md` (mis. dari Obsidian) dengan tampilan "kartu katalog perpustakaan", ditambah halaman rekomendasi catatan terkait.

## Struktur folder

```
index.html          → halaman baca (daftar kartu + isi markdown)
rekomendasi.html     → halaman rekomendasi catatan terkait
css/style.css        → seluruh gaya visual
js/dictionary.js     → SUMBER DATA (KAMUS_CATATAN) — edit di sini saja
js/render.js         → logika tampilan untuk index.html
js/rekomendasi.js     → logika tampilan + skor kecocokan untuk rekomendasi.html
notes/*.md            → file markdown contoh
```

Data dan tampilan sengaja dipisah: **js/dictionary.js** tidak tahu apa-apa soal HTML/CSS, dan **render.js / rekomendasi.js** tidak menyimpan data catatan sama sekali — semuanya mengambil dari `KAMUS_CATATAN`.

## Cara menambah catatan

1. Taruh file `.md` baru di folder `notes/`.
2. Tambahkan satu entri baru di `js/dictionary.js`:

```js
{
  id: "ck-005",
  judul: "Judul Catatan Baru",
  faseCatatan: "Benih",              // "Benih" | "Berkembang" | "Matang"
  kode: { rumpunIlmu: "...", tingkat: "..." }, // mis. "Ilmu Komputer", "Dasar"
  kataKunci: ["kata1", "kata2"],
  file: "notes/nama-file.md"
}
```

Kartu baru otomatis muncul di halaman Baca dan ikut dihitung di halaman Rekomendasi — tidak perlu mengubah HTML/JS lain.

## Menjalankan

Karena halaman ini mengambil file `.md` lewat `fetch()`, browser butuh diakses lewat server lokal (bukan dibuka langsung sebagai file `file://`). Contoh:

```bash
cd katalog-catatan
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

Atau dengan Node: `npx serve .`

## Logika rekomendasi

Skor kecocokan antar dua catatan dihitung dari:

| Faktor              | Bobot |
|----------------------|:-----:|
| Kata kunci sama (per kata) | 3 |
| Rumpun ilmu sama      | 2 |
| Tingkat sama           | 1 |
| Fase catatan sama      | 1 |

Persentase yang ditampilkan adalah skor aktual dibagi skor maksimum teoretis catatan sumber. Ubah bobot ini di `BOBOT` pada `js/rekomendasi.js` sesuai kebutuhan.
