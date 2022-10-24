import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Maps() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/company")
      .then((response) => response.json())
      .then((data) => setCompany(data));
  }, []);


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
       <h2 style={{ textAlign: "center", marginTop: "15px" }}>
        Localização 
      </h2>
      <br/>
    
    <MapContainer
      center={[-30.094599, -51.243801]}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: "650px", width: "750px"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {company.map((company) => (
        <Marker position={[company.latitude, company.longitude]}>
          <Popup>
            <h3>{company.nome}</h3>
            <p>{company.endereço}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}
