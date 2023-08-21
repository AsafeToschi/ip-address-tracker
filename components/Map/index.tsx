import dynamic from "next/dynamic";
import GoogleMaps from "./providers/GoogleMaps";

interface IMapProps {
    provider?: string;
    geolocation: {
        lat: number;
        lng: number;
    }; 
}

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || "EMPTY";

export default function Map({ provider = 'leaflet', ...props }: IMapProps) {
    const LeafletMap = dynamic(() => import("./providers/Leaflet"), {
        ssr: false
    });

    switch (provider) {
        case 'leaflet': return <LeafletMap {...props} />;
        case 'googleMaps': return <GoogleMaps {...props} apiKey={googleMapsApiKey} />;
        default: return <></>;
    }
}