let images = [];
let index = 0;

const viewer = document.getElementById("viewer");

fetch("shinano.json")
  .then(res => res.json())
  .then(data => {
    images = data.images;

    const params = new URLSearchParams(window.location.search);
    index = parseInt(params.get("img")) || 0;

    showImage();
  });

function showImage() {
  if (images.length === 0) return;

  viewer.src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function randomImage() {
  index = Math.floor(Math.random() * images.length);
  showImage();
}

function openInNewTab() {
  window.open(images[index], "_blank");
}