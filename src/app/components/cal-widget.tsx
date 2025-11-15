"use client";

import { motion } from "framer-motion";
import { Link } from "next-view-transitions";

export default function CalWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
    >
      <Link
        href="/book"
        className="inline-flex items-center space-x-2 lg:text-base text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-jetbrains"
      >
        <span>Book a Call</span>
        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
          →
        </span>
      </Link>
    </motion.div>
  );
}