const stickyTop = document.querySelector(".sticky-top");
const offCanvas = document.querySelector(".offcanvas");

offCanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offCanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});


const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {
    window.scrollTo(scrollLeft);
  };
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}


// start vidio
const videos = [
      'vidio/vidio.mp4',
      'vidio/vidio1.mp4',
    ];

    const player = document.getElementById('video-player');
    let currentIndex = 0;

    // Ganti video berdasarkan index
    function loadVideo(index) {
      player.src = videos[index];
      player.load();
    }

    // Tombol navigasi
    function nextVideo() {
      currentIndex = (currentIndex + 1) % videos.length;
      loadVideo(currentIndex);
    }

    function prevVideo() {
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
      loadVideo(currentIndex);
    }

    // IntersectionObserver: putar video saat terlihat di layar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          player.play();
        } else {
          player.pause();
        }
      });
    }, {
      threshold: 0.5 // 50% dari video harus terlihat dulu
    });

    observer.observe(player);

    // Jalankan video pertama langsung
    window.addEventListener('load', () => {
      loadVideo(currentIndex);
    });
    

    