// Analytics wrapper for Umami custom event tracking
window.Analytics = {
  track(eventName, eventData) {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(eventName, eventData || {});
    }
  },

  pageView(url) {
    this.track('pageview', { url: url || window.location.pathname });
  },

  sectionView(section) {
    this.track('section-view', { section });
  },

  navClick(item) {
    this.track('nav-click', { item });
  },

  ctaClick(cta, location) {
    this.track('cta-click', { cta, location: location || 'unknown' });
  },

  bibleSearch(query) {
    this.track('bible-search', { query });
  },

  bibleNavigation(action, book, chapter) {
    this.track('bible-nav', { action, book: book || '', chapter: chapter || 0 });
  },

  formSubmit(formName, success) {
    this.track('form-submit', { form: formName, success });
  },

  videoClick(videoId, title) {
    this.track('video-click', { videoId, title: title || '' });
  },

  mapInteraction(action, location) {
    this.track('map-interaction', { action, location: location || '' });
  },

  sliderInteraction(action, index) {
    this.track('slider-interaction', { action, index: index || 0 });
  },

  outboundLink(destination) {
    this.track('outbound-link', { destination });
  }
};
