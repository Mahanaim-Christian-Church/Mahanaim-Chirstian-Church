export const Analytics = {
  track(eventName: string, eventData?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track(eventName, eventData);
    }
  },

  pageView(url?: string) {
    this.track('pageview', { url: url || window.location.pathname });
  },

  sectionView(section: string) {
    this.track('section-view', { section });
  },

  navClick(item: string) {
    this.track('nav-click', { item });
  },

  ctaClick(cta: string, location?: string) {
    this.track('cta-click', { cta, location });
  },

  bibleSearch(query: string) {
    this.track('bible-search', { query });
  },

  bibleNavigation(action: string, book?: string, chapter?: number) {
    this.track('bible-nav', { action, book, chapter });
  },

  formSubmit(formName: string, success: boolean) {
    this.track('form-submit', { form: formName, success });
  },

  videoClick(videoId: string, title?: string) {
    this.track('video-click', { videoId, title });
  },

  mapInteraction(action: string, location?: string) {
    this.track('map-interaction', { action, location });
  },

  sliderInteraction(action: string, index?: number) {
    this.track('slider-interaction', { action, index });
  },

  outboundLink(destination: string) {
    this.track('outbound-link', { destination });
  }
};

if (typeof window !== 'undefined') {
  (window as any).Analytics = Analytics;
}
