"use client";

import { useState } from "react";
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
        skinTitle: "",
        images: ["/skins/me/aya1.jpg", "/skins/me/aya2.jpg", "/skins/me/aya3.jpg"],
        skinUrl: "#/"
      },
      {
        skinTitle: "",
        images: ["/skins/me/aya1.jpg", "/skins/me/aya2.jpg", "/skins/me/aya3.jpg"],
        skinUrl: "#/"
      },
      {
        skinTitle: "",
        images: ["/skins/me/aya1.jpg", "/skins/me/aya2.jpg", "/skins/me/aya3.jpg"],
        skinUrl: "#/"
      }
    ]
  }
};

export default function OsuSkins() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Skins by me");

  const categories = Object.keys(skinsData);

  return (
    <div className="flex flex-col items-center justify-center w-5/6 mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
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
      <div className="text-center mb-6 sm:mb-8">
        <p className="font-raleway text-white text-[14px] sm:text-[16px] md:text-[18px] tracking-[0.1rem] sm:tracking-[0.15rem] md:tracking-[0.2rem] opacity-80">
          {skinsData[activeCategory as keyof typeof skinsData].description}
        </p>
      </div>

      {/* Skins Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {skinsData[activeCategory as keyof typeof skinsData].skins.map((skin, index) => (
          <div key={index} className="rounded-lg p-4 sm:p-6" style={{ backgroundColor: 'rgba(25,22,23,0.569)' }}>
            {/* Skin Images Carousel */}
            <div className="mb-4">
              <ImageCarousel
                images={skin.images}
                skinTitle={skin.skinTitle}
                onImageClick={setSelectedImage}
              />
            </div>
            <a href={skin.skinUrl} className="font-red-hat-display text-white text-lg sm:text-xl mb-3 sm:mb-4 text-center tracking-[0.1rem] underline hover:text-[#F7395B] transition duration-300">
              {skin.skinTitle}
            </a>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Skin preview"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
                unoptimized
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
