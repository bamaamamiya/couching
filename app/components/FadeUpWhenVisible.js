"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeUpWhenVisible({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // animasi hanya 1x saat masuk viewport
    threshold: 0.1, // 10% dari komponen kelihatan, baru animasi
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
