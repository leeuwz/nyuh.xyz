"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ImageCarouselProps {
  images: string[];
  skinTitle: string;
  onImageClick: () => void;
  currentGlobalIndex?: number;
}

export default function ImageCarousel({ images, skinTitle, onImageClick, currentGlobalIndex = 0 }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    // Use global index to sync all carousels
    const newIndex = currentGlobalIndex % images.length;
    setCurrentImageIndex(newIndex);
  }, [currentGlobalIndex, images.length]);

  return (
    <div className="relative aspect-video cursor-pointer overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0"
          onClick={onImageClick}
        >
          <Image
            priority={true}
            src={images[currentImageIndex]}
            alt={`${skinTitle} preview ${currentImageIndex + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
