import React from "react";
import Image from "next/image";

const GradientButton = ({
  logo = "/logo.png",
  leftText = "leftText",
  rightText = "rightText",
}) => {
  return (
    <div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="flex item-center space-x-5 pr-4">
            <Image
              src={logo}
              width={25}
              height={25}
              alt="logo"
              className="rounded-full"
            />
          </span>
          <span className="pr-6 text-gray-100">{leftText}</span>
          <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
            {rightText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
