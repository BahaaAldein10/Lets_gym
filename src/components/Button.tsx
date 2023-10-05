"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  type?: "button" | "submit";
}

function Button({ title, type }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      type={type}
      className="mt-6 px-4 py-2.5 text-[1.2rem] font-semibold text-[#ff0000] bg-transparent border-2 border-[#ff0000] rounded-full hover:bg-[#ff0000] hover:text-white glow_shadow"
    >
      {title}
    </motion.button>
  );
}

export default Button;
