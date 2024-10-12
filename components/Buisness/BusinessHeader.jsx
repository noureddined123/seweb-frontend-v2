import { FaPlay } from "react-icons/fa";
import VideoButtonWrapper from "../VideoButtonWrapper";
import Image from "next/image";

const BusinessHeader = () => {
  return (
    <section className="min-h-[600px] bg-sky bg-business-left bg-left-bottom bg-contain bg-no-repeat py-24 md:py-section relative isolate">
      <div className="mx-auto  max-w-container px-container">
        <div className="mb-12 text-white">
          <VideoButtonWrapper
            url={"https://www.youtube.com/watch?v=8oON21G1Bqg"}
          >
            <button className="group flex items-center gap-5">
              <span className="grid size-20 place-content-center text-white rounded-full bg-blue group-hover:bg-purple transition-all duration-500">
                <FaPlay className="text-lg ml-2" />
              </span>
              <span className="text-dark-purple font-medium">
                Watch video presentation
              </span>
            </button>
          </VideoButtonWrapper>
        </div>
        <div className="flex md:items-center flex-col lg:flex-row gap-16 xl:gap-20">
          <h1 className="text-6xl md:text-[80px] md:leading-[80px]  max-w-[12ch] font-bold font-space_grotesk ">
            We Help You For Grow Buisness
          </h1>
          <div className="flex md:items-center flex-col md:flex-row  gap-6">
            <div className="relative isolate flex items-center justify-center">
              <div className="w-36 h-36 relative bg-white rounded-full bg-gray-300">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-blue"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeDasharray="100, 100"
                    strokeDashoffset="25"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-dark font-space_grotesk font-bold text-4xl ">
                  80%
                </span>
              </div>
            </div>

            <div className="flex gap-2 flex-col text-center md:text-start">
              <h6 className="text-xl font-bold font-space_grotesk">
                Success Rate
              </h6>
              <p className="text-ash">We help your for your dream</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="hidden lg:block absolute top-0 right-0"
        width={427}
        height={320}
        alt="bg image"
        src={"/home1/business/business-bg-right.png"}
      />
    </section>
  );
};
export default BusinessHeader;
