(function () {
  const websiteId = document.documentElement.dataset.umamiWebsiteId || '';
  const scriptUrl = document.documentElement.dataset.umamiScriptUrl || 'https://analytics.umami.is/script.js';

  if (websiteId) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = scriptUrl;
    script.dataset.websiteId = websiteId;
    document.head.appendChild(script);
  }

  function track(eventName, eventData) {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(eventName, eventData || {});
    }
  }

  window.Analytics = {
    track,
    navClick(item) { track('nav-click', { item }); },
    ctaClick(cta, location) { track('cta-click', { cta, location }); },
    sectionView(section) { track('section-view', { section }); },
    videoClick(source) { track('video-click', { source }); },
    mapMarkerOpen(location) { track('map-marker-open', { location }); },
    directionsClick(location) { track('directions-click', { location }); },
    ministryCardClick(ministry) { track('ministry-card-click', { ministry }); },
    outboundLink(destination) { track('outbound-link', { destination }); }
  };
})();
