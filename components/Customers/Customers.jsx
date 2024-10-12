import Image from "next/image";
import {
  FaTv,
  FaNetworkWired,
  FaLaptopCode,
  FaCloud,
} from "react-icons/fa";

const technologies = [
  { id: 1, name: "Drogistcare",  url: "https://www.drogistcare.nl", Icon: FaTv, image: "/customer-logo/drogistcare.png" },
  { id: 2, name: "PT Zwanenburg",  url: "https://www.personaltrainingzwanenburg.nl", Icon: FaNetworkWired, image: "/customer-logo/ptzwanenburg.png" },
  { id: 3, name: "Verkeersschool Kharmich",  url: "https://www.verkeersschoolkharmich.nl", Icon: FaLaptopCode, image: "/customer-logo/kharmichv.png" },
  { id: 4, name: "Dvagi",  url: "https://www.dvagi.nl", Icon: FaCloud, image: "/customer-logo/dvagi.png" },
];

const Customers = () => {
  return (
    <section className="relative isolate bg-black text-white">
      <div className="absolute inset-0 bg-dark/80 bg-technology-effect bg-contain bg-center bg-no-repeat 2xl:bg-cover"></div>
      <div className="py-24 relative z-10 md:py-section text-white max-w-container px-container mx-auto">
        <header className="flex items-center text-center justify-center flex-col mb-16">
          <div
            data-aos="fade-up"
            className="text-[#bababa] mb-5 font-bold  flex  gap-5"
          >
             <div>Onze klanten</div>
          </div>

          <h2
            data-aos="fade-up"
            className="text-4xl leading-snug sm:text-5xl mb-7 font-bold font-space_grotesk sm:leading-snug max-w-3xl"
          >
            Klanten die u voor zijn gegaan!
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {technologies.map((tech) => (
            <a key={tech.id} href={tech.url}>

            <article
              className="border group border-[#4a4c68] bg-white text-black rounded-2xl hover:bg-rose hover:border-rose duration-500 transition-all px-5 py-10 flex items-center justify-center flex-col relative isolate"
            >
              <div className="absolute inset-0 bg-technology-card bg-no-repeat bg-right-top opacity-0 group-hover:opacity-100 duration-500 transition-all z-0"></div>
              <div className=" h-fit border-white rounded-full shrink-0">
                <Image
                  width={120}
                  height={120}
                  src={tech.image}
                  alt={tech.name}
                  className="size-[100px] sm:size-[118px] rounded-full object-cover"
                />

              </div>
              <h6 className="capitalize font-semibold font-space_grotesk">
                {tech.name}
              </h6>
            </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Customers;
