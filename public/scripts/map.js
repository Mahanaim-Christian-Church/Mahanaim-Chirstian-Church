(function () {
  // Coordinates are approximate and should be refined with exact church coordinates when available.
  const locations = [
    {
      name: 'Navi Mumbai Location',
      status: 'Active',
      lat: 19.0308,
      lng: 73.0197,
      address: 'Income Tax Colony, Sector - 21 & 22, Navi Mumbai - 400614, Maharashtra, India',
      serviceTimes: 'Wed & Sat online: 5:00pm | Sun Main: 10:30am | Sun Youth: 6pm',
      email: 'info@mahanchurch.org'
    },
    {
      name: 'Mumbai Location',
      status: 'Active',
      lat: 19.2067,
      lng: 72.8654,
      address: 'Alica Nagar, Lokhandwala Township Akurli Road, Kandivali East, Mumbai-400101, Maharashtra',
      serviceTimes: 'Wed & Sat online: 5:00pm | Sun Main: 10:30am | Sun Youth: 6pm',
      email: 'info@mahanchurch.org'
    },
    {
      name: 'Adelaide Location',
      status: 'Active',
      lat: -35.1266,
      lng: 138.5234,
      address: '9A Tokay Crescent, Morphett Vale, Adelaide, SA-5162, Australia',
      serviceTimes: 'Sun School: 10:30am | Sun Main: 11:00am',
      email: 'info@mahanchurch.org'
    },
    {
      name: 'Dallas Location',
      status: 'Upcoming',
      lat: 32.7767,
      lng: -96.7970,
      address: 'Dallas, Texas, USA',
      serviceTimes: 'Coming Soon',
      email: 'info@mahanchurch.org'
    }
  ];

  function directionsUrl(location) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
  }

  function popup(location) {
    return `
      <div class="map-popup">
        <div class="map-popup-image"></div>
        <div class="map-popup-body">
          <h3>${location.name}</h3>
          <p><strong>${location.status}</strong></p>
          <p>${location.serviceTimes}</p>
          <p>${location.email}</p>
          <a href="${directionsUrl(location)}" target="_blank" rel="noopener noreferrer" data-location="${location.name}">Get Directions</a>
        </div>
      </div>
    `;
  }

  window.initChurchMap = function initChurchMap() {
    const mapEl = document.getElementById('church-map');
    if (!mapEl || !window.L) return;

    const map = L.map(mapEl, {
      scrollWheelZoom: false,
      worldCopyJump: false,
      maxBounds: [[-85, -180], [85, 180]],
      maxBoundsViscosity: 1
    }).setView([12.8, 75.6], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      noWrap: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const icon = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pin"></div>', iconSize: [30, 42], iconAnchor: [15, 42] });
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng], { icon }).addTo(map).bindPopup(popup(location), { maxWidth: 330 });
      marker.on('popupopen', () => {
        window.Analytics?.mapMarkerOpen(location.name);
        setTimeout(() => {
          document.querySelectorAll('.map-popup a[target="_blank"]').forEach(link => {
            link.addEventListener('click', () => window.Analytics?.directionsClick(link.dataset.location || location.name));
          });
        }, 0);
      });
    });
  };
})();
