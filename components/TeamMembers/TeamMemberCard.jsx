import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const TeamMemberCard = ({ member }) => {
  return (
    <article className="group">
      <div className="relative isolate text-white">
        <Image
          src={member.image}
          className="rounded-2xl object-cover w-full h-[370px]"
          width={270}
          height={370}
          alt={member.name}
        />
        <div className="absolute inset-0 rounded-2xl pb-[60px] px-5 justify-end opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 transition-all  bg-gradient-to-t from-blue to-transparent  flex items-end">
          <div className="flex text-lg items-center gap-4">
            <Link
              className="text-ash hover:text-white duration-500 transition-all"
              target="_blank"
              href={member.socialLinks.facebook}
            >
              <FaFacebook />
            </Link>
            <Link
              className="text-ash hover:text-white duration-500 transition-all"
              target="_blank"
              href={member.socialLinks.instagram}
            >
              <FaInstagram />
            </Link>
            <Link
              className="text-ash hover:text-white duration-500 transition-all"
              target="_blank"
              href={member.socialLinks.twitter}
            >
              <FaTwitter />
            </Link>
            <Link
              className="text-ash hover:text-white duration-500 transition-all"
              target="_blank"
              href={member.socialLinks.pinterest}
            >
              <FaPinterest />
            </Link>
          </div>
        </div>
        <div className="absolute h-[90px] bottom-0 bg-white left-5 right-0 rounded-s-2xl shadow-card-2 translate-y-1/2 flex items-center justify-between gap-4 text-black px-5">
          <div>
            <h5 className="text-lg font-semibold font-space_grotesk">
              {member.name}
            </h5>
            <p className="text-dark-gray text-sm">{member.position}</p>
          </div>
          <div className="size-10 text-white rounded-full grid place-items-center bg-dark text-lg  group-hover:bg-blue duration-500 transition-all">
            <IoShareSocial />
          </div>
        </div>
      </div>
    </article>
  );
};
export default TeamMemberCard;
