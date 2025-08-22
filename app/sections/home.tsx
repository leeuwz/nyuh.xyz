import Image from "next/image";
import Socials from "../components/socials";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image alt="nyuh" src="/nyuh.png" height={1920} width={1920} className="select-none pointer-events-none my-2 w-[700px] h-auto" />
            <Socials />
            <hr className="my-4 rounded h-[5.5px] w-[500px] bg-white border-0" />
            <div className="mt-1 font-red-hat-display text-white text-[18px] tracking-[0.2rem] text-center">
                <p className="mb-[0.6em]">she/her ⁃ 20yo</p>
                <p className="mb-[0.6em]">discord: @nyuh.</p>
                <p>♡</p>
            </div>
        </div>
    )
}