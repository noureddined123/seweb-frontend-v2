import Image from "next/image";

import { LuRocket } from "react-icons/lu";

const Benefits = () => {
  return (
    <div className="py-24 pb-24 md:pb-section">
      <div className="max-w-container px-container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10  lg:gap-8 items-end">
          <div>
            <div
              data-aos="fade-up"
              className="text-rose uppercase mb-5 font-bold  flex  gap-5"
            >
              <div>{"//"}</div> Waarom seweb
            </div>
            <h2
              data-aos="fade-up"
              className="text-4xl sm:text-5xl mb-4 font-bold font-space_grotesk sm:leading-snug"
            >
              Wij Werken Met een Duidelijk Plan!
            </h2>
            <p className="text-dim-gray leading-loose max-w-[580px] mb-9">
              Na ontvangst van uw bestelling brengen we uw wensen in kaart en starten we direct met het project.
            </p>
            <div className="flex mb-8 flex-col sm:flex-row gap-5">
              <article className="h-24 w-full shadow-card-2 flex sm:w-fit  group  items-center p-5  gap-5 rounded-2xl hover:bg-rose duration-500 transition-all">
                <LuRocket className="text-5xl text-rose group-hover:text-white duration-500 transition-all " />
                <h5 className="text-xl group-hover:text-white duration-500 transition-all font-bold text-dark max-w-[150px]">
                  Project Management
                </h5>
              </article>
              <article className="h-24 w-full shadow-card-2 flex sm:w-fit  group  items-center p-5  gap-5 rounded-2xl hover:bg-rose duration-500 transition-all">
                <LuRocket className="text-5xl text-rose group-hover:text-white duration-500 transition-all " />
                <h5 className="text-xl group-hover:text-white duration-500 transition-all font-bold text-dark max-w-[150px]">
                  Oplevering & Monitoring
                </h5>
              </article>
            </div>
            <p className="text-dim-gray leading-loose max-w-[580px] mb-5">
              Regelmatig geven we u een stand van zake. Onze projectmanager is daarbij uw aanspreekpunt voor alle vragen.
              Er bestaan geen domme vragen, dus maak gebruik van zijn kennis, hij is er voor u!
            </p>
            <p className="text-dim-gray leading-loose max-w-[580px] mb-1">
              Bij oplevering nemen wij de website uitgebreid met u door. Na de oplevering kunt u gewoon op ons blijven rekenen. 
              U kunt een onderhoudscontract bij ons afsluiten zodat we uw website blijvend monitoren. Voor dat net beetje meer veiligheid!
            </p>

            <h4
              data-aos="fade-up"
              className="text-lg font-bold font-space_grotesk text-rose mb-11"
            >

            </h4>

          </div>
          <div>
            <div className="relative isolate">
              <Image
                width={720}
                height={660}
                about="about"
                className="w-full"
                src="/why-seweb/picture-1.jpg"
                alt="about"
              />
              <div className="max-w-52 sm:max-w-[396px] w-full isolate  rounded-2xl shadow-card-2 absolute top-0 right-0 bg-white lg:-translate-y-[40%] py-1 px-1 sm:px-1">
                <Image
                  width={305}
                  height={204}
                  alt=""
                  src={"/why-seweb/seweb-4.jpg"}
                  className="w-full h-40 sm:h-[205px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
