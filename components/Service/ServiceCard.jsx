import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { title, Icon, image, id } = service;

  return (
    <article className="overflow-hidden group text-white rounded-2xl">
      <div className="relative isolate ">
        <Image
          width={600}
          height={412}
          alt={title}
          src={image}
          className="w-full h-[412px] object-cover"
        />

        <div className="absolute inset-0 scale-0  duration-700 transition-all group-hover:scale-150 rounded-full origin-center w-full  bg-dark-purple bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end  pt-10 px-10 bg-gradient-to-t from-dark-purple/90 to-transparent pb-2">
          <div className="flex flex-col items-center w-fit h-fit group-hover:-translate-y-1/2 transition-all duration-500 will-change-transform">
            <div className="size-20 rounded-full group-hover:bg-blue transition-all shadow-card grid place-content-center duration-500 bg-white text-black group-hover:text-white shrink-0 mb-6 text-4xl">
              <Icon />
            </div>
            <h5 className="text-xl mb-7 max-w-[140px]  text-center font-bold font-space_grotesk">
              {title}
            </h5>
            <Link
              className="text-sm opacity-0 group-hover:opacity-100 o duration-500 transition-all  uppercase font-bold hover:underline text-[#c3c3c3]"
              href={`/services/${id}`}
            >
              Meer Informatie
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ServiceCard;
