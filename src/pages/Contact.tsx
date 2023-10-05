"use client";

import Button from "@/components/Button";
import Title from "@/components/Title";
import { contacts } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <section className="relative mt-8 w-full lg:h-screen" id="contact">
      <div className="container m-auto p-4 sm:w-[80%] w-[90%]">
        {/* Title */}
        <Title h1="05" h2="Contact Us" />

        {/* Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 text-center w-full"
        >
          <form
            target="_blank"
            className="m-auto lg:w-[80%] w-full rounded-2xl"
          >
            <div className="flex justify-center items-center gap-4 w-full">
              <input
                type="text"
                name="fname"
                id="fname"
                maxLength={20}
                placeholder="First Name"
                className="p-4 w-[50%] text-base font-semibold text-white bg-[#111111] border-none outline-none rounded-lg"
              />

              <input
                type="text"
                name="lname"
                id="lname"
                maxLength={20}
                placeholder="Last Name"
                className="p-4 w-[50%] text-base font-semibold text-white bg-[#111111] border-none outline-none rounded-lg"
              />
            </div>

            <div className="mt-4 text-center w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="p-4 w-full text-base font-semibold text-white bg-[#111111] border-none outline-none rounded-lg"
              />
            </div>

            <div className="mt-4 text-center w-full">
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Message.."
                className="p-4 w-full text-base font-semibold text-white bg-[#111111] border-none outline-none resize-none rounded-lg"
              />
            </div>

            <Button title="Submit" type="submit" />
          </form>

          <ul className="lg:flex justify-center gap-4 block m-auto mt-4 w-fit">
            {contacts.map((contact, index) => (
              <li key={`contact-${index}`} className="flex gap-2 p-2">
                <Image
                  src={contact.image}
                  alt={contact.name}
                  width={24}
                  height={24}
                  className="w-6"
                />
                <Link href={contact.url} className="text-[1rem] font-semibold">
                  {contact.description}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
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

export default Contact;
