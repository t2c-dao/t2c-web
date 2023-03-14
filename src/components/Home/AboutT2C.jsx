import React from "react";
import { motion } from "framer-motion";

import { aboutT2CText, tagline } from "@/config";
import Image from "next/image";

const AboutT2C = () => {
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-bold">
        About Us
      </h3>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/t2cc.jpg"
          width={150}
          height={150}
          alt="t2c-circular-logo"
          className="rounded-full m-5"
        />

        <h1 className="text-3xl glow mt-4 mb-6">{tagline}</h1>

        <div className="space-y-5">
          {aboutT2CText.map((text, index) => (
            <p key={index} className="text-xl text-center leading-normal">
              {text}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutT2C;
