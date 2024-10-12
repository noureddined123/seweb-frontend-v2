import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
export const categories = [
  {
    id: 1,
    label: "Cloud Service",
    href: "/categories/cloud-service",
  },
  {
    id: 2,
    label: "Web Development",
    href: "/categories/web-development",
  },
  {
    id: 3,
    label: "UI/UX Designing",
    href: "/categories/ui-ux-designing",
  },
  {
    id: 4,
    label: "IT Management",
    href: "/categories/it-management",
  },
  {
    id: 5,
    label: "Data Visualization",
    href: "/categories/data-visualization",
  },
  {
    id: 6,
    label: "Security System",
    href: "/categories/security-system",
  },
];

const ServiceSidebar = () => {
  return (
    <aside className="flex flex-col gap-7">
      <div className="bg-sky p-9">
        <h5 className="mb-5 font-space_grotesk text-[22px] font-bold">
          Catagories
        </h5>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              className="p-5 h-[52px] hover:bg-purple hover:text-white text-black transition-all font-semibold duration-500 bg-white  flex items-center justify-between rounded"
              key={category.id}
              target="_blank"
              href={category.href}
            >
              <span>{category.label}</span>
              <FaArrowRightLong />
            </Link>
          ))}
        </div>
      </div>

      <div className="h-[400px] rounded-2xl relative  flex flex-col justify-center items-center px-10 bg-service-details-card bg-no-repeat bg-center bg-cover text-white overflow-hidden isolate">
        <div className="inset-0 absolute bg-service-details-effect bg-no-repeat bg-center bg-cover"></div>
        <div className="relative z-10">
          <h5 className="text-[30px] leading-normal font-semibold mb-12 max-w-56 text-center">
            Need Any Types of Service from us
          </h5>
          <button className="h-[60px] rounded-2xl text-sm uppercase font-bold px-12 flex items-center justify-center bg-white text-black hover:bg-purple hover:text-white duration-500 transition-all">
            FIND SOLUTION
          </button>
        </div>
        <div className="absolute inset-0 bg-blue/80"></div>
      </div>

      <Link
        href="tel:+1234567890"
        className="px-9 rounded-2xl flex gap-6 h-[120px] items-center bg-sky"
      >
        <div className="shrink-0">
          <IoCallOutline className="text-blue text-4xl" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-dark-gray">You can call anytime </span>
          <span className="text-lg font-bold">Free +99 (786) 8765</span>
        </div>
      </Link>
    </aside>
  );
};
export default ServiceSidebar;
