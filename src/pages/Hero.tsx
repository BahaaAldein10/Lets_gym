"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { socials } from "@/constants";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative w-full">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        <div className="grid sm:grid-cols-2 w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-[20%] text-center glow"
          >
            <h1 className="sm:text-[3rem] text-[2.5rem] font-semibold sm:leading-[3rem]">
              <span className="text-[#ff0000]">Welcome</span> to Our Gym
            </h1>
            <h2 className="sm:text-[1.5rem] text-[1rem] font-semibold">
              Your fitness journey starts here.
            </h2>

            <Link href={"/"}>
              <Button title="Get Started" />
            </Link>

            <ul className="flex justify-center items-center gap-2 mt-6">
              {socials.map((item, index) => (
                <Link
                  key={`item-${index}`}
                  href={"/"}
                  className="p-2 bg-transparent rounded-full cursor-pointer hover:bg-[#ff0000] glow_shadow duration-300"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Design */}
      <Image
        src="/ribbon2.png"
        alt="ribbon"
        width={150}
        height={250}
        className="sm:hidden block absolute -bottom-10 left-0 h-[250px] -z-10"
      />
    </section>
  );
}

export default Hero;
