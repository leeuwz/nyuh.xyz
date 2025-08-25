"use client";

import Image from "next/image";
import Nav from "./components/nav";
import Home from "./sections/home";
import GFX from "./sections/gfx";
import Artworks from "./sections/artworks";
import OsuSkins from "./sections/osuSkins";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEasterEgg from "./util/easteregg";

export default function Index() {
  // bunch of logic to handle setting sections active and remember which section was last active :3
  const [activeSection, setActiveSection] = useState('home');

  const getSectionFromHash = () => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.slice(1);
    const validSections = ['home', 'gfx', 'artworks', 'osu-skins'];
    return validSections.includes(hash) ? hash : 'home';
  };

  const updateHash = (section: string) => {
    if (typeof window !== 'undefined') {
      if (section === 'home') {
        window.history.replaceState(null, '', window.location.pathname);
      } else {
        window.location.hash = section;
      }
    }
  };

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
    updateHash(section);
  };

  useEffect(() => {
    const initialSection = getSectionFromHash();
    setActiveSection(initialSection);

    const handleHashChange = () => {
      const newSection = getSectionFromHash();
      setActiveSection(newSection);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.scrollTo(0, 0);

    const cleanupEasterEgg = useEasterEgg();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      cleanupEasterEgg();
    };
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
          <Nav activeSection={activeSection} setActiveSection={handleSetActiveSection} />
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