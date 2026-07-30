/**
 * rekomendasi.js — logika TAMPILAN untuk rekomendasi.html
 * Menghitung kedekatan antar catatan berdasarkan field di KAMUS_CATATAN:
 *   - kata kunci yang sama      (bobot terbesar)
 *   - rumpun ilmu yang sama
 *   - tingkat yang sama
 *   - fase catatan yang sama    (bobot terkecil)
 */

const BOBOT = {
  kataKunci: 3,
  rumpunIlmu: 2,
  tingkat: 1,
  faseCatatan: 1
};

const elPilihSumber = document.getElementById("pilih-sumber");
const elJudulSumber = document.getElementById("judul-sumber");
const elGrid = document.getElementById("grid-rekomendasi");

function paramId() {
  return new URLSearchParams(location.search).get("id");
}

function hitungSkor(a, b) {
  if (a.id === b.id) return null;

  const kkA = new Set(a.kataKunci.map((k) => k.toLowerCase()));
  const kkSama = b.kataKunci.filter((k) => kkA.has(k.toLowerCase()));

  let skor = kkSama.length * BOBOT.kataKunci;
  const alasan = [];

  if (kkSama.length) alasan.push(`${kkSama.length} kata kunci sama (${kkSama.join(", ")})`);
  if (a.kode.rumpunIlmu === b.kode.rumpunIlmu) {
    skor += BOBOT.rumpunIlmu;
    alasan.push(`rumpun ilmu sama (${b.kode.rumpunIlmu})`);
  }
  if (a.kode.tingkat === b.kode.tingkat) {
    skor += BOBOT.tingkat;
    alasan.push(`tingkat sama (${b.kode.tingkat})`);
  }
  if (a.faseCatatan === b.faseCatatan) {
    skor += BOBOT.faseCatatan;
    alasan.push(`fase catatan sama (${b.faseCatatan})`);
  }

  return { catatan: b, skor, alasan };
}

function skorMaksimumTeoretis(a) {
  return a.kataKunci.length * BOBOT.kataKunci + BOBOT.rumpunIlmu + BOBOT.tingkat + BOBOT.faseCatatan;
}

function renderRekomendasi(id) {
  const sumber = KAMUS_CATATAN.find((c) => c.id === id) || KAMUS_CATATAN[0];
  if (!sumber) {
    elGrid.innerHTML = `<p class="status-kosong">Kamus catatan masih kosong.</p>`;
    return;
  }

  elJudulSumber.textContent = sumber.judul;
  elPilihSumber.value = sumber.id;

  const skorMaks = Math.max(1, skorMaksimumTeoretis(sumber));

  const hasil = KAMUS_CATATAN
    .map((c) => hitungSkor(sumber, c))
    .filter((r) => r && r.skor > 0)
    .sort((x, y) => y.skor - x.skor);

  if (!hasil.length) {
    elGrid.innerHTML = `<p class="status-kosong">Belum ada catatan lain yang cukup terkait dengan "${escapeHTML(sumber.judul)}".</p>`;
    return;
  }

  elGrid.innerHTML = hasil.map(({ catatan, skor, alasan }) => {
    const persen = Math.min(100, Math.round((skor / skorMaks) * 100));
    return `
      <a class="kartu-rekomendasi" href="index.html?id=${catatan.id}">
        <span class="kode-rek">${escapeHTML(catatan.kode.rumpunIlmu)} · ${escapeHTML(catatan.kode.tingkat)} · ${escapeHTML(catatan.faseCatatan)}</span>
        <span class="judul-rek">${escapeHTML(catatan.judul)}</span>
        <div class="kecocokan">
          <div class="kecocokan-label"><span>Kecocokan</span><span>${persen}%</span></div>
          <div class="kecocokan-bar"><span style="width:${persen}%"></span></div>
        </div>
        <p class="alasan-kecocokan"><b>Kenapa direkomendasikan:</b> ${escapeHTML(alasan.join("; "))}</p>
      </a>
    `;
  }).join("");
}

function isiPilihSumber() {
  elPilihSumber.innerHTML = KAMUS_CATATAN
    .map((c) => `<option value="${c.id}">${escapeHTML(c.judul)}</option>`)
    .join("");
}

isiPilihSumber();
const idAwal = paramId() || (KAMUS_CATATAN[0] && KAMUS_CATATAN[0].id);
if (idAwal) renderRekomendasi(idAwal);

elPilihSumber.addEventListener("change", (e) => {
  history.pushState({}, "", `?id=${e.target.value}`);
  renderRekomendasi(e.target.value);
});

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}
