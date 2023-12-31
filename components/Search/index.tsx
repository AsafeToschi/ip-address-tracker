"use client";

import ArrowIcon from "@/public/images/icon-arrow.svg";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IGeolocation } from "../Map/model";
import { defaultMapCenter } from "@/components/Map/data";

interface ISearchProps {
    setMapCenter: Dispatch<SetStateAction<IGeolocation>>
}

export default function Search({ setMapCenter }: ISearchProps) {
    console.log("Search render");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMapCenter((center) => {
            if (center.lat === defaultMapCenter.lat) {
                return { lat: 43.732485, lng: 7.415062 }
            }
            return defaultMapCenter
        });
    }

    return (
        <form className="flex w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for any IP address or domain" className="
                block w-full py-4 px-7 rounded-2xl rounded-r-none text-lg outline-none 
            " />
            <button
                type="submit"
                className="block py-4 px-6 bg-black text-white rounded-2xl rounded-l-none"
            >
                <ArrowIcon className="h-4 w-auto"/>
            </button>
        </form>
    )
}