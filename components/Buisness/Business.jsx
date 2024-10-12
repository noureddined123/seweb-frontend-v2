import Image from "next/image";
import BusinessHeader from "./BusinessHeader";
import { TbSettingsShare } from "react-icons/tb";
import { LuRocket } from "react-icons/lu";

const Business = () => {
  return (
    <div>
      <BusinessHeader />
      <div className=" pt-24 md:pt-section pb-24 lg:pb-0 bg-business bg-no-repeat  bg-contain bg-top">
        <div className="px-container max-w-container mx-auto grid lg:grid-cols-2  gap-20 lg:gap-10 h-fit">
          <Image
            width={609}
            height={660}
            alt="man seating on chair"
            src="/home1/business/business.png"
            className="w-full h-[660px] rounded-e-2xl object-contain  lg:-translate-y-[200px] xl:-translate-x-section"
          />

          <div className="h-fit">
            <h2
              className="text-4xl sm:text-5xl mb-6 font-bold font-space_grotesk sm:leading-tight"
              data-aos="fade-up"
            >
              We Execute Our ideas From The Start to Finish
            </h2>
            <p className="text-gray max-w-[580px] mb-7">
              Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem is simply free text quis bibendum. There are
              many variations of passages of available
            </p>
            <h5
              data-aos="fade-up"
              className="text-2xl mb-5 font-bold font-space_grotesk text-blue"
            >
              Our Support Facility
            </h5>
            <p className="text-gray max-w-[580px] mb-6">
              Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem is simply free text quis bibendum.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <article className="h-24 flex group w-full min-w-[272px] items-center p-5 shadow-card-2 gap-5 rounded-2xl hover:bg-blue duration-500 transition-all">
                <TbSettingsShare className="text-5xl text-blue group-hover:text-white duration-500 transition-all" />
                <h5 className="text-xl group-hover:text-white duration-500 transition-all font-bold text-dark max-w-[150px]">
                  Best Business Solution
                </h5>
              </article>
              <article className="h-24 flex w-full  group  items-center p-5 shadow-card-2 gap-5 rounded-2xl hover:bg-blue duration-500 transition-all">
                <LuRocket className="text-5xl text-blue group-hover:text-white duration-500 transition-all" />
                <h5 className="text-xl group-hover:text-white duration-500 transition-all font-bold text-dark max-w-[150px]">
                  Marketing Management
                </h5>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Business;
