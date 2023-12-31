import dynamic from "next/dynamic";
import GoogleMaps from "./providers/GoogleMaps";
import LeafletMap from "./providers/Leaflet";
import { IGeolocation } from "./model";

interface IMapProps {
    provider?: "leaflet" | "googleMaps";
    geolocation: IGeolocation;
}

const googleMapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY || "EMPTY";

export default function Map({ provider = 'leaflet', ...props }: IMapProps) {

    switch (provider) {
        case 'leaflet': return <LeafletMap {...props} />;
        case 'googleMaps': return <GoogleMaps {...props} apiKey={googleMapsApiKey} />;
        default: return <></>;
    }
}