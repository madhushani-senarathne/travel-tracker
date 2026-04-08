import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

function LocationMarker({ setPins }) {
  useMapEvents({
    click(e) {
      setPins((prev) => [...prev, e.latlng]);
    },
  });

  return null;
}

export default function MapPage() {
  const [pins, setPins] = useState([]);

  return (
    <div style={{ height: "100vh" }}>
      <h2 style={styles.title}>Click Map to Add a Pin 📍</h2>

      <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: "85vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker setPins={setPins} />

        {pins.map((pos, index) => (
          <Marker key={index} position={pos}>
            <Popup>
              Visited Location <br />
              Lat: {pos.lat.toFixed(3)} <br />
              Lng: {pos.lng.toFixed(3)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

const styles = {
  title: {
    textAlign: "center",
    padding: "10px",
    fontSize: "22px",
    background: "#4CAF50",
    color: "white",
    margin: "0",
  },
};