import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { services } from "@/utils/data";

const Service = () => {
  return (
    <div className="bg-sky bg-no-repeat bg-center bg-cover">
      <div>
        <div className="text-black  py-24 md:py-section">
          <section className="px-container max-w-container mx-auto">
            <header className="flex text-center sm:text-start flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 md:mb-14">
              <div>
                <div
                  data-aos="fade-up"
                  className="flex text-rose mb-5 items-center gap-2"
                >
                  <div>{"//"}</div>
                  <div className="text-sm font-bold  uppercase">
                    Seweb Diensten
                  </div>
                </div>
                <h2
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl  font-bold font-space_grotesk sm:leading-tight"
                >
                  Profiteer Van Onze Uitstekende Diensten
                </h2>
              </div>
            </header>
            <div className="md:mb-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {services.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  className="rounded-2xl group hover:bg-rose hover:text-white duration-500 transition-all bg-white flex flex-col gap-8 overflow-hidden  text-black relative shadow-card-2 p-[38px]"
                  key={service.id}
                >
                  <div className="inset-0 absolute bg-service-card bg-center bg-cover bg-no-repeat opacity-0 group-hover:opacity-100 duration-500 transition-all z-0"></div>
                  <div className="flex items-center relative z-10 gap-2 justify-between">
                    <service.Icon className="text-rose text-5xl group-hover:text-white duration-500 transition-all" />
                    <FaArrowRight className="text-black text-2xl group-hover:text-white duration-500 transition-all" />
                  </div>
                  <div className="relative z-10">
                    <h5 className="text-xl font-space_grotesk font-bold mb-8">
                      {service.label}
                    </h5>
                    <div className="uppercase group-hover:text-white duration-500 transition-all text-sm text-dim-gray font-bold">
                      Lees Verder
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Service;
