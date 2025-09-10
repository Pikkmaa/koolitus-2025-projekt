import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

function BioMap() {
  const positions = [
    { coords: [59.437, 24.7536], name: "Tallinn" },
    { coords: [58.378, 26.729], name: "Tartu" },
    { coords: [60.1699, 24.9384], name: "Helsinki" },
  ];

  return (
    <MapContainer
      center={[59.437, 24.7536]}
      zoom={6}
      style={{ height: "400px", width: "100%", marginTop: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((pos, idx) => (
        <Marker key={idx} position={pos.coords}>
          <Popup>{pos.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default BioMap;
