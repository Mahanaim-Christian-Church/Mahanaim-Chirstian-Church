// Map module - Leaflet with custom popups
const MapModule = (() => {
  let map = null;

  const locations = [
    {
      name: 'Mahanaim Christian Church - Main Campus',
      lat: 40.7128,
      lng: -74.0060,
      address: '123 Faith Avenue, City, State 00000',
      description: 'Our main worship center where we gather every Sunday for worship, prayer, and fellowship.',
      image: '/assets/gallery/church-1.jpg',
      stats: { attendance: '500+', established: '1995' },
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=40.7128,-74.0060'
    },
    {
      name: 'Mahanaim Prayer House',
      lat: 40.7580,
      lng: -73.9855,
      address: '456 Grace Street, City, State 00001',
      description: 'A quiet place for prayer, meditation, and small group gatherings throughout the week.',
      image: '/assets/gallery/church-2.jpg',
      stats: { capacity: '100', type: 'Prayer Center' },
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=40.7580,-73.9855'
    }
  ];

  function createPopupContent(location) {
    return `
      <div class="map-popup-card">
        <div class="map-popup-image" style="background-image:url('${location.image}')"></div>
        <div class="map-popup-content">
          <h3 class="map-popup-title">${location.name}</h3>
          <p class="map-popup-address">
            <i data-lucide="map-pin" style="width:14px;height:14px;display:inline;vertical-align:-2px;margin-right:4px;"></i>
            ${location.address}
          </p>
          <p class="map-popup-desc">${location.description}</p>
          ${location.stats ? `
            <div class="map-popup-stats">
              ${Object.entries(location.stats).map(([key, val]) => 
                `<span class="stat-item"><strong>${val}</strong> ${key}</span>`
              ).join('')}
            </div>
          ` : ''}
          <div class="map-popup-actions">
            <a href="${location.directionsUrl}" target="_blank" rel="noopener noreferrer" 
               class="btn btn-primary btn-sm"
               onclick="if(window.Analytics)Analytics.mapInteraction('get-directions','${location.name}')">
              <i data-lucide="navigation" style="width:14px;height:14px;"></i>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function init() {
    const mapEl = document.getElementById('church-map');
    if (!mapEl) return;

    // Initialize map
    map = L.map('church-map', {
      center: [locations[0].lat, locations[0].lng],
      zoom: 12,
      scrollWheelZoom: false
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    // Add markers
    locations.forEach(loc => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: L.divIcon({
          className: 'custom-marker',
          html: '<div class="marker-pin"></div>',
          iconSize: [30, 42],
          iconAnchor: [15, 42]
        })
      }).addTo(map);

      marker.bindPopup(createPopupContent(loc), {
        maxWidth: 320,
        className: 'custom-popup'
      });

      marker.on('click', () => {
        if (window.Analytics) window.Analytics.mapInteraction('marker-click', loc.name);
      });

      marker.on('popupopen', () => {
        // Re-initialize Lucide icons in popup
        if (window.lucide) window.lucide.createIcons();
      });
    });

    // Track map interactions
    map.on('zoomend', () => {
      if (window.Analytics) window.Analytics.mapInteraction('zoom', `level-${map.getZoom()}`);
    });
  }

  return { init };
})();

window.MapModule = MapModule;
