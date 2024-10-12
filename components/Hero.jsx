import Image from "next/image";
import Button from "./Button";
import Header from "./header/Header";

import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import VideoButton from "./VideoButtonWrapper";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className=" bg-hero1 pt-20  bg-center bg-no-repeat bg-cover">
      <div className="bg-hero1-effect bg-left-bottom bg-contain bg-no-repeat relative text-white">
        <div className="relative flex flex-col min-h-screen z-10">
          <div>
            <Header />
          </div>
          <div className="flex-1 px-container w-full max-w-container mx-auto flex items-start py-40 gap-28 xl:gap-40 flex-col lg:flex-row">
            <div>
              <h1 className="text-center sm:text-start text-6xl leading-snug lg:leading-snug lg:text-8xl mb-14 font-space_grotesk max-w-[600px] font-bold">
                Unleash Your Digital IT Solution
              </h1>
              <div className="flex flex-col md:flex-row  gap-7 ">
                <Button>discover more</Button>
                <div className="flex items-center gap-3">
                  <BsCalendar2CheckFill className="text-lg" />
                  <span className="font-bold text-nowrap">24 / 07 / 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-lg" />
                  <span className="font-bold text-nowrap">
                    San Fransisco, Model town
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-7">
              <Image
                width={186}
                height={106}
                alt="arrow"
                src={"/home1/hero/arrow.png"}
                className="w-40 xl:w-[186px] h-auto"
              />
              <VideoButton url={"https://www.youtube.com/watch?v=8oON21G1Bqg"}>
                <button className="shrink-0 size-[80px] lg:size-[100px] xl:size-[140px] grid place-content-center rounded-full border translate-y-10 lg:translate-y-40 border-[#412fa4] hover:bg-blue transition-all duration-500">
                  <CiPlay1 className="text-3xl" />
                </button>
              </VideoButton>
            </div>
          </div>
        </div>
        <div className="absolute bg-opacity-30 z-0 bg-[#191483] inset-0"></div>
      </div>
    </div>
  );
};
export default Hero;
