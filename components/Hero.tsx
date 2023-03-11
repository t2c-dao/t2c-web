import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";


import GlassMorphicButton from "../utils/GlassMorphicButon";
import { heroDescription, heroMain, teamName } from "../config";

type Props = {};

const Hero = (props: Props) => {
  // TODO add small section toggle icon
  // TODO Icon fix in button

  return (
    <div className="w-[60%] flex flex-col justify-center items-center my-8">
      <h1 className="text-5xl text-center font-bold tracking-wider mt-16 mb-12">
        {heroMain}
      </h1>

      <p className="text-[#8B8B8B] text-center m-4 mb-8 text-base w-[80%]">
        {heroDescription}
      </p>

      <Button
        type="primary"
        className="bg-[#1573FE] flex items-center justify-center"
      >
        Go to app
        <ArrowRightOutlined />
      </Button>

      <div className="mt-8 mb-8">
        <GlassMorphicButton
          leftText="Powered By"
          logo='/logoc.png'
          rightText={teamName}
          rightColor="#E6007A"
        />
      </div>
    </div>
  );
};

export default Hero;
