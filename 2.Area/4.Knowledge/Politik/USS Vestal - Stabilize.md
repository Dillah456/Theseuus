
[[USS Vestal - Pendahuluan]]
[[USS Vestal - Initiate]]
[[#FASE 2.3 — ANNOTATE]]
	[[#BAGIAN I CATATAN RINGKASAN DI LUAR CORNELL METHOD]]
	[[#BAGIAN II PEMISAHAN SUMMARY DARI CORNELL METHOD]]
	[[#BAGIAN III GRAPH LEVEL 2 — GENERAL UNIFIED GRAPH]]
	[[#BAGIAN IV SUMMARY TERPISAH (NON-CORNELL)]]
	[[#BAGIAN V STATUS & TRANSISI]]

# DOKUMEN VESTAL - STABILIZE
## FASE 2.3 — ANNOTATE
### Catatan Ringkasan di Luar Cornell Method

---

```yaml
doc_code: VESTAL-STABILIZE
phase: FASE-2.3-ANNOTATE
parent_doc: VESTAL-INITIATE
method_override: NON-CORNELL (Narrative & Graph Synthesis)
purpose: >
  Memisahkan Summary dari struktur Cornell,
  menjelaskan implementasi PARA sebagai pemisah aset informasi,
  dan menyatukan Graph Level 0 + Level 1 menjadi Graph Level 2 (General).
status: ACTIVE
```

---

## BAGIAN I: CATATAN RINGKASAN DI LUAR CORNELL METHOD

### 1.1 Apa yang Telah Dilakukan Cornell Method pada Fase Sebelumnya?

Cornell Method pada dokumen **VESTAL-INITIATE** berfungsi sebagai **mesin encoding awal**. Ia memecah bahan bacaan kompleks menjadi tiga kolom fungsional:

| Komponen Cornell | Fungsi dalam Fase Sebelumnya |
|---|---|
| **Cue (Kolom Kiri)** | Mengidentifikasi pertanyaan kunci: *"Apa itu hawa nafsu?", "Bagaimana teori kesehatan menjelaskannya?", "Apa korelasi kriminologisnya?"* |
| **Notes (Kolom Kanan)** | Menyimpan data mentah: ayat, hadis, jurnal, teori, data statistik, dan catatan historis. |
| **Summary (Bawah)** | Merangkum inti pembahasan menjadi satu kalimat padat per topik. |

Namun, Cornell Method memiliki **keterbatasan struktural**: ia tidak dirancang untuk **memisahkan aset informasi berdasarkan fungsi operasional**. Semua sumber (dalil, jurnal, teori, data hukum) tercampur dalam satu ruang catatan tanpa hierarki tindakan.

**Di sinilah PARA Method masuk sebagai lapisan arsitektur informasi.**

---

### 1.2 Tujuan Implementasi PARA Method: Memisahkan Tinjauan Literatur sebagai Aset Informasi

PARA Method (*Projects, Areas, Resources, Archives*) bukan sekadar sistem folder. Dalam konteks dokumen ini, ia berfungsi sebagai **protokol pemisahan epistemologis**:

#### A. Mengapa Literatur Harus Dipisahkan?

```
Tanpa PARA:
  → Semua sumber diperlakukan sama.
  → Ayat Al-Qur'an dicampur dengan opini media.
  → Teori akademik dicampur dengan data statistik mentah.
  → Tidak ada kejelasan: mana yang menjadi DASAR HUKUM, mana yang menjadi KONTEKS SOSIAL, mana yang menjadi TINDAKAN.

Dengan PARA:
  → Setiap sumber memiliki "alamat operasional".
  → Literatur menjadi ASET INFORMASI yang dapat dipanggil sesuai kebutuhan proyek.
  → Pemisahan mencegah kontaminasi interpretasi.
```

#### B. Pemisahan Aset Informasi dalam PARA

| PARA Layer | Peran terhadap Tinjauan Literatur | Contoh Konkret |
|---|---|---|
| **PROJECTS** | Literatur yang **harus segera diproses** untuk output tertentu. | *"Saya butuh QS 24:30-31 + Teori Male Gaze untuk menulis bagian psikologi lelaki minggu ini."* |
| **AREAS** | Literatur yang menjadi **tanggung jawab berkelanjutan** tanpa deadline. | *"Saya bertanggung jawab memahami dan memperbarui wawasan tentang neurosains hawa nafsu."* |
| **RESOURCES** | Literatur sebagai **bank referensi** yang disimpan untuk digunakan kapan saja. | *"Kumpulan hadis tentang tazkiyah, jurnal Fredrickson 1997, data Komnas Perempuan 2023."* |
| **ARCHIVES** | Literatur yang **sudah selesai diproses** dan tidak lagi aktif, tetapi tetap tersimpan. | *"Catatan Fase 1 mentah, draft awal Cornell."* |

#### C. Implikasi Praktis Pemisahan Ini

1. **Kejernihan Epistemik:** Ketika membahas hukum, kita hanya memanggil aset dari `R1` (Al-Qur'an) dan `R6` (Regulasi). Ketika membahas psikologi, kita memanggil `R4` (Jurnal). Tidak ada pencampuran otoritas.

2. **Perlindungan dari Bias:** Dengan memisahkan sumber, kita mencegah "cherry-picking" — memilih satu ayat untuk membenarkan satu teori sosial tanpa konteks.

3. **Skalabilitas:** Ketika dokumen ini berkembang (misalnya ditambah kajian fiqih perbandingan mazhab), cukup menambahkan entri di `RESOURCES` tanpa mengganggu struktur `PROJECTS` yang sedang berjalan.

---

### 1.3 Prosedur Kebiasaan yang Harus Diimplementasikan

Berdasarkan seluruh pemetaan dari Fase 2.1 hingga 2.2, berikut adalah **Prosedur Kebiasaan** (*Procedural Habits*) yang harus dijalankan agar informasi tidak menjadi beban kognitif, melainkan menjadi **sistem pengetahuan yang hidup**:

#### A. Prosedur Kebiasaan Kognitif (Internal)

| No | Kebiasaan | Implementasi | Frekuensi |
|---|---|---|---|
| 1 | **Muhasabah Kognitif** | Sebelum mengonsumsi konten visual/media, aktifkan Prefrontal Cortex dengan bertanya: *"Apakah ini memicu dopamin atau membangun pengetahuan?"* | Setiap hari |
| 2 | **Encoding Berbasis Pertanyaan** | Setiap informasi baru harus di-encode dengan pertanyaan (Cue), bukan sekadar disimpan. *"Apa yang ingin saya jawab dengan informasi ini?"* | Setiap kali belajar |
| 3 | **Pemisahan Sumber & Opini** | Ketika membaca, pisahkan: *"Ini data empiris"* vs *"Ini interpretasi penulis"* vs *"Ini keyakinan teologis"*. Gunakan PARA untuk menyimpannya di layer yang tepat. | Setiap kali membaca |
| 4 | **Refleksi Intersectional** | Ketika menganalisis kasus, tanyakan: *"Siapa yang paling rentan di sini? Apakah saya melihat dari kacamata Rio Tsukatsuki (struktur) atau Urawa Hanako (subjek)?"* | Setiap kali menganalisis |

#### B. Prosedur Kebiasaan Operasional (Sistem Informasi)

| No | Kebiasaan | Implementasi | Frekuensi |
|---|---|---|---|
| 5 | **Weekly Review PARA** | Setiap akhir minggu, tinjau: Apakah ada `PROJECTS` yang sudah selesai dan harus masuk `ARCHIVES`? Apakah ada `RESOURCES` yang perlu dipromosikan ke `PROJECTS`? | Mingguan |
| 6 | **Graph Audit** | Periksa apakah ada node di Graph Level 0/1/2 yang belum terhubung. Apakah ada hadis tanpa mapping ayat? Apakah ada teori tanpa aplikasi praktis? | Bulanan |
| 7 | **Ethical Boundary Check** | Sebelum mempublikasikan atau mendiskusikan temuan, verifikasi: *"Apakah narasi ini berpotensi victim-blaming? Apakah saya menggunakan abstraksi Rio/Hanako dengan benar?"* | Setiap kali output |
| 8 | **Source Triangulation** | Setiap klaim sensitif harus memiliki minimal 3 sumber dari layer PARA yang berbeda (misal: 1 dalil + 1 jurnal + 1 data empiris). | Setiap kali klaim |

#### C. Prosedur Kebiasaan Sosial (Eksternal)

| No | Kebiasaan | Implementasi | Frekuensi |
|---|---|---|---|
| 9 | **Anti-Profiling Stance** | Ketika menyaksikan atau mendengar narasi yang menyalahkan korban berdasarkan pakaian/penampilan, aktif gunakan kerangka `URAWA_HANAKO`: *"Ini adalah profiling ekstra-legal, bukan analisis."* | Situasional |
| 10 | **Structural Accountability** | Ketika menganalisis kebijakan atau kasus hukum, aktif gunakan kerangka `RIO_TSUKATSUKI`: *"Siapa yang diuntungkan oleh narasi ini? Apakah ini melindungi pelaku?"* | Situasional |
| 11 | **Knowledge Sharing Berbasis PARA** | Ketika berbagi pengetahuan, sesuaikan dengan audiens: Untuk akademisi → `RESOURCES`. Untuk aktivis → `PROJECTS`. Untuk diri sendiri → `AREAS`. | Situasional |

---

## BAGIAN II: PEMISAHAN SUMMARY DARI CORNELL METHOD

### 2.1 Mengapa Summary Dipisahkan?

Dalam Cornell Method, Summary berada di bagian bawah halaman dan bersifat **terikat pada satu sesi catatan**. Namun dalam dokumen sebesar ini, Summary harus:

1. **Berdiri sendiri** sebagai entitas pengetahuan yang dapat dipanggil tanpa membuka seluruh catatan.
2. **Menjadi jembatan** antara Graph Level 0 (teologis) dan Graph Level 1 (teoretis).
3. **Bersifat general** sehingga dapat dipahami tanpa perlu membaca seluruh detail encoding.

Oleh karena itu, Summary diekstraksi dari Cornell dan ditransformasi menjadi **Graph Level 2**.

---

## BAGIAN III: GRAPH LEVEL 2 — GENERAL UNIFIED GRAPH

### 3.1 Definisi Graph Level 2

```yaml
graph_level: 2
scope: GENERAL_UNIFIED
purpose: >
  Menyatukan Graph Level 0 (pemetaan Hadis-Qur'an)
  dan Graph Level 1 (pemetaan Ahli-Teori)
  menjadi satu ekosistem pengetahuan yang saling terhubung.
node_types:
  - THEOLOGICAL (dari Level 0)
  - ACADEMIC (dari Level 1)
  - ETHICAL (abstraksi Rio/Hanako)
  - PROCEDURAL (kebiasaan implementasi)
edge_types:
  - REINFORCES (saling memperkuat)
  - CRITIQUES (saling mengkritisi)
  - OPERATIONALIZES (menerjemahkan ke tindakan)
  - CONSTRAINS (membatasi/mengatur)
```

---

### 3.2 Node Registry (Gabungan Level 0 + Level 1)

```json
NODE_REGISTRY_L2 = {
  "theological_nodes": [
    {"id": "N_TH_01", "label": "Hawa Nafsu sebagai Ujian Jiwa", "source": ["Q_45_23", "Q_12_53", "H_TIRMIDZI_2459"]},
    {"id": "N_TH_02", "label": "Tazkiyatun Nafs & Pengendalian", "source": ["Q_91_7_10", "Q_79_40_41", "H_MUSLIM_2722"]},
    {"id": "N_TH_03", "label": "Menundukkan Pandangan & Anti-Objektifikasi", "source": ["Q_24_30", "Q_24_31", "H_MUSLIM_2564"]},
    {"id": "N_TH_04", "label": "Pakaian sebagai Identitas, Proteksi & Taqwa", "source": ["Q_33_59", "Q_7_26", "Q_33_33", "H_MUSLIM_2128"]},
    {"id": "N_TH_05", "label": "Keadilan & Anti-Kemudaratan", "source": ["Q_16_90", "Q_2_195", "H_IBN_MAJAH_LADARARA", "H_IBN_MAJAH_UJRAH"]},
    {"id": "N_TH_06", "label": "Relasi Rahmah & Anti-Kekerasan", "source": ["Q_30_21", "Q_4_19", "H_TIRMIDZI_BEST_TO_WOMEN"]}
  ],
  "academic_nodes": [
    {"id": "N_AC_01", "label": "Neurosains Dopamin & Prefrontal Cortex", "source": ["S_VOLKOW_2004", "S_MATTSON_2018"]},
    {"id": "N_AC_02", "label": "Objectification Theory & Self-Surveillance", "source": ["S_FREDRICKSON_1997", "S_FREDRICKSON_1998"]},
    {"id": "N_AC_03", "label": "Male Gaze & Konstruksi Visual", "source": ["S_MULVEY_1975", "S_FISKE_2009"]},
    {"id": "N_AC_04", "label": "Rape Myth & Victim Blaming", "source": ["S_BURT_1980", "S_KOMNAS_2023"]},
    {"id": "N_AC_05", "label": "Kapitalisme, Kontrak Seksual & Interseksionalitas", "source": ["S_FEDERICI_2004", "S_PATEMAN_1988", "S_CRENSHAW_1989"]},
    {"id": "N_AC_06", "label": "Agency, Piety & Postfeminism", "source": ["S_MAHMOOD_2005", "S_GILL_2007", "S_PINE_2014"]}
  ],
  "ethical_nodes": [
    {"id": "N_ET_01", "label": "RIO_TSUKATSUKI: Pembenaran Pelaku & Eksploitasi Hukum", "source": ["ETHICAL_BOUNDARIES_VESTAL"]},
    {"id": "N_ET_02", "label": "URAWA_HANAKO: Profiling & Eksploitasi Luar Hukum", "source": ["ETHICAL_BOUNDARIES_VESTAL"]}
  ],
  "procedural_nodes": [
    {"id": "N_PR_01", "label": "Muhasabah Kognitif & Encoding Berbasis Pertanyaan", "source": ["PROCEDURAL_HABITS"]},
    {"id": "N_PR_02", "label": "Weekly Review PARA & Graph Audit", "source": ["PROCEDURAL_HABITS"]},
    {"id": "N_PR_03", "label": "Anti-Profiling & Structural Accountability", "source": ["PROCEDURAL_HABITS"]}
  ]
}
```

---

### 3.3 Graph Level 2: Unified Edges

```json
GRAPH_LEVEL_2 = [
  {
    "edge_id": "GL2-001",
    "from": "N_TH_01",
    "to": "N_AC_01",
    "relation": "REINFORCES",
    "description": "Konsep hawa nafsu sebagai ujian jiwa (teologis) diperkuat oleh temuan neurosains tentang sistem dopamin dan reward.",
    "summary": (
      "Hawa nafsu dalam teologi dan dopamin dalam neurosains adalah dua bahasa untuk fenomena yang sama: dorongan primitif yang membutuhkan regulasi.",
      ["N_TH_01", "N_AC_01", "GL0-001", "GL1-001"]
    )
  },
  {
    "edge_id": "GL2-002",
    "from": "N_TH_02",
    "to": "N_AC_01",
    "relation": "OPERATIONALIZES",
    "description": "Tazkiyatun nafs (penyucian jiwa) adalah bentuk operasional dari penguatan Prefrontal Cortex melalui praktik berulang.",
    "summary": (
      "Ibadah, puasa, dan muhasabah adalah 'latihan Prefrontal Cortex' yang secara neurologis memperkuat kemampuan mengendalikan impuls.",
      ["N_TH_02", "N_AC_01", "GL0-002", "GL0-004", "GL1-001"]
    )
  },
  {
    "edge_id": "GL2-003",
    "from": "N_TH_03",
    "to": "N_AC_03",
    "relation": "CRITIQUES",
    "description": "Perintah menundukkan pandangan (QS 24:30) mengkritisi dan menawarkan solusi terhadap budaya Male Gaze yang dinormalisasi.",
    "summary": (
      "Ghadh al-bashar adalah intervensi teologis terhadap Male Gaze: mengalihkan tanggung jawab dari 'objek yang dilihat' ke 'subjek yang melihat'.",
      ["N_TH_03", "N_AC_03", "GL0-005", "GL1-003"]
    )
  },
  {
    "edge_id": "GL2-004",
    "from": "N_TH_03",
    "to": "N_AC_02",
    "relation": "REINFORCES",
    "description": "Anti-objektifikasi dalam Islam dan Objectification Theory saling memperkuat: keduanya menolak reduksi manusia menjadi tubuh.",
    "summary": (
      "Hadis 'Allah melihat hati, bukan rupa' dan Objectification Theory Fredrickson bermuara pada kesimpulan yang sama: objektifikasi merusak martabat manusia.",
      ["N_TH_03", "N_AC_02", "GL0-005", "GL1-002"]
    )
  },
  {
    "edge_id": "GL2-005",
    "from": "N_TH_04",
    "to": "N_AC_06",
    "relation": "REINFORCES",
    "description": "Pakaian sebagai taqwa dan identitas (QS 7:26, 33:59) sejalan dengan konsep agency spiritual Mahmood, namun perlu dikritisi oleh Gill agar tidak menjadi konformitas pasar.",
    "summary": (
      "Pakaian adalah medan negosiasi antara taqwa, identitas, dan tekanan pasar; ia bisa menjadi agency spiritual atau komoditas kapitalis.",
      ["N_TH_04", "N_AC_06", "GL0-006", "GL0-007", "GL1-005"]
    )
  },
  {
    "edge_id": "GL2-006",
    "from": "N_TH_04",
    "to": "N_ET_02",
    "relation": "CONSTRAINS",
    "description": "Prinsip pakaian taqwa TIDAK BOLEH digunakan sebagai justifikasi untuk profiling, persekusi, atau razia ekstra-legal terhadap Urawa Hanako.",
    "summary": (
      "Perintah berpakaian taqwa adalah norma spiritual individual, bukan lisensi bagi masyarakat atau negara untuk melakukan profiling dan kekerasan ekstra-legal.",
      ["N_TH_04", "N_ET_02", "GL0-008", "GL1-002"]
    )
  },
  {
    "edge_id": "GL2-007",
    "from": "N_TH_05",
    "to": "N_AC_04",
    "relation": "CRITIQUES",
    "description": "Prinsip keadilan dan anti-kemudaratan (la darara) mengkritisi Rape Myth Acceptance yang digunakan untuk membenarkan pelaku.",
    "summary": (
      "Keadilan Islam dan prinsip anti-kemudaratan menolak segala bentuk victim blaming; narasi 'pakaian provokatif' di pengadilan adalah bentuk kezaliman.",
      ["N_TH_05", "N_AC_04", "GL0-008", "GL1-004", "RIO_TSUKATSUKI"]
    )
  },
  {
    "edge_id": "GL2-008",
    "from": "N_TH_05",
    "to": "N_AC_05",
    "relation": "CRITIQUES",
    "description": "Keadilan ekonomi Islam (upah sebelum keringat kering) mengkritisi eksploitasi kapitalis dalam industri fashion dan beauty economy.",
    "summary": (
      "Prinsip keadilan ekonomi Islam bertentangan dengan eksploitasi buruh garmen dan komodifikasi tubuh dalam kapitalisme patriarkal.",
      ["N_TH_05", "N_AC_05", "GL0-009", "GL1-006"]
    )
  },
  {
    "edge_id": "GL2-009",
    "from": "N_TH_06",
    "to": "N_ET_01",
    "relation": "CRITIQUES",
    "description": "Relasi rahmah dan ma'ruf mengkritisi segala bentuk pembenaran pelaku oleh struktur kekuasaan (Rio Tsukatsuki).",
    "summary": (
      "Prinsip rahmah dalam relasi gender menolak impunitas pelaku dan menuntut akuntabilitas struktural, bukan perlindungan institusional bagi predator.",
      ["N_TH_06", "N_ET_01", "GL0-010", "GL1-004"]
    )
  },
  {
    "edge_id": "GL2-010",
    "from": "N_AC_05",
    "to": "N_ET_01",
    "relation": "OPERATIONALIZES",
    "description": "Teori kontrak seksual dan kapitalisme menjelaskan BAGAIMANA Rio Tsukatsuki beroperasi: melalui hukum, kebijakan, dan struktur ekonomi.",
    "summary": (
      "Patriarki bukan sekadar budaya; ia adalah struktur ekonomi-politik yang dioperasionalkan melalui kebijakan dan hukum oleh entitas seperti Rio Tsukatsuki.",
      ["N_AC_05", "N_ET_01", "GL1-006"]
    )
  },
  {
    "edge_id": "GL2-011",
    "from": "N_AC_02",
    "to": "N_ET_02",
    "relation": "OPERATIONALIZES",
    "description": "Objectification Theory menjelaskan BAGAIMANA Urawa Hanako mengalami dampak psikologis dari profiling dan tatapan objektifikasi sehari-hari.",
    "summary": (
      "Self-objectification dan body shame adalah manifestasi psikologis dari profiling ekstra-legal yang dialami Urawa Hanako di ruang publik.",
      ["N_AC_02", "N_ET_02", "GL1-002"]
    )
  },
  {
    "edge_id": "GL2-012",
    "from": "N_AC_04",
    "to": "N_ET_01",
    "relation": "REINFORCES",
    "description": "Rape Myth Acceptance adalah alat ideologis yang digunakan Rio Tsukatsuki untuk membenarkan pelaku di ruang hukum dan publik.",
    "summary": (
      "Mitos perkosaan bukan sekadar kesalahan individu; ia adalah instrumen sistemik yang digunakan struktur kekuasaan untuk melindungi pelaku.",
      ["N_AC_04", "N_ET_01", "GL1-004"]
    )
  },
  {
    "edge_id": "GL2-013",
    "from": "N_PR_01",
    "to": "N_TH_02",
    "relation": "OPERATIONALIZES",
    "description": "Kebiasaan muhasabah kognitif dan encoding berbasis pertanyaan adalah bentuk praktis dari tazkiyatun nafs.",
    "summary": (
      "Setiap kali kita bertanya 'Apakah ini memicu dopamin atau membangun pengetahuan?', kita sedang mempraktikkan tazkiyatun nafs secara kognitif.",
      ["N_PR_01", "N_TH_02", "GL0-002"]
    )
  },
  {
    "edge_id": "GL2-014",
    "from": "N_PR_03",
    "to": "N_ET_01",
    "relation": "CONSTRAINS",
    "description": "Kebiasaan anti-profiling dan structural accountability adalah mekanisme kontrol untuk mencegah munculnya Rio Tsukatsuki baru.",
    "summary": (
      "Setiap individu yang menolak victim blaming dan menuntut akuntabilitas struktur sedang menghambat reproduksi Rio Tsukatsuki.",
      ["N_PR_03", "N_ET_01", "N_ET_02", "GL1-004"]
    )
  },
  {
    "edge_id": "GL2-015",
    "from": "N_PR_02",
    "to": "N_AC_06",
    "relation": "OPERATIONALIZES",
    "description": "Weekly Review PARA memastikan bahwa agency (Mahmood) tidak tergelincir menjadi konformitas pasar (Gill).",
    "summary": (
      "Audit berkala terhadap sumber informasi memastikan kita tidak tanpa sadar mengadopsi narasi kapitalis yang menyamar sebagai 'kebebasan'.",
      ["N_PR_02", "N_AC_06", "GL1-005"]
    )
  }
]
```

---

### 3.4 Visualisasi Relasi Graph Level 2 (Text-Based)

```
                    ┌─────────────────────────────────────────────┐
                    │           GRAPH LEVEL 2: GENERAL            │
                    └─────────────────────────────────────────────┘
                                        │
        ┌───────────────────────────────┼───────────────────────────────┐
        │                               │                               │
   ┌────▼────┐                    ┌─────▼─────┐                   ┌────▼────┐
   │ LEVEL 0 │                    │  LEVEL 2   │                   │ LEVEL 1 │
   │Teologis │◄──── REINFORCES ──►│  UNIFIED   │◄── CRITIQUES ────►│Teoretis │
   │(Qur'an- │                    │  GENERAL   │                   │(Ahli-   │
   │ Hadis)  │                    │            │                   │ Teori)  │
   └────┬────┘                    └─────┬──────┘                   └────┬────┘
        │                               │                               │
        │         ┌─────────────────────┼─────────────────────┐         │
        │         │                     │                     │         │
        ▼         ▼                     ▼                     ▼         ▼
  ┌──────────┐ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ ┌──────────┐
  │GHADH     │ │TAZKIYAH      │  │RI_TSUKATSUKI │  │URAWA_HANAKO  │ │OBJEC-TIF.│
  │AL-BASHAR │ │& PFC CONTROL │  │(Struktur/    │  │(Profiling/   │ │& MALE    │
  │(Anti-    │ │(Pengendalian │  │ Hukum/       │  │ Ekstra-legal/│ │GAZE      │
  │Objektif.)│ │ Spiritual)   │  │ Politik)     │  │ Psikologis)  │ │          │
  └──────────┘ └──────────────┘  └──────────────┘  └──────────────┘ └──────────┘
        │                               │                     │
        │         ┌─────────────────────┼─────────────────────┘
        │         │                     │
        ▼         ▼                     ▼
  ┌──────────────────────────────────────────────┐
  │          PROCEDURAL HABITS (TINDAKAN)         │
  │  Muhasabah | PARA Review | Anti-Profiling    │
  └──────────────────────────────────────────────┘
```

---

## BAGIAN IV: SUMMARY TERPISAH (NON-CORNELL)

### 4.1 Global Summary — VESTAL-STABILIZE

```json
GLOBAL_SUMMARY_VESTAL_STABILIZE = (
  "Hawa nafsu adalah fenomena multidimensi yang beroperasi pada level neurobiologis (dopamin), psikologis (objektifikasi), teologis (nafs), dan struktural (patriarki ekonomi-politik). " +
  "Pengendaliannya membutuhkan tiga lapisan intervensi: (1) Spiritual-individual melalui tazkiyatun nafs dan ghadh al-bashar; " +
  "(2) Kognitif-akademik melalui literasi teori dan pemisahan sumber informasi berbasis PARA; " +
  "(3) Sosial-struktural melalui penolakan terhadap victim blaming, profiling, dan impunitas pelaku. " +
  "Tanpa ketiga lapisan ini, pembahasan tentang hawa nafsu dan budaya pakaian akan selalu tergelincir menjadi alat kontrol patriarki.",
  [
    "N_TH_01", "N_TH_02", "N_TH_03", "N_TH_04", "N_TH_05", "N_TH_06",
    "N_AC_01", "N_AC_02", "N_AC_03", "N_AC_04", "N_AC_05", "N_AC_06",
    "N_ET_01", "N_ET_02",
    "N_PR_01", "N_PR_02", "N_PR_03"
  ]
)
```

### 4.2 Summary per Domain

```json
DOMAIN_SUMMARIES = [
  {
    "domain": "Teologi & Neurosains",
    "summary": (
      "Hawa nafsu adalah dorongan fitrah yang secara neurologis beroperasi melalui sistem dopamin dan secara teologis disebut nafs ammārah. Keduanya menuntut intervensi aktif: puasa, muhasabah, dan penguatan Prefrontal Cortex.",
      ["N_TH_01", "N_TH_02", "N_AC_01", "GL2-001", "GL2-002"]
    )
  },
  {
    "domain": "Psikologi Gender & Objektifikasi",
    "summary": (
      "Male Gaze dan Objectification Theory menjelaskan bagaimana budaya visual mereduksi manusia menjadi tubuh. Ghadh al-bashar dan prinsip 'Allah melihat hati' adalah intervensi teologis terhadap budaya ini.",
      ["N_TH_03", "N_AC_02", "N_AC_03", "GL2-003", "GL2-004"]
    )
  },
  {
    "domain": "Pakaian: Antara Taqwa, Agency, dan Komodifikasi",
    "summary": (
      "Pakaian adalah medan negosiasi antara taqwa (QS 7:26), agency spiritual (Mahmood), dan tekanan kapitalisme (Gill). Ia tidak boleh menjadi alat profiling terhadap Urawa Hanako maupun komoditas Rio Tsukatsuki.",
      ["N_TH_04", "N_AC_06", "N_ET_01", "N_ET_02", "GL2-005", "GL2-006"]
    )
  },
  {
    "domain": "Kriminologi & Keadilan",
    "summary": (
      "Rape Myth Acceptance dan victim blaming adalah instrumen yang digunakan struktur kekuasaan (Rio Tsukatsuki) untuk melindungi pelaku. Prinsip la darara dan keadilan Islam menolak ini secara absolut.",
      ["N_TH_05", "N_AC_04", "N_ET_01", "GL2-007"]
    )
  },
  {
    "domain": "Ekonomi-Politik & Interseksionalitas",
    "summary": (
      "Patriarki negatif bukan sekadar budaya individual; ia adalah struktur ekonomi-politik yang mengkomodifikasi tubuh, mengeksploitasi buruh, dan menggunakan hukum sebagai alat kontrol. Interseksionalitas menunjukkan siapa yang paling rentan.",
      ["N_TH_05", "N_AC_05", "N_ET_01", "GL2-008", "GL2-010"]
    )
  },
  {
    "domain": "Prosedur Implementasi",
    "summary": (
      "Pengetahuan tanpa prosedur adalah beban. Muhasabah kognitif, Weekly Review PARA, dan stance anti-profiling adalah mekanisme yang mengubah informasi menjadi transformasi diri dan sosial.",
      ["N_PR_01", "N_PR_02", "N_PR_03", "GL2-013", "GL2-014", "GL2-015"]
    )
  }
]
```

---

## BAGIAN V: STATUS & TRANSISI

```yaml
phase: 2.3-ANNOTATE
document: VESTAL-STABILIZE
cornell_separation: COMPLETED
para_purpose_explanation: COMPLETED
procedural_habits: DEFINED
graph_level_2: COMPLETED
graph_unification: "Level 0 (Teologis) + Level 1 (Teoretis) → Level 2 (General Unified)"
summary_extraction: COMPLETED (Non-Cornell, Standalone)
next_phase: 2.4-PONDER
pending_instruction: "Menunggu instruksi Fase 2.4 atau Fase 3"
```

---

> **Catatan Akhir Fase 2.3:**  
> Dokumen **VESTAL-STABILIZE** telah memisahkan diri dari struktur Cornell. Summary kini berdiri sebagai entitas independen. Graph Level 2 telah menyatukan seluruh pemetaan dari Level 0 dan Level 1 menjadi satu ekosistem pengetahuan yang koheren, dengan abstraksi etis (Rio Tsukatsuki & Urawa Hanako) sebagai penjaga batas diskursus.
>
> **Menunggu instruksi selanjutnya.**