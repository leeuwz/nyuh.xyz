export default function Nav() {
    return(
        <div className="text-white font-quicksand w-4/5 rounded-3xl py-4 flex justify-center" style={{ backgroundColor: 'rgba(25,22,23,0.569)' }}>
            <div className="flex space-x-[20px] flex text-center">
                <a href="#/" className="w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link">home</a>
                <a href="#/" className="w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link">gfx</a>
                <a href="#/" className="w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link">artworks</a>
                <a href="#/" className="w-[215px] py-1 px-[8px] uppercase tracking-[7px] border rounded-lg nav-link">osu! skins</a>
            </div>
        </div>
    )
}