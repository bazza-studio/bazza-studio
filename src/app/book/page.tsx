"use client";

import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import Cal from "@calcom/embed-react";

export default function BookPage() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background with gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-zinc-900 to-black z-0" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-8 md:px-16 lg:px-24 py-8"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm font-jetbrains text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Cal Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 px-8 md:px-16 lg:px-24 pb-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold font-jetbrains text-white"
              >
                Book a Meeting
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-zinc-400 font-light font-geist max-w-2xl"
              >
                Let&rsquo;s chat about your project. Share your ideas and let&rsquo;s explore how we can help bring them to life.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-[700px] lg:h-[800px]"
            >
              <Cal
                calLink="bazza-studio/30min"
                style={{ width: "100%", height: "100%" }}
                config={{ theme: "dark" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
