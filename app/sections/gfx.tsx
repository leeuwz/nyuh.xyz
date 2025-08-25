import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gfxWork: {
    titles: string[],
    gfxUrls: string[],
    descs: string[],
    images: string[]
}[] = [
        {
            titles: ["Simba Cup 🐶 :: 2024"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/1877325?n=1"],
            descs: ["• Entire design made by me"],
            images: ["/gfx/simba.gif"]
        },
        {
            titles: ["Turkic Council League :: 2024"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/1894123?n=1"],
            descs: ["• Entire design made by me (except stream overlay)"],
            images: ["/gfx/turkic.gif"]
        },
        {
            titles: ["Harse Drip 6 :: 2025", "Harse Drip 5 :: 2024", "Harse Drip 4 :: 2023"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/2035929?n=1", "https://osu.ppy.sh/community/forums/topics/1802271?n=1", "#/"],
            descs: ["• Entire design and assets"],
            images: ["/gfx/harse.png", "/gfx/harse2.gif"]
        },
        {
            titles: ["ITALIAN DRAFT CUP 3 :: 2025"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/2076055?n=1"],
            descs: ["• Stream assets", "• Perks"],
            images: ["/gfx/idc.jpg", "/gfx/idc2.jpg"]
        },
        {
            titles: ["Fritto Misto Cup :: 2025"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/2044778?n=1"],
            descs: ["• Spreadsheet", "• Stream assets", "• Icon"],
            images: ["/gfx/fritto.jpg"]
        },
        {
            titles: ["Treasure Hunters :: 2025"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/2002568?n=1"],
            descs: ["• Badge & Banners"],
            images: ["/gfx/treasure.jpg", "/gfx/treasure.gif"]
        },
        {
            titles: ["osu!Kazakhstan Community Cup 5 :: 2024"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/1922332?n=1"],
            descs: ["• Badge"],
            images: ["/gfx/kazak.jpg"]
        },
        {
            titles: ["osu! Italian Cup #8 :: 2023"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/1815801?n=1"],
            descs: ["• Stream assets"],
            images: ["/gfx/oic.jpg"]
        },
        {
            titles: ["Marathonians: Reborn :: 2023"],
            gfxUrls: ["https://osu.ppy.sh/community/forums/topics/1750697?n=1"],
            descs: ["• Stream assets"],
            images: ["/gfx/reborn.jpg"]
        }
    ]

export default function GFX() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedWork, setSelectedWork] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Close modal on ESC key and handle arrow keys
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedWork, currentImageIndex]);

    const openImageModal = (work: any, imageIndex: number = 0) => {
        setSelectedWork(work);
        setSelectedImage(work.images[imageIndex]);
        setCurrentImageIndex(imageIndex);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedWork(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedWork && selectedWork.images.length > 1) {
            const nextIndex = (currentImageIndex + 1) % selectedWork.images.length;
            setCurrentImageIndex(nextIndex);
            setSelectedImage(selectedWork.images[nextIndex]);
        }
    };

    const prevImage = () => {
        if (selectedWork && selectedWork.images.length > 1) {
            const prevIndex = currentImageIndex === 0 ? selectedWork.images.length - 1 : currentImageIndex - 1;
            setCurrentImageIndex(prevIndex);
            setSelectedImage(selectedWork.images[prevIndex]);
        }
    };

    return (
        <div className="flex flex-col text-white w-full max-w-[95vw] sm:w-4/5 h-3/5">
            <div className="flex flex-col items-center justify-center font-red-hat-display text-white text-[16px] sm:text-[18px] md:text-[20px] tracking-[0.15rem] sm:tracking-[0.2rem] text-center py-2 sm:py-4 flex-shrink-0 px-4">
                <p className="sm:text-[16px] text-[11px]">(may add more stuff but i'm too lazy rn lol)</p>
            </div>
            
            {/* Scrollable container for GFX grid */}
            <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar px-2 sm:px-0">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pb-8">
                    {gfxWork.map((work, index) => (
                        <div 
                            key={index} 
                            className="font-red-hat-display flex flex-col sm:flex-row items-start justify-center py-4 sm:py-6 px-4 sm:px-6 rounded-2xl tracking-[0.15rem] sm:tracking-[0.2rem] gap-4 sm:gap-6 transition-transform duration-300"
                            style={{ backgroundColor: 'rgba(25,22,23,0.569)' }}
                        >
                            {/* Image section */}
                            <div className="flex-shrink-0 w-full sm:w-auto">
                                <div 
                                    className="rounded-lg overflow-hidden shadow-lg cursor-pointer w-full sm:w-auto"
                                    onClick={() => openImageModal(work, 0)}
                                >
                                    <Image 
                                        alt={work.titles[0]} 
                                        src={work.images[0]} 
                                        width={320} 
                                        height={180}
                                        quality={100}
                                        className="hover:scale-110 transition-transform duration-300 select-none w-full sm:w-[280px] md:w-[320px] h-auto object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Content section */}
                            <div className="flex-1 min-w-0 w-full">
                                <a 
                                    href={work.gfxUrls[0]} 
                                    className="text-[20px] sm:text-[22px] md:text-[24px] font-bold underline hover:text-[#F7395B] transition duration-300 block mb-3 break-words"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {work.titles[0]}
                                </a>
                                
                                <hr className="my-3 sm:my-4 rounded h-[2px] sm:h-[3px] bg-white border-0" />
                                
                                <div className="space-y-2">
                                    {work.descs.map((desc, descIndex) => (
                                        <p key={descIndex} className="text-[12px] sm:text-[14px] break-words">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                
                                {/* Additional titles if available */}
                                {work.titles.length > 1 && (
                                    <div className="mt-3 sm:mt-4 space-y-1">
                                        {work.titles.slice(1).map((title, titleIndex) => (
                                            <p key={titleIndex} className="text-[10px] sm:text-[12px] text-gray-400 italic break-words">
                                                <a
                                                    href={work.gfxUrls[titleIndex + 1] || "#/"} 
                                                    className="hover:text-[#F7395B] transition duration-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Also: {title}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Additional images indicator */}
                                {work.images.length > 1 && (
                                    <div className="mt-3">
                                        <span 
                                            className="text-[10px] sm:text-[12px] text-gray-500 bg-gray-800 px-2 py-1 rounded cursor-pointer hover:bg-gray-700 hover:text-gray-300 transition-all duration-200 inline-block"
                                            onClick={() => openImageModal(work, 1)}
                                        >
                                            +{work.images.length - 1} more images
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Modal */}
            <AnimatePresence>
                {selectedImage && selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(25,22,23,0.869)' }}
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="max-w-[95vw] max-h-[95vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* X Close Button */}
                            <button
                                onClick={closeModal}
                                className="cursor-pointer absolute top-[-10px] right-[-10px] sm:top-[-15px] sm:right-[-15px] z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-200"
                            >
                                ×
                            </button>
                            
                            {/* Previous Image Button (only show if multiple images) */}
                            {selectedWork.images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className="cursor-pointer absolute top-1/2 left-[-20px] sm:right-[-25px] transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-200"
                                >
                                    ←
                                </button>
                            )}
                            
                            {/* Next Image Button (only show if multiple images) */}
                            {selectedWork.images.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className="cursor-pointer absolute top-1/2 right-[-20px] sm:right-[-25px] transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-200"
                                >
                                    →
                                </button>
                            )}
                            
                            <Image
                                src={selectedImage}
                                alt="Full size view"
                                width={1200}
                                height={800}
                                quality={100}
                                className="w-auto h-auto max-w-full max-h-full object-contain"
                            />
                            
                            {/* Image counter */}
                            {selectedWork.images.length > 1 && (
                                <div className="absolute bottom-[-20px] sm:bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm">
                                    {currentImageIndex + 1} / {selectedWork.images.length}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}