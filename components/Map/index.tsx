"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { Icon } from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { useMap } from "react-leaflet/hooks";

import { SyntheticEvent, useEffect, useMemo, useState } from "react";

interface IMapProps {
    scrollWheelZoom?: boolean;
}

export default function Map({ scrollWheelZoom = false }: IMapProps) {
    const [map, setMap] = useState<any>(null);
    
    const markerIconInstance = useMemo(() => (
        // rendered on client side, so we can pass a relative URL like we would do in the browser
        // it won't accept a SVG component, only URLs
        new Icon({
            iconUrl: "/images/icon-location.svg",
            iconSize: [46, 56],
            iconAnchor: [23, 56],
        })
    ), []);

    useEffect(() => {
        if (map) {
            map.gestureHandling.enable();
            map.addHandler("gestureHandling", GestureHandling);
        }
    }, [map]);
    
    return (
        <MapContainer
            center={[48.8579383, 2.2885164]}
            zoom={13}
            scrollWheelZoom={scrollWheelZoom}
            ref={setMap}
            className="h-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.8579383, 2.2885164]} icon={markerIconInstance} />
        </MapContainer>
    )
}