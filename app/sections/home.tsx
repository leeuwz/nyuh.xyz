import Image from "next/image";
import Socials from "../components/socials";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center px-4 w-full">
            <Image 
                alt="nyuh" 
                src="/nyuh.png" 
                height={1920} 
                width={1920}
                quality={100}
                unoptimized={true}
                className="select-none pointer-events-none my-2 w-[300px] sm:w-[450px] md:w-[550px] lg:w-[700px] h-auto"
                priority
            />
            <Socials />
            <hr className="my-3 md:my-4 rounded h-[4px] md:h-[5.5px] w-[250px] sm:w-[350px] md:w-[500px] bg-white border-0" />
            <div className="mt-1 font-red-hat-display text-white text-[14px] sm:text-[16px] md:text-[18px] tracking-[0.1rem] sm:tracking-[0.15rem] md:tracking-[0.2rem] text-center">
                <p className="mb-[0.6em]">she/her ⁃ 20yo</p>
                <p className="mb-[0.6em]">discord: @nyuh.</p>
                <p>♡</p>
            </div>
        </div>
    )
}