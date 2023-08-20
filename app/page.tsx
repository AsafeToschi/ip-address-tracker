"use client";

import Image from "next/image";
import backgroundImage from "../public/images/pattern-bg-desktop.png";
import SearchResult from "@/components/SearchResult";
import Search from "@/components/Search";
import Map from "@/components/Map";
import { useState } from "react";

const data = {
    ipAddress: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC -05:00",
    isp: "SpaceX Starlink"
}

export default function Home() {
    const [scrollWheel, setScrollWheel] = useState<boolean>(false);

    return (
        <main className="relative w-full h-screen">
            {/* Search */}
            <div className="relative px-5">
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

                        <Search />
                    </div>
                    <SearchResult {...data} />
                </div>
            </div>

            {/* Map */}
            <div className="h-full bg-red-500" onClick={() => setScrollWheel((currentValue) => { console.log(!currentValue); return !currentValue })}>
                <Map scrollWheelZoom={scrollWheel} />
            </div>

        </main>
    )
}
