import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import ServiceFAQ from "./ServiceFAQ";

const ServiceFeed = ({service}) => {
  return (
    <article>
      <h2 className="text-4xl md:text-5xl mb-7  md:leading-snug font-bold max-w-[560px] font-space_grotesk">
        {service.title}
      </h2>
      <p className="text-base leading-loose text-dark-gray mb-9 max-w-[738px]">
        We embrace holistic development and support for employees with the aim
        of being a first-choice employer within our sectors. Through a unique
        combination of engineering, construction and design disciplines and
        expertise.
      </p>
      <Image
        height={368}
        width={740}
        className="w-full h-auto rounded-2xl"
        alt=""
        src={service.image}
      />
      
      <div className="text-dark-gray mt-9">
        <div>
          <ServiceFAQ />
        </div>
      </div>
    </article>
  );
};
export default ServiceFeed;
