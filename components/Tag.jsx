import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Tag = ({ children, href, className }) => {
  return (
    <Link
      className={twMerge(
        "h-[34px] px-[14px] text-dark-gray hover:text-white transition-all duration-500 bg-sky rounded-2xl hover:bg-blue flex items-center justify-center ",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
export default Tag;
