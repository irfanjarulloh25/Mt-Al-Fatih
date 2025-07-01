// start vidio
document.addEventListener("DOMContentLoaded", () => {
  const videos = ['vidio/vidio.mp4', 'vidio/vidio1.mp4'];
  const player = document.getElementById('video-player');
  let currentIndex = 0;

  function loadVideo(index) {
     player.src = videos[index];
  player.load();

  player.scrollIntoView({
    behavior: 'smooth',
    block: 'center' 
  });
  }

  function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    loadVideo(currentIndex);
  }

  function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    loadVideo(currentIndex);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        player.play();
      } else {
        player.pause();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(player);
  loadVideo(currentIndex);

  // 🔒 Ini bagian penting:
  const nextBtn = document.getElementById("btn-next");
  const prevBtn = document.getElementById("btn-prev");

  if (nextBtn) nextBtn.onclick = nextVideo;
  if (prevBtn) prevBtn.onclick = prevVideo;
});
