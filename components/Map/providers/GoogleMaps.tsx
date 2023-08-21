"use client";

import { Wrapper } from "@googlemaps/react-wrapper";
import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import { IGeolocation } from "../model";

interface IProviderProps {
    geolocation: IGeolocation;
    apiKey: string;
}

interface IMapProps extends google.maps.MapOptions {
    center: IGeolocation;
}

const Marker: FunctionComponent<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = useState<google.maps.Marker>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker({
                icon: {
                    url: "/images/icon-location.svg",
                    scaledSize: new google.maps.Size(46, 56),
                },
            }));
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};

const Map: FunctionComponent<IMapProps> = ({ center }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            // Init and update map
            setMap(new google.maps.Map(ref.current, {
                center: center,
                zoom: 17,
                disableDefaultUI: true,
            }));
        }
    }, [ref, map]);

    return (
        <>
            <div ref={ref} className="h-full w-full" />
            {map && <Marker map={map} position={center} /> }
        </>
    );
}

export default function GoogleMapsProvider({ geolocation, apiKey }: IProviderProps) {
    return (
        <Wrapper apiKey={apiKey} libraries={["marker"]}>
            <Map center={geolocation} />
        </Wrapper>
    )
}