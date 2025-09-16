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
    { coords: [59.431, 24.746], name: "Tallinn, The Krypt" },
    { coords: [59.426, 24.774], name: "Tallinn, Kidrakuur" },
    { coords: [59.437, 24.753], name: "Tallinn, Kinomaja" },
    { coords: [58.383, 26.722], name: "Tartu, Genialistide Klubi" },
    { coords: [59.352, 26.360], name: "Rakvere, Kära kants" },
    { coords: [58.388, 24.503], name: "Pärnu, Wundebaar" },
    { coords: [58.004, 27.341], name: "Veriora, Rock Stroganof" },
    { coords: [58.736, 26.535], name: "Kuremaa, Jõgevatreff" },
  ];

  return (
    <MapContainer
      center={[58.600, 24.7536]}
      zoom={7}
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
