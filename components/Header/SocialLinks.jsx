import SocialIcon from "@/app/home2/_components/Header/SocialIcon";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <Link target="_blank" href="https://www.facebook.com">
        <SocialIcon className="hover:text-rose" Icon={FaFacebookF} />
      </Link>

      <Link target="_blank" href="https://www.instagram.com">
        <SocialIcon className="hover:text-rose" Icon={FaInstagram} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com">
        <SocialIcon className="hover:text-rose" Icon={FaLinkedinIn} />
      </Link>
      <Link target="_blank" href="https://twitter.com">
        <SocialIcon className="hover:text-rose" Icon={FaTwitter} />
      </Link>
    </div>
  );
};
export default SocialLinks;
