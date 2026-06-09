// Gallery slider module
const GalleryModule = (() => {
  let currentPage = 0;
  const itemsPerPage = 3;

  const galleryItems = [
    { type: 'image', src: '/assets/gallery/worship-1.jpg', alt: 'Sunday worship service' },
    { type: 'image', src: '/assets/gallery/fellowship-1.jpg', alt: 'Fellowship gathering' },
    { type: 'image', src: '/assets/gallery/prayer-1.jpg', alt: 'Prayer night' },
    { type: 'image', src: '/assets/gallery/youth-1.jpg', alt: 'Youth ministry' },
    { type: 'image', src: '/assets/gallery/outreach-1.jpg', alt: 'Community outreach' },
    { type: 'image', src: '/assets/gallery/baptism-1.jpg', alt: 'Baptism service' },
    { type: 'image', src: '/assets/gallery/worship-2.jpg', alt: 'Worship team' },
    { type: 'image', src: '/assets/gallery/children-1.jpg', alt: 'Children ministry' }
  ];

  function renderGallery() {
    const track = document.getElementById('gallery-track');
    if (!track) return;

    track.innerHTML = galleryItems.map((item, idx) => {
      if (item.type === 'image') {
        return `
          <div class="gallery-item" role="listitem">
            <img src="${item.src}" alt="${item.alt}" loading="lazy" 
                 onerror="this.src='/assets/gallery/placeholder.jpg'" />
          </div>
        `;
      }
    }).join('');

    updateGalleryPosition();
    renderDots();
  }

  function renderDots() {
    const dotsContainer = document.getElementById('gallery-dots');
    if (!dotsContainer) return;

    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => 
      `<button class="gallery-dot ${i === currentPage ? 'active' : ''}" 
              aria-label="Go to page ${i + 1}"
              role="tab"
              aria-selected="${i === currentPage}"
              data-page="${i}"></button>`
    ).join('');

    dotsContainer.querySelectorAll('.gallery-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const page = parseInt(e.target.dataset.page);
        goToPage(page);
        if (window.Analytics) window.Analytics.sliderInteraction('dot-click', page);
      });
    });
  }

  function updateGalleryPosition() {
    const track = document.getElementById('gallery-track');
    if (!track) return;

    const offset = currentPage * itemsPerPage * -33.333;
    track.style.transform = `translateX(${offset}%)`;
  }

  function goToPage(page) {
    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    currentPage = Math.max(0, Math.min(page, totalPages - 1));
    updateGalleryPosition();
    renderDots();
  }

  function init() {
    renderGallery();

    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToPage(currentPage - 1);
        if (window.Analytics) window.Analytics.sliderInteraction('prev', currentPage);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToPage(currentPage + 1);
        if (window.Analytics) window.Analytics.sliderInteraction('next', currentPage);
      });
    }

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const trackWrap = document.getElementById('gallery-track-wrap');
    
    if (trackWrap) {
      trackWrap.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      trackWrap.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });
    }

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) goToPage(currentPage + 1);
      if (touchEndX > touchStartX + 50) goToPage(currentPage - 1);
    }
  }

  return { init };
})();

window.GalleryModule = GalleryModule;
