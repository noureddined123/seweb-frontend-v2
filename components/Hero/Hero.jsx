"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { herosDataHome4 } from "@/utils/data";
import { useCallback } from "react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import HeroCard from "./HeroCard";
import useEmblaDotButton from "@/hooks/useEmblaDotButton";
import { twMerge } from "tailwind-merge";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      slidesToScroll: 1,
      loop: true,
      containScroll: false,
    },
    [Fade(), Autoplay({ playOnInit: false, delay: 4000 })]
  );

  // This custom hook use for showing carousel dots
  const { selectedIndex, onDotButtonClick } = useEmblaDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative isolate">
      {herosDataHome4.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute right-20 hidden md:flex items-center justify-center rounded-full bg-white text-rose hover:bg-light-dark hover:text-white duration-500 transition-all size-12 text-lg shadow-card-2 z-10  sm:bottom-[38%]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-20  hidden md:flex items-center justify-center rounded-full bg-white text-rose hover:bg-light-dark hover:text-white duration-500 transition-all size-12 text-lg shadow-card-2 z-10  sm:bottom-[30%]"
          >
            <FaArrowRight />
          </button>
        </>
      )}
      <div className="absolute bottom-14 w-full z-20">
        <div className="max-w-container mx-auto px-container  flex gap-2   justify-center md:justify-start">

          {herosDataHome4.length > 1 && herosDataHome4.map((item, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={twMerge(
                "md:size-[14px] size-4 rounded-full  hover:bg-rose duration-500 transition-all",
                index === selectedIndex ? "bg-rose" : "bg-white"
              )}
            ></button>
          ))}
        </div>
      </div>
      <div>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex ">
            {herosDataHome4.map((hero, index) => (
              <div className="grow-0 shrink-0 basis-full " key={index}>
                <HeroCard hero={hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
