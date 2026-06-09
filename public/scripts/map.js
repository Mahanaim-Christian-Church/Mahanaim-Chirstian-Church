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
          <p>${location.address}</p>
          <p>${location.serviceTimes}</p>
          <p>${location.email}</p>
          <a href="${directionsUrl(location)}" target="_blank" rel="noopener noreferrer" data-location="${location.name}">Get Directions</a>
        </div>
      </div>
    `;
  }

  function initList(markers, map) {
    const list = document.getElementById('location-list');
    if (!list) return;

    list.innerHTML = locations.map((location, index) => `
      <article class="location-card" tabindex="0" data-location-index="${index}">
        <span class="status">${location.status}</span>
        <h3>${location.name}</h3>
        <p>${location.address}</p>
        <p>${location.serviceTimes}</p>
        <p><a href="mailto:${location.email}">${location.email}</a></p>
        <p><a href="${directionsUrl(location)}" target="_blank" rel="noopener noreferrer">Get Directions</a></p>
      </article>
    `).join('');

    list.querySelectorAll('.location-card').forEach(card => {
      const open = () => {
        const index = Number(card.dataset.locationIndex);
        const location = locations[index];
        map.setView([location.lat, location.lng], location.status === 'Upcoming' ? 8 : 12, { animate: true });
        markers[index].openPopup();
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
      card.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => window.Analytics?.directionsClick(locations[Number(card.dataset.locationIndex)].name));
      });
    });
  }

  window.initChurchMap = function initChurchMap() {
    const mapEl = document.getElementById('church-map');
    if (!mapEl || !window.L) return;

    const map = L.map(mapEl, { scrollWheelZoom: false }).setView([12.8, 75.6], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const icon = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pin"></div>', iconSize: [30, 42], iconAnchor: [15, 42] });
    const markers = locations.map((location, index) => {
      const marker = L.marker([location.lat, location.lng], { icon }).addTo(map).bindPopup(popup(location), { maxWidth: 330 });
      marker.on('mouseover', () => {
        if (window.matchMedia('(hover: hover)').matches) marker.openPopup();
      });
      marker.on('popupopen', () => {
        document.querySelectorAll('.location-card').forEach(card => card.classList.toggle('active', Number(card.dataset.locationIndex) === index));
        window.Analytics?.mapMarkerOpen(location.name);
        setTimeout(() => {
          document.querySelectorAll('.map-popup a[target="_blank"]').forEach(link => {
            link.addEventListener('click', () => window.Analytics?.directionsClick(link.dataset.location || location.name));
          });
        }, 0);
      });
      return marker;
    });

    initList(markers, map);
  };
})();
