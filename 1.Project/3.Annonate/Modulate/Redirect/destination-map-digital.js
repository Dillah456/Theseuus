/**
 * destination-map-digital.js
 * ----------------------------------------------------------------
 * File EKSTENSI untuk Page 2 versi Digital (summon-digital.html).
 *
 * Kamus (dictionary) ini memetakan 24 designasi huruf Yunani,
 * Alpha sampai Omega, ke sebuah URL tujuan. Saat summon di
 * summon-digital.html jatuh pada satu designasi, halaman akan
 * mencarinya di kamus ini dan mengarahkan (redirect) pengguna
 * ke URL yang sesuai.
 *
 * CARA PAKAI:
 *  1. Isi setiap "url" yang masih kosong dengan URL tujuan,
 *     contoh:  "ALPHA": { code: "Α01", symbol: "Α", url: "https://contoh.com/alpha" }
 *  2. Designasi yang url-nya masih kosong dianggap "belum ada
 *     tujuan" -> summon-digital.html hanya menampilkan hasil
 *     tanpa redirect.
 *  3. Kunci kamus (ALPHA, BETA, dst) memakai huruf kapital Latin.
 *     Jangan ubah kunci ini, cukup isi field "url".
 * ----------------------------------------------------------------
 */

const DESTINATION_MAP_DIGITAL = {
  "ALPHA":   { code: "Α01", symbol: "Α", url: "" },
  "BETA":    { code: "Β02", symbol: "Β", url: "" },
  "GAMMA":   { code: "Γ03", symbol: "Γ", url: "" },
  "DELTA":   { code: "Δ04", symbol: "Δ", url: "" },
  "EPSILON": { code: "Ε05", symbol: "Ε", url: "" },
  "ZETA":    { code: "Ζ06", symbol: "Ζ", url: "" },
  "ETA":     { code: "Η07", symbol: "Η", url: "" },
  "THETA":   { code: "Θ08", symbol: "Θ", url: "" },
  "IOTA":    { code: "Ι09", symbol: "Ι", url: "" },
  "KAPPA":   { code: "Κ10", symbol: "Κ", url: "" },
  "LAMBDA":  { code: "Λ11", symbol: "Λ", url: "" },
  "MU":      { code: "Μ12", symbol: "Μ", url: "" },
  "NU":      { code: "Ν13", symbol: "Ν", url: "" },
  "XI":      { code: "Ξ14", symbol: "Ξ", url: "" },
  "OMICRON": { code: "Ο15", symbol: "Ο", url: "" },
  "PI":      { code: "Π16", symbol: "Π", url: "" },
  "RHO":     { code: "Ρ17", symbol: "Ρ", url: "" },
  "SIGMA":   { code: "Σ18", symbol: "Σ", url: "" },
  "TAU":     { code: "Τ19", symbol: "Τ", url: "" },
  "UPSILON": { code: "Υ20", symbol: "Υ", url: "" },
  "PHI":     { code: "Φ21", symbol: "Φ", url: "" },
  "CHI":     { code: "Χ22", symbol: "Χ", url: "" },
  "PSI":     { code: "Ψ23", symbol: "Ψ", url: "" },
  "OMEGA":   { code: "Ω24", symbol: "Ω", url: "" },
};

// Jangan hapus baris di bawah ini - dibutuhkan agar summon-digital.html bisa membaca kamus ini
if (typeof window !== "undefined") window.DESTINATION_MAP_DIGITAL = DESTINATION_MAP_DIGITAL;
