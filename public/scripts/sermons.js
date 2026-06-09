(function () {
  const player = document.getElementById('sermon-player');
  const title = document.getElementById('sermon-title');
  const meta = document.getElementById('sermon-meta');
  const items = document.querySelectorAll('.media-video-item');

  if (!player || !items.length) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const videoId = item.dataset.videoId;
      if (!videoId) return;

      player.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
      player.title = item.dataset.videoTitle || 'Mahanaim Christian Church video';
      if (title) title.textContent = item.dataset.videoTitle || 'Mahanaim Christian Church video';
      if (meta) meta.textContent = item.dataset.videoDate || 'Recent';

      items.forEach(next => next.classList.toggle('active', next === item));
      window.Analytics?.videoClick(videoId);
    });
  });
})();
