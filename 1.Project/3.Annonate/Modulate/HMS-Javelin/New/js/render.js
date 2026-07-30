/**
 * render.js — logika TAMPILAN untuk index.html
 * Tidak berisi data catatan; semua data diambil dari js/dictionary.js (KAMUS_CATATAN).
 */

const elDaftar = document.getElementById("daftar-kartu");
const elKartuBaca = document.getElementById("kartu-baca");

function paramId() {
  return new URLSearchParams(location.search).get("id");
}

function renderDaftarKartu(idAktif) {
  elDaftar.innerHTML = "";
  KAMUS_CATATAN.forEach((catatan) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "kartu-ringkas" + (catatan.id === idAktif ? " aktif" : "");
    btn.innerHTML = `
      <span class="judul-ringkas">${escapeHTML(catatan.judul)}</span>
      <span class="meta-ringkas">${escapeHTML(catatan.kode.rumpunIlmu)} · ${escapeHTML(catatan.kode.tingkat)}</span>
    `;
    btn.addEventListener("click", () => {
      history.pushState({}, "", `?id=${catatan.id}`);
      bukaKartu(catatan.id);
    });
    li.appendChild(btn);
    elDaftar.appendChild(li);
  });
}

async function bukaKartu(id) {
  const catatan = KAMUS_CATATAN.find((c) => c.id === id) || KAMUS_CATATAN[0];
  if (!catatan) {
    elKartuBaca.innerHTML = `<p class="status-kosong">Belum ada catatan di kamus.</p>`;
    return;
  }

  renderDaftarKartu(catatan.id);
  elKartuBaca.innerHTML = `<p class="status-muat">Membuka kartu…</p>`;

  let markdownText = "";
  try {
    const res = await fetch(catatan.file);
    if (!res.ok) throw new Error("File tidak ditemukan: " + catatan.file);
    markdownText = await res.text();
  } catch (err) {
    elKartuBaca.innerHTML = `
      <p class="status-kosong">
        Tidak bisa memuat "${escapeHTML(catatan.file)}".<br>
        Jalankan halaman ini lewat server lokal (mis. <code>python -m http.server</code>),
        bukan langsung dibuka sebagai file.
      </p>`;
    return;
  }

  const isiHTML = marked.parse(markdownText);

  elKartuBaca.innerHTML = `
    <div class="stempel-klasifikasi">
      <b>${escapeHTML(catatan.kode.rumpunIlmu)}</b>
      ${escapeHTML(catatan.kode.tingkat)}
    </div>
    <span class="fase-pill" data-fase="${escapeHTML(catatan.faseCatatan)}">${escapeHTML(catatan.faseCatatan)}</span>
    <h1>${escapeHTML(catatan.judul)}</h1>
    <div class="kata-kunci-baris">
      ${catatan.kataKunci.map((k) => `<span class="kk-tag">${escapeHTML(k)}</span>`).join("")}
    </div>
    <div class="isi-markdown">${isiHTML}</div>
    <a class="lihat-rekomendasi" href="rekomendasi.html?id=${catatan.id}">Lihat catatan terkait →</a>
  `;
}

// Inisialisasi
const idAwal = paramId() || (KAMUS_CATATAN[0] && KAMUS_CATATAN[0].id);
renderDaftarKartu(idAwal);
if (idAwal) bukaKartu(idAwal);

window.addEventListener("popstate", () => {
  const id = paramId() || (KAMUS_CATATAN[0] && KAMUS_CATATAN[0].id);
  if (id) bukaKartu(id);
});

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}
