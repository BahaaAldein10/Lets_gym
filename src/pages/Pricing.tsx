"use client";

import Image from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { pricing } from "@/constants";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <section className="relative mt-8 w-full lg:h-screen" id="pricing">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title h1="04" h2="Our Pricing" />

        {/* Pricing */}
        <div className="relative grid lg:grid-cols-3 gap-4 mt-8 text-center w-full">
          {pricing.map((item, index) => (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-8 bg-[#111111] rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="m-auto"
              />
              <h1 className="mt-4 text-[1.5rem] font-semibold text-[#ff0000]">
                {item.title} <span className="text-white">{item.span}</span>
              </h1>
              <h2 className="text-[2rem] font-semibold text-white">
                {item.price}
              </h2>
              <ul className="m-auto mt-4 w-fit">
                {item.features.map((item, index) => (
                  <li
                    key={`link-${index}`}
                    className="flex gap-2 text-[1rem] font-semibold"
                  >
                    <span className="text-[#ff0000]">&#x2713;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button title={item.button} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design */}
      <Image
        src="/ribbon2.png"
        alt="ribbon"
        width={150}
        height={250}
        className="absolute top-20 left-0 -z-10"
      />
      <Image
        src="/ribbon3.png"
        alt="ribbon"
        width={150}
        height={250}
        className="absolute right-0 bottom-20 -z-10"
      />
    </section>
  );
}

export default Pricing;
