"use client";

import ArrowIcon from "@/public/images/icon-arrow.svg";

export default function Search() {
    return (
        <div className="flex w-full max-w-xl mx-auto">
            <input type="text" placeholder="Search for any IP address or domain" className="
                block w-full py-4 px-7 rounded-2xl rounded-r-none text-lg outline-none 
            " />
            <button type="button" className="block py-4 px-6 bg-black text-white rounded-2xl rounded-l-none">
                <ArrowIcon className="h-4 w-auto"/>
            </button>
        </div>
    )
}