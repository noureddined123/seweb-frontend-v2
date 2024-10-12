import { IoLocationOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
import { twMerge } from "tailwind-merge";

const TopBar = ({ className }) => {
  return (
    <div
      className={twMerge(
        "hidden  px-container lg:px-12 md:flex items-center justify-between 2xl:px-32 h-10 bg-black text-white transition-all duration-500",
        className
      )}
    >
      <div className="flex items-center gap-4 lg:gap-20">
        <div className="flex items-center gap-4">
          <IoLocationOutline className="text-xl" />
          <span className="hidden lg:block">
            465 NT Road. North West, England
          </span>
        </div>
      </div>
      <div className="flex items-center gap-9">
        <span className="hidden lg:block">Follow us:</span>
        <SocialLinks />
      </div>
    </div>
  );
};
export default TopBar;
