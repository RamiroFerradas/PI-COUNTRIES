import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import Apkey from "../../../Apkey";

export default function MapComponent({ lat, lng }) {
  const containerStyle = {
    width: "600px",
    height: "400px",
  };

  const center = {
    lat: lat && lat,
    lng: lng && lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: Apkey(),
  });

  const [map, setMap] = useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={40}
      onLoad={(map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
      }}
      onUnmount={(map) => {}}
    ></GoogleMap>
  ) : (
    <p>Cargando...</p>
  );
}
