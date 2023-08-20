interface ISearchResultProps {
    ipAddress?: string;
    location?: string;
    timezone?: string;
    isp?: string;
}

export default function SearchResult({ ipAddress, location, timezone, isp }: ISearchResultProps) {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-4 bg-white p-10 rounded-2xl shadow-xl translate-y-1/2 -mt-[150px] lg:-mt-16 z-[1000]">
            <div className="
                px-0 first:pl-0 last:pr-0 relative
                lg:px-8
                before:last:hidden before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:w-px before:h-3/4
                before:hidden before:lg:block
            ">
                <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-[.16em] mb-2">IP Address</span>
                <span className="text-2xl font-semibold">
                    { ipAddress || "Not found" }
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
                    { location || "Not found" }
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
                    { timezone || "Not found" }
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
                    { isp || "Not found" }
                </span>
            </div>
        </div>
    );
}