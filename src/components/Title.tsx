"use client"

import { motion } from "framer-motion";

interface Props {
  h1: string;
  h2: string;
}

function Title({ h1, h2 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      className="flex justify-center gap-2"
    >
      <h1 className="text-[2rem] font-extrabold text-[#ff0000]">{h1}</h1>
      <h2 className="text-[2rem] font-semibold text-white">{h2}</h2>
    </motion.div>
  );
}

export default Title;
