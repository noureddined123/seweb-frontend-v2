"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { LuRocket } from "react-icons/lu";
import { TbSettingsShare } from "react-icons/tb";

let skillPro = [
  {
    id: 1,
    title: "Web  Development",
    count: 75,
  },
  {
    id: 2,
    title: "Web  Design",
    count: 85,
  },
];

const About = () => {
  return (
    <div className="py-24 md:py-section ">
      <section className="max-w-[1400px] mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-14 2xl:gap-16">
          <div className="lg:ml-10">


            <h2
              data-aos="fade-up"
              className="text-4xl sm:text-5xl mb-7 font-bold font-space_grotesk sm:leading-snug"
            >
              Verbeter Uw Digitale Bereikbaarheid
            </h2>
            <div className="max-w-[500px] text-dim-gray mb-8">
              Seweb is gespecialiseerd in het ontwerpen, verbeteren en onderhouden van websites.
              <p className="mt-2">
              We starten elk project met een duidelijk doel en vertalen dit samen met u naar uw wensen.
              </p>
              <p className="mt-2">
              Aan de hand van uw wensen ontwerpen we de website en verfijnen en testen we het ontwerp met u totdat het gebruiksklaar is.
              </p>
            </div>
            <div className="flex mb-5 flex-col sm:flex-row items-center gap-5">
              <article className="h-24 flex group w-full min-w-[272px] items-center p-5  gap-5 rounded-2xl hover:bg-rose duration-500 transition-all">
                <TbSettingsShare className="text-5xl text-rose group-hover:text-white duration-500 transition-all" />
                <h5 className="text-xl group-hover:text-white duration-500 transition-all font-bold text-dark max-w-[150px]">
                  SEO & SEA Optimalisatie
                </h5>
              </article>
              <article className="h-24 flex w-full  group  items-center p-5  gap-5 rounded-2xl hover:bg-rose duration-500 transition-all">
                <LuRocket className="text-5xl text-rose group-hover:text-white duration-500 transition-all" />
                <h5 className="text-xl group-hover:text-white duration-500 transition-all font-bold text-dark max-w-[150px]">
                  Web Development
                </h5>
              </article>

            </div>
            <h4
              data-aos="fade-up"
              className="text-lg font-bold font-space_grotesk text-rose mb-5">
              Dankzij de veranderende markt kunnen we uw website continu 
              verbeteren en nieuwe kansen ontdekken om klanten beter te bedienen.

            </h4>

            <div className="flex sm:items-center gap-14 flex-col-reverse sm:flex-row">
              <Button className="bg-rose text-white hover:border-rose hover:bg-transparent hover:text-rose w-full sm:w-fit">
                Bekijk alle Diensten
              </Button>

            </div>
          </div>
          <div>
            <Image
              width={607}
              height={557}
              className="w-full h-auto "
              src="/about/about-1.jpg"
              alt="About"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
