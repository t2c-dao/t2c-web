import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import { socialIcons, mailURL } from "../config";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 p-2 z-20 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto xl:items-center flex justify-between items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center"
        >
          {socialIcons.map((icon) => {
            return (
              <SocialIcon
                url={icon.url}
                fgColor="#8892b0"
                bgColor="transparent"
                key={icon.text}
                target="_blank"
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            fgColor="#8892b0"
            bgColor="transparent"
            network="email"
            url={mailURL}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
