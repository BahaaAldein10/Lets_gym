"use client";

import Image from "next/image";
import Title from "@/components/Title";
import { gallery } from "@/constants";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <section className="mt-8 w-full gym_indoor" id="gallery">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title h1="03" h2="Our Gallery" />

        {/* Gallery */}
        <div className="relative grid sm:grid-cols-3 gap-4 mt-8 w-full">
          {gallery.map((item, index) => (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <Image
                src={item.image}
                alt="image"
                width={300}
                height={200}
                className="w-full h-[300px] rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
