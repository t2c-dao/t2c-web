import { Image } from "antd";
import GlassMorphicButton from "./GlassMorphicButton";
import { SocialIcon } from "react-social-icons";

import { footerOptions, mailURL, projectName, teamName, supportedBy } from "@/config";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#24272E]">
      <div className="w-[80%] py-6 flex flex-row flex-wrap justify-between items-center">
        {/* left */}
        <div className="flex flex-row mr-6">
          {footerOptions.map(({ sectionName, sectionItems }) => {
            return (
              <div className="flex flex-col mr-8" key={sectionName}>
                <h2 className="font-bold my-1">{sectionName}</h2>

                {sectionItems.map((sectionText) => {
                  return (
                    <h3
                      className="text-[#8B8B8B] font-normal cursor-pointer hover:underline"
                      key={sectionText}
                    >
                      {sectionText}
                    </h3>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* right */}
        <div className="flex flex-col">
          <Image
            src="/logo.png"
            alt={projectName}
            preview={false}
            width="50px"
            height="50px"
            className="rounded-full"
          />

          <div className="flex justify-end space-x-4">
            <Image
              src="/twitter.svg"
              alt="twitter"
              preview={false}
              className="my-4 cursor-pointer"
            />
            <Image
              src="discord.svg"
              alt="discord"
              preview={false}
              className="my-4 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] py-2 flex flex-row flex-wrap justify-between items-center">
        <h2 className="text-base text-[#8B8B8B] font-bold mt-2">
          @ {teamName}
          <SocialIcon
            className="cursor-pointer m-0"
            fgColor="#8B8B8B"
            bgColor="transparent"
            network="email"
            url={mailURL}
          />
        </h2>
        <div className="mt-2">
          <GlassMorphicButton
            leftText="Supported By"
            leftColor="#8B8B8B"
            rightText={supportedBy}
            rightColor="white"
            logo="/logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
