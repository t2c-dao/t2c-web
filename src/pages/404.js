import React from "react";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {

  return (
      <div className="flex flex-col h-[100vh] items-center justify-center bg-white">
        <Image src="/404.gif" height={900} width={600} alt="404" />
        <p className="text-2xl font-bold">Looks like you are lost</p>
        <Link href='/' className="m-4 py-2 px-4 bg-[#111217] border text-white hover:bg-white hover:text-[#111217] hover:border-[#111217] hover:rounded-lg transition-all duration-500">Back to home</Link>
      </div>
  );
};

export default Custom404;