"use client";

import Image from "next/image";
import Nav from "./components/nav";
import Home from "./sections/home";
import GFX from "./sections/gfx";
import Artworks from "./sections/artworks";
import OsuSkins from "./sections/osuSkins";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSection = () => {
    const sectionContent = (() => {
      switch (activeSection) {
        case 'home':
          return <Home />;
        case 'gfx':
          return <GFX />;
        case 'artworks':
          return <Artworks />;
        case 'osu-skins':
          return <OsuSkins />;
        default:
          return <Home />;
      }
    })();

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-center w-full h-screen"
        >
          <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
          {sectionContent}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {renderSection()}
      </div>
      {activeSection == "home" && (
        <div className="flex justify-center mb-10">
          <Image alt="silly gif" src="/nyuh.gif" width={60} height={60} />
        </div>
      )}
    </>
  );
}