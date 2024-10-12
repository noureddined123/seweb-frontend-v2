import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import FAQ from "./FAQ";

const Meetup = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-20">
        <div className="lg:flex-[3]">
          <div className="relative isolate">
            <Image
              width={968}
              height={660}
              alt="meetup"
              className="w-full h-[660px] object-cover"
              src="/home1/meetup/meetup.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue to-transparent p-10 flex items-end justify-end text-white">
              <div className="flex items-center gap-10">
                <HiOutlineLightBulb className="text-8xl" />
                <h3 className="text-4xl max-w-[450px] font-bold font-space_grotesk">
                  We gain trust by working efficiently
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-[2] pt-24 xl:pt-section">
          <div className="max-w-[500px] mx-auto px-container lg:mx-0">
            <div data-aos="fade-up" className="flex mb-7 items-center gap-2">
              <div className="w-5 h-[2px] bg-black"></div>
              <div className="text-sm font-bold text-blue uppercase">
                FREQUENTLY ASKED QUESTION
              </div>
            </div>
            <h2
              data-aos="fade-up"
              className="text-4xl lg:text-5xl mb-9 font-bold font-space_grotesk   lg:leading-snug leading-snug"
            >
              What Our Clients Ask About Meetup
            </h2>
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Meetup;
