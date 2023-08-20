"use client";

import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useMap } from "react-leaflet/hooks";

import { useMemo, useState } from "react";

interface IMapProps {
    scrollWheelZoom?: boolean;
}

export default function Map({ scrollWheelZoom = false }: IMapProps) {
    const [map, setMap] = useState<any>(null);
    const [scroll, setScroll] = useState<boolean>(false);

    const markerIconInstance = useMemo(() => (
        // rendered on client side, so we can pass a relative URL like we would do in the browser
        // it won't accept a SVG component, only URLs
        new Icon({
            iconUrl: "/images/icon-location.svg",
            iconSize: [46, 56],
            iconAnchor: [23, 56],
        })
    ), []);

    console.log(map);
    
    return (
        <div className="h-full" onClick={
            () => {
                if (scroll) {
                    map.scrollWheelZoom.disable();
                    setScroll(false);
                    console.log("scroll", false);
                } else {
                    map.scrollWheelZoom.enable();
                    setScroll(true);
                    console.log("scroll", true);
                }
            }
        }>
            <MapContainer center={[48.8579383, 2.2885164]} zoom={13} scrollWheelZoom={scrollWheelZoom} ref={setMap} className="h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[48.8579383, 2.2885164]} icon={markerIconInstance} />
            </MapContainer>
        </div>
    )
}