import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { SocialIcon } from "react-social-icons";

import { aboutText, teamName, mailURL } from "@/config";

const AboutUs = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About Us
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="/logo.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-28 h-28 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[240px] xl:h-[360px] pointer-events-none"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Hello, we&apos;re team{" "}
          <span className="underline decoration-[#44e7c3] cursor-pointer">
            {teamName}
          </span>
        </h4>
        <p className="text-lg">
          We are Computer Science Undergrads from{" "}
          <Link
            href="https://lnct.ac.in/"
            className="text-[#44e7c3] hover:underline hover:decoration-[#44e7c3] cursor-pointer"
            target="_blank"
          >
            LNCT, Bhopal.
          </Link>
        </p>

        {aboutText.map((text, index) => (
          <p key={index} className="text-lg">
            {text}
          </p>
        ))}

        <h2 className="text-lg">
          Reach out to us at:
          <SocialIcon
            className="cursor-pointer m-0"
            fgColor="#8B8B8B"
            bgColor="transparent"
            network="email"
            url={mailURL}
          />
        </h2>
      </div>
    </motion.div>
  );
};

export default AboutUs;
