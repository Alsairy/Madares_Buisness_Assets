function ensureLeafletAssets(cb) {
  if (typeof L !== 'undefined') return cb();
  const lk = document.querySelector('link[data-madares-leaflet]');
  const sk = document.querySelector('script[data-madares-leaflet]');
  if (lk && sk) { sk.addEventListener('load', cb); return; }
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  link.setAttribute('data-madares-leaflet', '1');
  document.head.appendChild(link);
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  script.defer = true;
  script.setAttribute('data-madares-leaflet', '1');
  script.onload = cb;
  document.head.appendChild(script);
}

frappe.ui.form.on('MOE Asset', {
  refresh(frm) {
    const wrap = frm.fields_dict.map_html && frm.fields_dict.map_html.$wrapper && frm.fields_dict.map_html.$wrapper.get(0);
    if (!wrap || wrap.dataset.mapInit) return;
    wrap.dataset.mapInit = '1';
    wrap.innerHTML = '<div id="moe-map" style="height:320px;border:1px solid #ddd;border-radius:6px;"></div>';
    ensureLeafletAssets(() => {
      const map = L.map('moe-map', { center: [24.7136, 46.6753], zoom: 10 });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);
      let marker;
      const setMarker = (lat, lng) => {
        if (marker) {
          marker.setLatLng([lat, lng]);
        } else {
          marker = L.marker([lat, lng], { draggable: true }).addTo(map);
          marker.on('dragend', e => {
            const { lat, lng } = e.target.getLatLng();
            frm.set_value('latitude', lat);
            frm.set_value('longitude', lng);
          });
        }
      };
      if (frm.doc.latitude && frm.doc.longitude) {
        setMarker(frm.doc.latitude, frm.doc.longitude);
        map.setView([frm.doc.latitude, frm.doc.longitude], 14);
      }
      map.on('click', e => {
        frm.set_value('latitude', e.latlng.lat);
        frm.set_value('longitude', e.latlng.lng);
        setMarker(e.latlng.lat, e.latlng.lng);
      });
    });
  }
});
