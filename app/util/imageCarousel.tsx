"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ImageCarouselProps {
  images: string[];
  skinTitle: string;
  onImageClick: (image: string) => void;
}

export default function ImageCarousel({ images, skinTitle, onImageClick }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
          onClick={() => onImageClick(images[currentImageIndex])}
        >
          <Image
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
