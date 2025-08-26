"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ImageCarousel from "../util/imageCarousel";

const skinsData = {
  "Skins by me": {
    description: "Skins by me :3",
    skins: [
      {
        skinTitle: "- # Ayanami",
        images: ["/skins/me/aya1.jpg", "/skins/me/aya2.jpg", "/skins/me/aya3.jpg"],
        skinUrl: "https://drive.google.com/drive/folders/113nb4nAbKEk3LabJB20upLcs-0QxVbeN"
      },
      {
        skinTitle: "[東方Project] - ✿ Nyuh 『Remilia Scarlet』",
        images: ["/skins/me/remilia1.jpg", "/skins/me/remilia2.jpg", "/skins/me/remilia3.jpg"],
        skinUrl: "https://drive.google.com/drive/folders/1ei2RlneF3u1-GX5cWWuKYqg5poH53ZL8"
      },
      {
        skinTitle: "- 鬼 Nakiri Ayame",
        images: ["/skins/me/nakiri1.jpg", "/skins/me/nakiri2.jpg", "/skins/me/nakiri3.jpg"],
        skinUrl: "https://drive.google.com/drive/folders/1yUPSDSMGTJVxGaBdKpgX6jZiXpS-SdP6"
      }
    ]
  },
  "NM Skins": {
    description: "✧ NM Edits etc.",
    skins: [
      {
        skinTitle: "- new hd 5",
        images: ["/skins/nm/newhd1.jpg", "/skins/nm/newhd2.jpg", "/skins/nm/newhd3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/TXETmMHM"
      },
      {
        skinTitle: "-Reira+GF",
        images: ["/skins/nm/reira1.jpg", "/skins/nm/reira2.jpg", "/skins/nm/reira3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/0ghHLsM6"
      },
      {
        skinTitle: "- nyutori",
        images: ["/skins/nm/nyu1.jpg", "/skins/nm/nyu2.jpg", "/skins/nm/nyu3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/w5Srl3OS"
      },
      {
        skinTitle: "breakcore",
        images: ["/skins/nm/breakcore1.jpg", "/skins/nm/breakcore2.jpg", "/skins/nm/breakcore3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/z5H2AaOd"
      },
      {
        skinTitle: "# =w=",
        images: ["/skins/nm/=w=1.jpg", "/skins/nm/=w=2.jpg", "/skins/nm/=w=3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/gk6vIgwH"
      },
      {
        skinTitle: "Azure",
        images: ["/skins/nm/azure1.jpg", "/skins/nm/azure2.jpg", "/skins/nm/azure3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/uRHTOMEM"
      },
      {
        skinTitle: "eh",
        images: ["/skins/nm/eh1.jpg", "/skins/nm/eh2.jpg", "/skins/nm/eh3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/Ouq2o0cW"
      },
      {
        skinTitle: "- kodama - ryohka",
        images: ["/skins/nm/kodama1.jpg", "/skins/nm/kodama2.jpg", "/skins/nm/kodama3.jpg"],
        skinUrl: "https://skins.osuck.net/skins/506?v=0"
      },
      {
        skinTitle: "- # pii edit",
        images: ["/skins/nm/pii1.jpg", "/skins/nm/pii2.jpg", "/skins/nm/pii3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/CPRxZ1nV"
      },
      {
        skinTitle: "ushio",
        images: ["/skins/nm/ushio1.jpg", "/skins/nm/ushio2.jpg", "/skins/nm/ushio3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/McPooTTE"
      }
    ]
  },
  "DT Skins": {
    description: "✧ DT Edits etc.",
    skins: [
      {
        skinTitle: "Rafis but Nyuah",
        images: ["/skins/dt/rafnyu1.jpg", "/skins/dt/rafnyu2.jpg", "/skins/dt/rafnyu3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/nMrofGU4"
      },
      {
        skinTitle: "rir-dt",
        images: ["/skins/dt/rir1.jpg", "/skins/dt/rir2.jpg", "/skins/dt/rir3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/tDEH0fFp"
      },
      {
        skinTitle: "- Jabahh 2.0",
        images: ["/skins/dt/jab1.jpg", "/skins/dt/jab2.jpg", "/skins/dt/jab3.jpg"],
        skinUrl: "https://jabahhosu.s-ul.eu/lth5iOgQ"
      },
      {
        skinTitle: "- im a fancy cat",
        images: ["/skins/dt/fancy1.jpg", "/skins/dt/fancy2.jpg", "/skins/dt/fancy3.jpg"],
        skinUrl: "https://jabahhosu.s-ul.eu/lth5iOgQ"
      },
      {
        skinTitle: "- ✰ sacril hddt",
        images: ["/skins/dt/sac1.jpg", "/skins/dt/sac2.jpg", "/skins/dt/sac3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/d8A565v2"
      },
      {
        skinTitle: "slow cat",
        images: ["/skins/dt/slow1.jpg", "/skins/dt/slow2.jpg", "/skins/dt/slow3.jpg"],
        skinUrl: "https://nyuh.s-ul.eu/VwPPifj6"
      }
    ]
  }
};

export default function OsuSkins() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("Skins by me");
  const [globalImageIndex, setGlobalImageIndex] = useState(0);

  const categories = Object.keys(skinsData);

  // Global timer to sync all carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalImageIndex((prevIndex) => prevIndex + 1);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

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
  }, [selectedSkin, currentImageIndex]);

  const openImageModal = (skin: any, imageIndex: number = 0) => {
    setSelectedSkin(skin);
    setSelectedImage(skin.images[imageIndex]);
    setCurrentImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedSkin(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedSkin && selectedSkin.images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % selectedSkin.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(selectedSkin.images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedSkin && selectedSkin.images.length > 1) {
      const prevIndex = currentImageIndex === 0 ? selectedSkin.images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(selectedSkin.images[prevIndex]);
    }
  };

  return (
    <div className="flex flex-col text-white w-full max-w-[95vw] sm:w-4/5 h-3/5">
      {/* Header section - fixed at top */}
      <div className="flex-shrink-0 px-4">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mt-3 gap-2 sm:gap-4 mb-6 sm:mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-quicksand text-xs sm:text-sm border uppercase tracking-[2px] sm:tracking-[3px] transition-all duration-300 nav-link text-white ${activeCategory === category
                ? 'nav-link-active'
                : 'bg-transparent text-white border border-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-3 sm:mb-8">
          <p className="font-raleway text-white text-[14px] sm:text-[16px] md:text-[18px] tracking-[0.1rem] sm:tracking-[0.15rem] md:tracking-[0.2rem] opacity-80">
            {skinsData[activeCategory as keyof typeof skinsData].description}
          </p>
        </div>
      </div>

      {/* Scrollable container for Skins grid */}
      <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full pb-8">
          {skinsData[activeCategory as keyof typeof skinsData].skins.map((skin, index) => (
            <div key={index} className="rounded-lg p-4 sm:p-6" style={{ backgroundColor: 'rgba(25,22,23,0.569)' }}>
              {/* Skin Images Carousel */}
              <div className="mb-4 select-none">
                <ImageCarousel
                  images={skin.images}
                  skinTitle={skin.skinTitle}
                  onImageClick={() => openImageModal(skin, 0)}
                  currentGlobalIndex={globalImageIndex}
                />
              </div>
              <a href={skin.skinUrl} className="font-red-hat-display text-white text-lg sm:text-xl mb-3 sm:mb-4 text-center tracking-[0.1rem] underline hover:text-[#F7395B] transition duration-300">
                {skin.skinTitle}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && selectedSkin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{ backgroundColor: 'rgba(25,22,23,0.869)' }}
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
              {selectedSkin.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="cursor-pointer absolute top-1/2 left-[-20px] sm:right-[-25px] transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-200"
                >
                  ←
                </button>
              )}

              {/* Next Image Button (only show if multiple images) */}
              {selectedSkin.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="cursor-pointer absolute top-1/2 right-[-20px] sm:right-[-25px] transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-200"
                >
                  →
                </button>
              )}

              <Image
                priority={true}
                src={selectedImage}
                alt="Skin preview"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
                unoptimized
              />

              {/* Image counter */}
              {selectedSkin.images.length > 1 && (
                <div className="absolute bottom-[-20px] sm:bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm">
                  {currentImageIndex + 1} / {selectedSkin.images.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
