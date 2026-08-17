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
 *
 * CATATAN PEMETAAN (diisi otomatis dari Playlist Google Spreadsheet):
 *  Dictionary hanya memiliki 24 slot (Alpha-Omega), sedangkan daftar
 *  playlist punya 25 chapter. Pemetaan yang dipakai: Chapter 1-24
 *  -> ALPHA..OMEGA secara berurutan. Chapter 25 (Aldebaran) TIDAK
 *  dimasukkan karena tidak ada slot huruf Yunani tersisa untuknya.
 * ----------------------------------------------------------------
 */

const DESTINATION_MAP_DIGITAL = {
  "ALPHA":   { code: "Α01", symbol: "Α", url: "https://open.spotify.com/playlist/4sCklEZtJ5zNU1VViGm16j?si=8e4a24ba99884bda" }, // 1 Altair
  "BETA":    { code: "Β02", symbol: "Β", url: "https://open.spotify.com/playlist/0tVUgW7UoN6RzsizzdrcCn?si=ff6e812ec3464d77" }, // 2 Deneb
  "GAMMA":   { code: "Γ03", symbol: "Γ", url: "https://open.spotify.com/playlist/4Gvcmx6eGU93hHvf0xDUyG?si=50af9c2c07b14cd9" }, // 3 Vega
  "DELTA":   { code: "Δ04", symbol: "Δ", url: "https://open.spotify.com/playlist/3XHPEGkq1DfwNrRx4aKH6k?si=c19f95fd619f4760" }, // 4 Virgo
  "EPSILON": { code: "Ε05", symbol: "Ε", url: "https://open.spotify.com/playlist/6vV2p9fCOMD2UkcEgpUGtb?si=9d16ab9c76d04bc1" }, // 5 Lyra
  "ZETA":    { code: "Ζ06", symbol: "Ζ", url: "https://open.spotify.com/playlist/1pndm5Bec97BTR8RQjP0YV?si=7192aeeddfb34d9c" }, // 6 Spica
  "ETA":     { code: "Η07", symbol: "Η", url: "https://open.spotify.com/playlist/1OLCQsm42Ieg79uXs1onG6?si=6fc38fde02504c3b" }, // 7 Lesath
  "THETA":   { code: "Θ08", symbol: "Θ", url: "https://open.spotify.com/playlist/2ZuEsBf8Q7905BDzsNnRvf?si=c9f47214a7fd4503" }, // 8 Antares
  "IOTA":    { code: "Ι09", symbol: "Ι", url: "https://open.spotify.com/playlist/2az6bnoxBftGjB3TUOPmtN?si=51493128531845be" }, // 9 Sertan
  "KAPPA":   { code: "Κ10", symbol: "Κ", url: "https://open.spotify.com/playlist/7e32HTpsT3g2mlhyTd0lKB?si=343ed31a9b3441eb" }, // 10 Sirius
  "LAMBDA":  { code: "Λ11", symbol: "Λ", url: "https://open.spotify.com/playlist/7p4zxRhMMiTeiFtcZl7Lro?si=7658c66d72704941" }, // 11 Regulus
  "MU":      { code: "Μ12", symbol: "Μ", url: "https://open.spotify.com/playlist/7CGDq3jOdkXAJVGF0joqqI?si=db3f9f50c84644d3" }, // 12 Zaurak
  "NU":      { code: "Ν13", symbol: "Ν", url: "https://open.spotify.com/playlist/7nq2FnF1BbfWrfgit0swRL?si=dafd0f2479334f6b" }, // 13 Formalhault
  "XI":      { code: "Ξ14", symbol: "Ξ", url: "https://open.spotify.com/playlist/5BtiqFj25bibol0RSzGCSC?si=3c58237b13cf4cd3" }, // 14 Pollux
  "OMICRON": { code: "Ο15", symbol: "Ο", url: "https://open.spotify.com/playlist/6DPCipyzn9xim11tPBMR4h?si=15946b64b1b94147" }, // 15 Rigel
  "PI":      { code: "Π16", symbol: "Π", url: "https://open.spotify.com/playlist/2Q1BmH5aVgR0qXVyP3qtP3?si=1e45442576c1489f" }, // 16 Arcturus
  "RHO":     { code: "Ρ17", symbol: "Ρ", url: "https://open.spotify.com/playlist/3NkyLqyUnhF6MqDYQCHRM8?si=97071c5811f946fd" }, // 17 Diphda
  "SIGMA":   { code: "Σ18", symbol: "Σ", url: "https://open.spotify.com/playlist/0ycAcnRya4JusOKNwdg7OM?si=8f0b8ea5b5f7433c" }, // 18 Canopus
  "TAU":     { code: "Τ19", symbol: "Τ", url: "https://open.spotify.com/playlist/4JXtJuA2ZCf2ym1aDoslyJ?si=0d0b8faff0154e07" }, // 19 Betelgeuse
  "UPSILON": { code: "Υ20", symbol: "Υ", url: "https://open.spotify.com/playlist/7xajR4exWT21ukDPwMsv9g?si=b0c95982a1764adc" }, // 20 Belatrix
  "PHI":     { code: "Φ21", symbol: "Φ", url: "https://open.spotify.com/playlist/7a4cUMxhL68ix8ATjwQzKf?si=4a1bed3d940e4179" }, // 21 Boreas
  "CHI":     { code: "Χ22", symbol: "Χ", url: "https://open.spotify.com/playlist/5FQZZjQb7vwjxIRbZhghC1?si=9325f3448b17407b" }, // 22 Atlas
  "PSI":     { code: "Ψ23", symbol: "Ψ", url: "https://open.spotify.com/playlist/7Jm5K6IjtyI5qG50YOvyIZ?si=410806e5c96b4c42" }, // 23 Mimosa
  "OMEGA":   { code: "Ω24", symbol: "Ω", url: "https://open.spotify.com/playlist/7A3BwiDXqMR9WeLMH2OBHm?si=f795b6594d3242eb" }, // 24 Alssa'ad Malik
};

// Chapter 25 (Aldebaran) - di luar 24 slot huruf Yunani, tidak dipetakan:
// https://open.spotify.com/playlist/13yq0dMx2QGK3e6pddQXvq?si=a1e3761aa69d4bb1

// Jangan hapus baris di bawah ini - dibutuhkan agar summon-digital.html bisa membaca kamus ini
if (typeof window !== "undefined") window.DESTINATION_MAP_DIGITAL = DESTINATION_MAP_DIGITAL;
