class Memosprite {
  constructor(Resource, owner) {
    this.Resource = Resource;
    this.owner = owner; // referensi ke Cyrene
  }

  Burn() {
    for (let i = 0; i < this.Resource.length; i++) {
      this.owner.Area.push(this.Resource[i]);
    }
  }
}

class Cyrene {
  constructor(Resource) {
    this.Area = [];          // hasil akhir ada di sini
    this.Resource = Resource;
    this.Sprite = new Memosprite(this.Resource, this);
  }

  Process() {
    this.Sprite.Burn();
  }

  AddResource(extraArray) {
    const extra = new Memosprite(extraArray, this);
    extra.Burn();
  }
}

// ===============================
// Objek Cyrene dasar
// ===============================
const Cy = new Cyrene([
    "mov/A.mp4",
    "mov/Screen Recording 2025-10-19 203636.mp4",
    "mov/Screen Recording 2025-10-19 204218.mp4",
    "mov/Screen Recording 2025-10-19 214240.mp4",
    "mov/Screen Recording 2025-10-24 143803.mp4",
    "mov/Screen Recording 2025-10-24 144238.mp4",
    "mov/Screen Recording 2025-10-24 144658.mp4",
    "mov/Screen Recording 2025-10-26 013259.mp4",
    "mov/Screen Recording 2025-10-26 014757.mp4",
    "mov/Screen Recording 2025-10-26 021042.mp4",
    "mov/Screen Recording 2025-11-12 131009.mp4",
    "mov/Screen Recording 2025-11-14 205421.mp4",
    "mov/Screen Recording 2025-11-16 183107.mp4",
    "mov/Screen Recording 2025-11-16 185419.mp4"
]);

Cy.Process(); // Pindahkan resource awal ke Cy.Area

// ===============================
// Tambahan Resource (WhatsApp)
// ===============================
const WhatsAppVideos = [
  "video/WhatsApp Video 2025-06-19 at 20.17.43_46c3c84e.mp4",
  "video/WhatsApp Video 2025-06-19 at 20.17.55_bf322305.mp4",
  "video/WhatsApp Video 2025-06-19 at 20.18.13_3b5c8c36.mp4",
  "video/WhatsApp Video 2025-06-19 at 20.18.13_4ffacc62.mp4",
  "video/WhatsApp Video 2025-06-19 at 20.36.31_3ae3bef0.mp4",
  "video/WhatsApp Video 2025-06-19 at 20.36.32_2be6fe95.mp4",
  "video/WhatsApp Video 2025-06-19 at 20.55.24_c893785f.mp4",
  "video/WhatsApp Video 2025-06-19 at 21.02.47_ae86ff90.mp4",
  "video/WhatsApp Video 2025-06-19 at 21.02.47_d33ae514.mp4",
  "video/WhatsApp Video 2025-06-19 at 21.24.06_18026a07.mp4",
];

// Tambahkan ke Cyrene menggunakan AddResource()
Cy.AddResource(WhatsAppVideos);

// ===============================
// Kini Area berisi 17 video total
// ===============================
console.log(Cy.Area);

// Untuk viewer.js:
const videos = Cy.Area;
let currentIndex = 0;

function showVideo(index) {
  const video = document.getElementById("video-player");
  const source = document.getElementById("video-source");

  source.src = videos[index];
  video.load();
  video.play();
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videos.length;
  showVideo(currentIndex);
}

function prevVideo() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  showVideo(currentIndex);
}

function randomVideo() {
  currentIndex = Math.floor(Math.random() * videos.length);
  showVideo(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("vid")) {
        const index = parseInt(urlParams.get("vid"));
        if (!isNaN(index) && index >= 0 && index < videos.length) {
            currentIndex = index;
            showVideo(currentIndex);
            return;
        }
    }

    if (urlParams.get("random") === "1") {
        randomVideo();
    } else {
        showVideo(0);
    }
});

