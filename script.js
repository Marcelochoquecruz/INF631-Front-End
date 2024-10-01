function initMap() {
  const potosi = [-19.589, -65.7534]; // Coordenadas aproximadas de Potosí, Bolivia
  const map = L.map("map").setView(potosi, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(potosi)
    .addTo(map)
    .bindPopup("Colegio Alternativo - Av. España 22, Potosí")
    .openPopup();
}

document.addEventListener("DOMContentLoaded", initMap);
