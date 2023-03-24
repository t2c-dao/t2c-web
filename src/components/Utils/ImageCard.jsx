import Image from 'next/image'
import React from 'react'

const ImageCard = ({image='/logo.png', heading='Default heading', description}) => {
  return (
    <div className="border border-black hover:border-gray-500 my-4 mx-6 flex flex-col justify-around items-center w-[300px] h-[180px] transition-all duration-300 rounded-lg cursor-pointer shadow-md hover:shadow-white">
      <Image
        src={image}
        width={80}
        height={80}
        alt="image-card"
        className="rounded-full"
      />

      <h2 className="text-center text-lg">{heading}</h2>

      {description && <h4 className="text-center">{description}</h4>}
    </div>
  );
}

export default ImageCard