// Daftar gambar (pastikan file ada di folder "images")
const images = [

];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("viewer");
  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function randomImage() {
  currentIndex = Math.floor(Math.random() * images.length);
  showImage(currentIndex);
}

// Tampilkan gambar pertama saat halaman dimuat
showImage(currentIndex);
