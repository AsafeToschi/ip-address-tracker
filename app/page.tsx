"use client";

import Image from "next/image";
import backgroundImage from "../public/images/pattern-bg-desktop.png";
import SearchResult from "@/components/SearchResult";
import Search from "@/components/Search";
import Map from "@/components/Map";
import { IGeolocation } from "@/components/Map/model";
import { useState } from "react";
import { defaultMapCenter } from "@/components/Map/data";

const data = {
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC -05:00",
    isp: "SpaceX Starlink"
}



export default function Home() {
    // const MapContext = createContext({
    //     geolocation: mapCenter,
    //     data: data
    // });
    console.log("page render")
    const [mapCenter, setMapCenter] = useState<IGeolocation>(defaultMapCenter);

    return (
        <main className="relative w-full h-screen">
            <div className="relative px-5 shadow-lg z-[10000]">
                <div>
                <Image
                    className="object-cover"
                    src={backgroundImage}
                    fill
                    quality={100}
                    priority
                    alt="Background image"
                />
                </div>
                <div className="max-w-5xl mx-auto relative">
                    <div className="py-10">
                        <h1 className="text-center text-3xl text-white font-semibold mb-7">IP Address Tracker</h1>
                        <Search setMapCenter={setMapCenter} />
                        
                    </div>
                    <SearchResult {...data} />
                </div>
            </div>

            <div className="h-full">
                <Map provider="leaflet" geolocation={mapCenter}/>
            </div>
        </main>
    )
}
