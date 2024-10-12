"use client";
import { testimonialsData } from "@/utils/data";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  // This hook part of embla-carousel-react
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section className="pt-24 md:pt-section bg-testimonials-4 bg-no-repeat bg-center relative bg-cover isolate">
      <div className="absolute inset-0 bg-glob bg-no-repeat bg-right-top  z-10"></div>
      <div className="max-w-container relative mx-auto z-20">
        <header className="text-center px-container text-black flex items-center justify-center flex-col ">
          <div
            data-aos="fade-up"
            className="flex text-rose mb-5 items-center gap-2"
          >
            <div className="">{"//"}</div>
            <div className="text-sm font-bold  uppercase">Klant Reviews</div>
          </div>
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl max-w-2xl mb-9 font-bold font-space_grotesk sm:leading-snug"
          >
            Wat vinden onze klanten?
          </h2>
        </header>

        <div
          className="overflow-hidden pt-12 rounded-2xl px-container pb-24 md:pb-section"
          ref={emblaRef}
        >
          <div className="flex gap-4 py-2">
            {testimonialsData.map((data) => (
              <div
                key={data.id}
                className="embla__slide_member group grow-0 shrink-0 basis-full lg:basis-1/2"
              >
                <article className="relative isolate   bg-white">
                  <div className="absolute inset-0 bg-test4-card-2 bg-contain bg-no-repeat bg-left-top group-hover:opacity-0 duration-500 transition-all"></div>
                  <div className="absolute inset-0 bg-test4-card-1 bg-contain bg-no-repeat bg-left-top opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
                  <div className="pl-6   pb-9 pr-[34px] pt-[38px] shadow-card-2  rounded-2xl flex flex-col sm:flex-row gap-4 relative">
                    <div className="border-[6px] h-fit border-white rounded-full shrink-0">
                      <Image
                        width={120}
                        height={120}
                        src={data.image}
                        alt={data.name}
                        className="size-[100px] sm:size-[118px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-7">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h4 className="text-2xl mb-3 font-bold text-dark">
                            {data.name}
                          </h4>
                          <h5>
                            <a href={data.url}>
                              {data.role}
                            </a>
                          </h5>
                          <div className="flex items-center gap-1  text-rose ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                        <FaQuoteRight className="text-rose text-3xl group-hover:text-rose duration-500 transition-all" />
                      </div>
                      <div>
                        <p className="text-gray leading-loose line-clamp-3">
                          {data.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
