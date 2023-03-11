import { Button, Image, Input } from "antd";
import {motion} from "framer-motion"
import GlassMorphicButton from "../utils/GlassMorphicButon";

import { footerOptions, projectName, teamName, supportedBy } from "../config";

type Props = {};

const Footer = (props: Props) => {
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
      className="w-full flex justify-center items-center flex-col bg-[#24272E]"
    >
      <div className="w-[80%] py-12 flex flex-row flex-wrap justify-between items-center border-b border-gray-400">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">
            Stay up to date about future releases
          </h1>
          <h2 className="text-[#8B8B8B] font-normal mt-2">
            Directly to your Inbox
          </h2>
        </div>

        <div className="flex my-4 border rounded-lg">
          <Input.Group className="flex flex-row">
            <Input
              placeholder="Enter your email address"
              required
              className="bg-transparent text-white placeholder:text-gray-500 outline-none focus:outline-none"
            />
            <Button className="bg-[#1573FE] border-none text-white hover:text-white">
              Submit
            </Button>
          </Input.Group>
        </div>
      </div>

      <div className="w-[80%] py-12 flex flex-row flex-wrap justify-between items-center">
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
            src="/logoc.png"
            alt={projectName}
            preview={false}
            width="50px"
            height="50px"
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

      <div className="w-[80%] py-4 flex flex-row flex-wrap justify-between items-center">
        <h2 className="text-base text-[#8B8B8B] font-bold mt-2">
          @ {teamName}
        </h2>
        <div className="mt-2">
          <GlassMorphicButton
            leftText="Supported By"
            leftColor="#8B8B8B"
            rightText={supportedBy}
            rightColor="white"
            logo="/logoc.png"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
