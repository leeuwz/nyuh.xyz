"use client";

import { motion } from "motion/react";

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
