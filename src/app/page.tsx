"use client";
import Image from "next/image";
import testImage from "../../public/jari-hytonen-VJBIn6n_gzI-unsplash.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock } from "./components/clock";
import Balancer from "react-wrap-balancer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <>
      {/* Parallax Background - Fixed */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="fixed inset-0 w-full h-full z-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="relative w-full h-full"
        >
          <Image src={testImage} alt="bg" fill className="object-cover" priority />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay - Fixed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="fixed inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 backdrop-blur-[0.5rem] lg:backdrop-blur-0"
      />

      <div className="snap-container relative w-full landing-container">

      {/* Main Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="snap-section flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12">
          {/* Clock - Top on desktop only */}
          <div className="hidden lg:block absolute top-12 left-24">
            <div className="text-sm text-zinc-400 font-jetbrains drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Clock />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full lg:w-2/3 lg:ml-auto text-left lg:text-right space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-4xl md:text-5xl lg:text-7xl tracking-tighter font-bold font-jetbrains text-white"
              >
                Bazza Studio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                className="text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed font-geist max-w-2xl lg:ml-auto"
              >
                <Balancer>
                  We are a technology consulting firm specialized in implementing Artificial Intelligence solutions, cloud infrastructure, and ETL processes. Our mission is to build robust, data-driven architectures that empower companies to innovate with confidence.
                </Balancer>
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                className="flex flex-col sm:flex-row lg:justify-end gap-4 sm:gap-6"
              >
                <a
                  href="https://github.com/bazza-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-jetbrains text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/company/bazzastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-jetbrains text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@bazza.studio"
                  className="text-sm font-jetbrains text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </div>

          {/* Clock - Bottom on mobile only */}
          <div className="lg:hidden py-8 text-left">
            <div className="text-sm text-zinc-400 font-jetbrains drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Clock />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="snap-section flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12"
        >
          <div className="w-full lg:w-2/3 lg:ml-auto text-left lg:text-right space-y-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold font-geist text-white mb-4"
              >
                Our Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-sm md:text-base text-zinc-400 font-light font-geist"
              >
                We&rsquo;re also working on our own internal products to push the boundaries of what&rsquo;s possible in web technology.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  name: "BAZZA",
                  description: "Complete Restaurant Management Suite",
                },
                {
                  name: "PANORAMA",
                  description: "Interactive City Explorer",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 lg:border-l-0 lg:border-r-2 border-zinc-700 pl-6 lg:pl-0 lg:pr-6 py-4"
                >
                  <div className="flex flex-col lg:items-end space-y-2">
                    <span className="text-2xl md:text-3xl font-bold text-white font-geist">
                      {item.name}
                    </span>
                    <span className="text-sm md:text-base font-light text-zinc-400 font-geist">
                      {item.description}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-700 w-fit font-jetbrains">
                      Coming Soon
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
