"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { Icon } from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { useEffect, useMemo, useState } from "react";
import { IGeolocation } from "../model";

interface IMapProps {
    geolocation: IGeolocation;
}

export default function LeafletProvider({ geolocation }: IMapProps) {
    const [map, setMap] = useState<any>(null);
    const [toggle, setToggle] = useState<boolean>(true);
    
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
            map.addHandler("gestureHandling", GestureHandling);
            map.gestureHandling.enable();
        }
    }, [map]);
    
    return (
        <MapContainer
            center={[geolocation.lat, geolocation.lng]}
            zoom={13}
            scrollWheelZoom={false}
            ref={setMap}
            className="h-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[geolocation.lat, geolocation.lng]} icon={markerIconInstance} />
        </MapContainer>
    )
}