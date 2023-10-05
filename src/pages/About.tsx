"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative mt-8 w-full lg:h-screen" id="about">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title h1="01" h2="About Us" />

        {/* Abouts */}
        <div className="relative grid lg:grid-cols-2 gap-8 mt-8 w-full">
          {/* Image */}
          <div className="w-full h-[520px]">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full"
              src="/about_image.png"
              alt="about_image"
            />
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[2rem] font-semibold">
              <span className="text-[#ff0000]">Our</span> Team
            </h1>
            <h2 className="text-[1.5rem] font-semibold">
              Dedicated to Your Fitness Journey
            </h2>
            <h3 className="mt-2 text-[1rem] font-semibold">
              Meet the dedicated professionals behind our fitness center. With
              years of experience and a passion for helping you achieve your
              fitness goals, our team is committed to providing you with the
              best fitness experience possible.
            </h3>

            <Button title="Meet Our Team" />
          </motion.div>
        </div>
      </div>

      {/* Design */}
      <Image
        src="/ribbon3.png"
        alt="ribbon"
        width={150}
        height={250}
        className="absolute right-0 bottom-20 h-[250px] -z-10"
      />
    </section>
  );
}

export default About;
