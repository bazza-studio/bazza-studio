"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("es-CL", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className="text-sm text-zinc-400 font-mono"
    >
      {time} CLT
    </motion.div>
  );
}
