"use client";

import ProgressBar from "@ramonak/react-progress-bar";

import { LuRocket } from "react-icons/lu";

import FAQContainer from "./FAQContainer";

const FAQ = () => {
  return (
    <div className="py-24 md:py-section bg-faq-bg bg-no-repeat bg-cover relative isolate">
      <div className="absolute inset-0 z-0 bg-sky/50 isolate">
        <div
          style={{
            backgroundSize: "55px",
            backgroundPositionY: "60%",
          }}
          className="max-w-[1340px] absolute inset-0 z-0  mx-auto md:bg-faq-text bg-left-top bg-no-repeat bg-contain"
        ></div>
      </div>
      <div className="max-w-container relative z-10 mx-auto px-container">
        <header>
          <div
            data-aos="fade-up"
            className="text-rose uppercase mb-5 font-bold  flex  gap-5"
          >
            <div>{"//"}</div> Veelgestelde vragen
          </div>

          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl mb-7 font-bold font-space_grotesk sm:leading-snug"
          >
            Veelgestelde Vragen over Seweb
          </h2>
        </header>
        <div className="grid lg:grid-cols-1 gap-20">
          <div>
            <FAQContainer />
          </div>

        </div>
      </div>
    </div>
  );
};
export default FAQ;
