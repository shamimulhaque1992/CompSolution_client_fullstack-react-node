import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import style from "./GoogleMapContainer.module.css";
import { useForm } from "react-hook-form";
import mapCredintial from "./osm-providers";

const GoogleMapContainer = () => {
  return (
    <div className="">
      <div>
        <MapContainer
          className={style.mapsize}
          id="distance"
          center={[23.782221427930885, 90.35954877276002]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution={mapCredintial.maptailer.attribution}
            url={mapCredintial.maptailer.url}
          />
          <Marker position={[23.782221427930885, 90.35954877276002]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default GoogleMapContainer;
