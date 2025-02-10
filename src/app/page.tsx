"use client";
import Image from "next/image";
import testImage from "../../public/jari-hytonen-VJBIn6n_gzI-unsplash.webp";
import { motion } from "framer-motion";
import { Clock } from "./components/clock";
import Balancer from "react-wrap-balancer";
// import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden landing-container">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="relative w-full h-full"
      >
        <Image src={testImage} alt="bg" fill className="object-cover z-0" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/100 via-black/80 to-transparent z-10 backdrop-blur-[1rem] lg:backdrop-blur-0"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-between px-8 md:px-16 lg:px-24">
        <div className="flex-1 flex flex-col justify-center">
          <div className="ml-auto w-full md:w-1/2 text-right">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-semibold font-geistMono text-white mb-2"
            >
              Bazza Studio
            </motion.h1>
            {/* <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1], // easing suave
                delay: 0.7,
              }}
              className="flex justify-end w-full mb-4"
            >
              <Separator className="w-64 origin-right" />{" "}
            </motion.div> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
            >
              <Balancer>
                Revolutionizing restaurant management and urban exploration
                through intuitive, powerful web applications.
              </Balancer>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              className="mt-8 space-y-6 text-right"
            >
              {[
                {
                  name: "BAZZA",
                  description: "Complete Restaurant Management Suite",
                },
                { name: "PANORAMA", description: "Interactive City Explorer" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col md:flex-row md:items-center justify-end space-y-1 md:space-y-0 md:space-x-3"
                >
                  <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
                    <span className="text-sm font-bold text-zinc-300">
                      {item.name}
                    </span>
                    <span className="text-xs md:text-sm font-light text-zinc-400 md:before:content-['-'] md:before:mx-2 drop-shadow-xl">
                      {item.description}
                    </span>
                  </div>
                  <button className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-800 w-fit ml-auto disabled">
                    soon
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="mt-12"
          >
            <a
              href="mailto:contact@bazza.studio"
              className="inline-flex items-center space-x-2 lg:text-base text-sm text-zinc-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="font-light">Get in touch</span>
              <span className="font-mono group-hover:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </a>
          </motion.div>
        </div>
        <div className="py-8 text-right lg:block hidden">
          <Clock />
        </div>
      </div>
    </div>
  );
}
