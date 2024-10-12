import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Solution = () => {
  return (
    <div className="py-24 bg-solution bg-center bg-no-repeat bg-cover md:py-section relative isolate">
      <div
        style={{
          backgroundSize: "650px",
        }}
        className="absolute inset-0 z-10 bg-solution-effect bg-left-top bg-contain bg-no-repeat"
      ></div>
      <div className="absolute inset-0 z-0 bg-dark bg-opacity-90"></div>
      <div className="mx-auto relative z-20 max-w-container px-container grid lg:grid-cols-2 gap-20 text-white">
        <div>
          <Image
            src="/home1/solution/solution.png"
            className="w-full h-[560px] rounded-2xl object-cover"
            width={650}
            height={560}
            alt="solution"
          />
        </div>
        <div>
          <div data-aos="fade-up" className="flex  mb-7 items-center gap-2">
            <div className="w-5 h-[2px] bg-ash"></div>
            <div className="text-sm font-bold text-ash uppercase">
              KNOW ABOUT MEETUP
            </div>
          </div>
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl mb-9 font-bold font-space_grotesk sm:leading-snug max-w-2xl"
          >
            Your Sucess with the Best IT Solution
          </h2>
          <div className="flex flex-col gap-5 mb-8">
            <div className="flex items-center gap-5">
              <div className="size-[60px] rounded-full bg-blue text-white grid place-content-center shrink-0 text-2xl">
                <FaCheck />
              </div>
              <div className="flex flex-col  gap-3">
                <h5 className="text-xl font-bold font-space_grotesk">
                  Deliver Awesome Idea
                </h5>
                <p className="text-ash max-w-[356px]">
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod temp
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="size-[60px] rounded-full bg-blue text-white grid place-content-center shrink-0 text-2xl">
                <FaCheck />
              </div>
              <div className="flex flex-col  gap-3">
                <h5 className="text-xl font-bold font-space_grotesk">
                  Work With Global Brands
                </h5>
                <p className="text-ash max-w-[356px]">
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod temp
                </p>
              </div>
            </div>
          </div>

          <article className="bg-light-dark flex items-center rounded-2xl px-10 py-5 min-h-[144px] flex-col sm:flex-row justify-between">
            <div>
              <p className="text-ash">Projects Offers</p>
              <h5 className="text-2xl font-bold text-white">info.gtec.com</h5>
            </div>
            <div className="w-full my-5 sm:my-0 min-h-[1px] sm:w-[1px] h-full bg-[#313348] sm:min-h-[104px]"></div>
            <div>
              <p className="text-ash">Consultation</p>
              <h5 className="text-2xl font-bold text-blue">+ 123 36 658</h5>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Solution;
