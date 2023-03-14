import { Image } from "antd";

const GlassMorphicButton = ({
  leftText,
  rightText,
  rightColor,
  logo,
  leftColor,
}) => {
  return (
    <button className="flex bg-[#1F232C] px-2 py-1 rounded-xl cursor-pointer border border-gray-500 justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-30">
      <span className={`mx-2 text-lg text-[${leftColor}]`}>{leftText}</span>
      <Image
        src={logo}
        alt={rightText}
        preview={false}
        width="20px"
        height="20px"
        className="rounded-full"
      />
      <span className={`mx-2 text-lg text-[${rightColor}]`}>{rightText}</span>
    </button>
  );
};

export default GlassMorphicButton;
