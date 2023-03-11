import React from "react";
import { motion } from "framer-motion";

import { templateText } from "@/config";

const Template = () => {
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
        Template Heading
      </h3>

      <div className="space-y-5 px-0 md:px-10">
        {templateText.map((text, index) => (
          <p key={index} className="text-lg text-center leading-normal">
            {text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Template;
