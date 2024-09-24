// src/MapComponent.tsx
import { FC } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  LayersControl,
} from "react-leaflet";
import { MapComponentProps } from "../types";
import L from "leaflet";
import customMarker from "../../assets/location.png";
const { BaseLayer } = LayersControl;
const customIcon = new L.Icon({
  iconUrl: customMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const MapComponent: FC<MapComponentProps> = ({
  locations,
  center = [49.4333, 11.1111],
  zoom = 13,
  children,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      className="h-full w-full z-0"
      zoomControl={false}
      zoomAnimation
    >
      {/* layers toggle */}
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap Default">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>

        <BaseLayer name="OpenStreetMap Black & White ">
          <TileLayer
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
        </BaseLayer>

        <BaseLayer name="Satellite">
          <TileLayer
            attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
          />
        </BaseLayer>
      </LayersControl>

      {/* child components like flyToComponent */}
      {children}

      {/* Zoom toggle */}
      <ZoomControl position="bottomright" />

      {/* Show markers and their detail */}
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={customIcon}
        >
          <Popup className="custom-popup">
            <div className="dark:text-white text-gray800">
              <strong className="text-secondary text-lg">
                {location.name}
              </strong>
              <br />
              {location.description}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
