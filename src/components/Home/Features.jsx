import React from "react";
import { motion } from "framer-motion";

import { featuresData } from "@/config";
import ImageCard from "../Utils/ImageCard";

const Features = () => {
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
    max-w-7xl px-10 justify-between mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center w-full font-bold">
        Features
      </h3>

      <div className="flex flex-wrap justify-center items-center mt-6">
        {featuresData.map((data) => (
          <ImageCard id={data.id} {...data} />
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
