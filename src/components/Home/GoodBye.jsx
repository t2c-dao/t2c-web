import React from "react";
import { motion } from "framer-motion";

const GoodBye = () => {
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
      className="h-[80vh] p-5 flex flex-col justify-center items-center max-w-7xl mx-auto"
    >
      <h2 className="text-5xl w-[60%] text-center leading-none p-6 font-semibold">
        Say goodbye to custom servers
      </h2>

      <p className="w-[80%] text-center text-lg">
        Before The Graph, teams had to develop and operate proprietary indexing
        servers. This required significant engineering and hardware resources
        and broke the important security properties required for
        decentralization.
      </p>
    </motion.div>
  );
};

export default GoodBye;
