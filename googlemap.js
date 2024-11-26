// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: 51.04, lng: 16.96 };
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Nasze główne biuro",
  });
}

initMap();
