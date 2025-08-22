import Image from "next/image";

interface NavProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function Nav({ activeSection, setActiveSection }: NavProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-[95vw] lg:w-3/4 lg:rounded-full rounded-2xl px-2 sm:px-4" style={{ backgroundColor: 'rgba(25,22,23,0.569)' }}>
            {activeSection !== 'home' && (
                <Image
                    alt="nyuhtxtimg"
                    src="/nyuhtxt.png"
                    className="mt-1"
                    width={234}
                    height={234}
                    priority
                />
            )}
            <div className="text-white font-quicksand rounded-3xl py-2 lg:py-3 flex justify-center w-full">
                <div className="flex flex-col sm:flex-row sm:space-x-2 md:space-x-4 lg:space-x-[20px] space-y-2 sm:space-y-0 text-center w-full max-w-4xl">
                    <button
                        onClick={() => setActiveSection('home')}
                        className={`flex-1 min-w-0 sm:w-auto sm:min-w-[120px] md:min-w-[160px] lg:w-[215px] py-2 lg:py-1 px-2 lg:px-[8px] uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[7px] border rounded-lg nav-link text-xs sm:text-sm lg:text-base ${activeSection === 'home' ? 'nav-link-active' : ''}`}
                    >
                        home
                    </button>
                    <button
                        onClick={() => setActiveSection('gfx')}
                        className={`flex-1 min-w-0 sm:w-auto sm:min-w-[120px] md:min-w-[160px] lg:w-[215px] py-2 lg:py-1 px-2 lg:px-[8px] uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[7px] border rounded-lg nav-link text-xs sm:text-sm lg:text-base ${activeSection === 'gfx' ? 'nav-link-active' : ''}`}
                    >
                        gfx
                    </button>
                    <button
                        onClick={() => setActiveSection('artworks')}
                        className={`flex-1 min-w-0 sm:w-auto sm:min-w-[120px] md:min-w-[160px] lg:w-[215px] py-2 lg:py-1 px-2 lg:px-[8px] uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[7px] border rounded-lg nav-link text-xs sm:text-sm lg:text-base ${activeSection === 'artworks' ? 'nav-link-active' : ''}`}
                    >
                        artworks
                    </button>
                    <button
                        onClick={() => setActiveSection('osu-skins')}
                        className={`flex-1 min-w-0 sm:w-auto sm:min-w-[120px] md:min-w-[160px] lg:w-[215px] py-2 lg:py-1 px-2 lg:px-[8px] uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[7px] border rounded-lg nav-link text-xs sm:text-sm lg:text-base ${activeSection === 'osu-skins' ? 'nav-link-active' : ''}`}
                    >
                        osu! skins
                    </button>
                </div>
            </div>
        </div>
    )
}