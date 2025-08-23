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
        images: ["/skins/aya1.jpg", "/skins/aya2.jpg", "/skins/aya3.jpg"], 
        skinUrl: "https://drive.google.com/drive/folders/113nb4nAbKEk3LabJB20upLcs-0QxVbeN"
      },
      {
        skinTitle: "[東方Project] - ✿ Nyuh 『Remilia Scarlet』",
        images: ["/skins/remilia1.jpg", "/skins/remilia2.jpg", "/skins/remilia3.jpg"], 
        skinUrl: "https://drive.google.com/drive/folders/1ei2RlneF3u1-GX5cWWuKYqg5poH53ZL8"
      },
      {
        skinTitle: "- 鬼 Nakiri Ayame",
        images: ["/skins/nakiri1.jpg", "/skins/nakiri2.jpg", "/skins/nakiri3.jpg"], 
        skinUrl: "https://drive.google.com/drive/folders/1yUPSDSMGTJVxGaBdKpgX6jZiXpS-SdP6"
      }
    ]
  },
  "NM Skins": {
    description: "bwaaa",
    skins: [
      {
        skinTitle: "",
        images: ["/skins/aya1.jpg", "/skins/aya2.jpg", "/skins/aya3.jpg"], 
        skinUrl: "#/"
      },
      {
        skinTitle: "",
        images: ["/skins/aya1.jpg", "/skins/aya2.jpg", "/skins/aya3.jpg"], 
        skinUrl: "#/"
      }
    ]
  },
  "DT Skins": {
    description: "bwaaaaa2",
    skins: [
      {
        skinTitle: "",
        images: ["/skins/aya1.jpg", "/skins/aya2.jpg", "/skins/aya3.jpg"], 
        skinUrl: "#/"
      },
      {
        skinTitle: "",
        images: ["/skins/aya1.jpg", "/skins/aya2.jpg", "/skins/aya3.jpg"], 
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
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-4 py-2 rounded-lg font-quicksand text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] transition-all duration-300 ${
              activeCategory === category
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-white hover:bg-white hover:text-black'
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
            <h3 className="font-red-hat-display text-white text-lg sm:text-xl mb-3 sm:mb-4 text-center tracking-[0.1rem]">
              {skin.skinTitle}
            </h3>
            
            {/* Skin Images Carousel */}
            <div className="mb-4">
              <ImageCarousel 
                images={skin.images} 
                skinTitle={skin.skinTitle} 
                onImageClick={setSelectedImage}
              />
            </div>
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
