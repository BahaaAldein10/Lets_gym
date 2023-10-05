"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { services } from "@/constants";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className="mt-8 w-full" id="services">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title h1="02" h2="Our Services" />

        {/* Services */}
        <div className="relative grid lg:grid-cols-2 gap-8 mt-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-8 text-center bg-[#111111] rounded-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="m-auto"
              />
              <h1 className="mt-4 text-[2rem] font-semibold text-[#ff0000]">
                {service.title}
                <span className="text-white">{service.span}</span>
              </h1>
              <h2 className="mt-2 text-[1rem] font-semibold">
                {service.description}
              </h2>
              <ul className="m-auto mt-4 w-fit">
                {service.list.map((list, index) => (
                  <li
                    key={`link-${index}`}
                    className="flex gap-2 text-[1rem] font-semibold"
                  >
                    <span className="text-[#ff0000]">&#10149;</span>
                    {list}
                  </li>
                ))}
              </ul>
              <Button title={service.button} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
