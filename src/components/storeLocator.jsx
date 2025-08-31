import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const stores = [
  { id: 1, name: "Downtown Pharmacy", lat: -3.745, lng: -38.523 },
  { id: 2, name: "Medical Center Pharmacy", lat: -3.74, lng: -38.51 },
  { id: 3, name: "Central Clinic Pharmacy", lat: -3.75, lng: -38.53 },
];

export default function StoreLocator() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: -3.745, lng: -38.523 });
  const [zoom, setZoom] = useState(10);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    stores.forEach((store) => bounds.extend({ lat: store.lat, lng: store.lng }));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!map || !searchQuery) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === "OK" && results && results.length > 0) {
        const newCenter = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        setMapCenter(newCenter);
        setZoom(12); // Adjust zoom to a street level view
      } else {
        alert("Geocoding failed. Please try a different location.");
      }
    });
  };

  return (
    <section id="stores" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Map Section */}
      <div className="rounded-3xl overflow-hidden border shadow-sm aspect-video">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {stores.map((store) => (
              <MarkerF
                key={store.id}
                position={{ lat: store.lat, lng: store.lng }}
              />
            ))}
          </GoogleMap>
        ) : (
          <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-500">
            Loading Map...
          </div>
        )}
      </div>

      {/* Content and Search Form Section */}
      <div>
        <h2 className="text-3xl font-extrabold">Find your nearest pharmacy</h2>
        <p className="mt-2 text-gray-600">
          Check opening times, services available, and contact details.
        </p>
        <form onSubmit={handleSearch} className="mt-4 flex gap-3">
          <label htmlFor="postcode" className="sr-only">
            Enter town or postcode
          </label>
          <input
            id="postcode"
            className="flex-1 rounded-2xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter town or postcode"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-2xl bg-emerald-600 text-white font-semibold px-5 py-3 hover:bg-emerald-700"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}