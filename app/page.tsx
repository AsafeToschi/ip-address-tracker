"use client";

import Image from "next/image";
import backgroundImage from "../public/images/pattern-bg-desktop.png";
import ArrowIcon from "../public/images/icon-arrow.svg";

export default function Home() {
    return (
        <main className=" w-full h-screen bg-red-500">
            {/* Search */}
            <div className="relative px-5">
                <div>
                <Image
                    className="object-cover"
                    src={backgroundImage}
                    fill
                    priority
                    alt="Background image"
                />
                </div>
                <div className="max-w-5xl mx-auto relative">
                    <div className="py-10">
                        <h1 className="text-center text-3xl text-white font-semibold mb-7">IP Address Tracker</h1>

                        <div className="flex w-full max-w-xl mx-auto">
                            <input type="text" placeholder="Search for any IP address or domain" className="
                                block w-full py-4 px-7 rounded-2xl rounded-r-none text-lg outline-none 
                            " />
                            <button type="button" className="block py-4 px-6 bg-black text-white rounded-2xl rounded-l-none">
                                <ArrowIcon className="h-4 w-auto"/>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 bg-white p-10 rounded-2xl shadow-xl translate-y-1/2 -mt-[150px] lg:-mt-16">
                        <div className="
                            px-0 first:pl-0 last:pr-0 relative
                            lg:px-8
                            before:last:hidden before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:w-px before:h-3/4
                            before:hidden before:lg:block
                        ">
                            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-[.16em] mb-2">IP Address</span>
                            <span className="text-2xl font-semibold">
                                192.212.174.101
                            </span>
                        </div>

                        <div className="
                            px-0 first:pl-0 last:pr-0 relative
                            lg:px-8
                            before:last:hidden before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:w-px before:h-3/4
                            before:hidden before:lg:block
                        ">
                            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-[.16em] mb-2">Location</span>
                            <span className="text-2xl font-semibold">
                                Brooklyn, NY
                                10001
                            </span>
                        </div>

                        <div className="
                            px-0 first:pl-0 last:pr-0 relative
                            lg:px-8
                            before:last:hidden before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:w-px before:h-3/4
                            before:hidden before:lg:block
                        ">
                            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-[.16em] mb-2">Timezone</span>
                            <span className="text-2xl font-semibold">
                                UTC -05:00
                            </span>
                        </div>

                        <div className="
                            px-0 first:pl-0 last:pr-0 relative
                            lg:px-8
                            before:last:hidden before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:w-px before:h-3/4
                            before:hidden before:lg:block
                        ">
                            <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-[.16em] mb-2">ISP</span>
                            <span className="text-2xl font-semibold">
                                SpaceX Starlink
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="h-full bg-slate-200">

            </div>
        </main>
    )
}
