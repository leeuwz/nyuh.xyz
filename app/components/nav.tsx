import Image from "next/image";

interface NavProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function Nav({ activeSection, setActiveSection }: NavProps) {
    return (
        <div className="flex flex-col justify-center items-center w-3/4 rounded-full" style={{ backgroundColor: 'rgba(25,22,23,0.569)' }}>
            {activeSection !== 'home' && (
                <Image alt="nyuhtxtimg" src="/nyuhtxt.png" className="mt-1" width={234} height={234} />
            )}
            <div className="text-white font-quicksand rounded-3xl py-3 flex justify-center">
                <div className="flex space-x-[20px] flex text-center">
                    <button
                        onClick={() => setActiveSection('home')}
                        className={`w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link ${activeSection === 'home' ? 'nav-link-active' : ''}`}
                    >
                        home
                    </button>
                    <button
                        onClick={() => setActiveSection('gfx')}
                        className={`w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link ${activeSection === 'gfx' ? 'nav-link-active' : ''}`}
                    >
                        gfx
                    </button>
                    <button
                        onClick={() => setActiveSection('artworks')}
                        className={`w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link ${activeSection === 'artworks' ? 'nav-link-active' : ''}`}
                    >
                        artworks
                    </button>
                    <button
                        onClick={() => setActiveSection('osu-skins')}
                        className={`w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link ${activeSection === 'osu-skins' ? 'nav-link-active' : ''}`}
                    >
                        osu! skins
                    </button>
                </div>
            </div>
        </div>
    )
}