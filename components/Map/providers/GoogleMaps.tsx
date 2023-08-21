"use client";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";

interface IProviderProps {
    geolocation: {
        lat: number;
        lng: number;
    };
    apiKey: string;
}

interface IMapProps extends google.maps.MapOptions {
    center: {
        lat: number;
        lng: number;
    }
}


const Map:FunctionComponent<IMapProps> = ({ center }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new google.maps.Map(ref.current, {
                center: center,
                zoom: 13,
                disableDefaultUI: true,
            }));
        }
    }, [ref, map]);

    return (
        <div ref={ref} className="h-full w-full" />
    );
}

export default function GoogleMapsProvider({ geolocation, apiKey }: IProviderProps) {

    return (
        <Wrapper apiKey={apiKey}>
            <Map center={geolocation}/>
        </Wrapper>
    )
}