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

  const highlightedCountries = new Set(['India', 'Australia', 'United States of America']);

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
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      noWrap: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
      .then(response => response.json())
      .then(world => {
        L.geoJSON(world, {
          interactive: false,
          style(feature) {
            const name = feature?.properties?.name || '';
            const active = highlightedCountries.has(name);
            return {
              color: active ? '#d8b45d' : '#5b554c',
              weight: active ? 1.4 : 0.55,
              fillColor: active ? '#d8b45d' : '#514b43',
              fillOpacity: active ? 0.58 : 0.2,
              opacity: active ? 0.9 : 0.45
            };
          }
        }).addTo(map);
      })
      .catch(() => {
        // Country highlighting is decorative; pins remain usable if the layer cannot load.
      });

    const icon = L.divIcon({ className: 'custom-marker', html: '<div class="marker-dot"></div>', iconSize: [18, 18], iconAnchor: [9, 9] });
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
