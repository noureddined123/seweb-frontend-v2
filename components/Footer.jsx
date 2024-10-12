import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { blogsData, services } from "@/utils/data";

const Footer = () => {
  return (
    <footer>
      <div className="pb-24 md:pb-section  pt-28 md:pt-[130px] bg-black text-white">
        <div className="max-w-container mx-auto px-container grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          <div>
            <Link href="/">
              <Image
                src="/logo-2.png"
                width={172}
                height={46}
                alt="logo"
                className="w-24 mb-6 sm:w-28 md:w-[172px] h-auto"
              />
            </Link>
            <p className="text-sm max-w-[252px] text-ash mb-7">
              Vraag vrijblijvend een offerte aan bij seweb, wij helpen u graag verder!
            </p>
            <div className="flex items-center gap-4">
              <Link
                className="text-white hover:text-blue duration-500 transition-all"
                href={"https://www.facebook.com"}
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                className="text-white hover:text-blue duration-500 transition-all"
                href={"https://www.instagram.com"}
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                className="text-white hover:text-blue duration-500 transition-all"
                href={"https://www.twitter.com"}
                target="_blank"
              >
                <FaTwitter />
              </Link>
              <Link
                className="text-white hover:text-blue duration-500 transition-all"
                href={"https://www.pinterest.com"}
                target="_blank"
              >
                <FaPinterest />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold font-space_grotesk mb-10">
              Handige Links
            </h5>
            <ul className="flex flex-col gap-6">
              <li>
                <FooterLink href="/contact">Contact </FooterLink>{" "}
              </li>
              <li>
                <FooterLink href="/services">Diensten</FooterLink>{" "}
              </li>
              <li>
                <FooterLink href="/blogs">Blogs</FooterLink>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold font-space_grotesk mb-10">
              Diensten
            </h5>
            <ul className="flex flex-col gap-6">
              {services.map((service) => (
                <li key={service.id}>
                  <FooterLink href={`/${service.slug}`}>{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold font-space_grotesk mb-10">
              Recente Blogs
            </h5>
            <div className="flex  flex-col gap-6">
              {blogsData.slice(0, 2).map((blog) => (
                <Link key={blog.id} className="flex items-center gap-5" href={`/blogs/${blog.slug}`}>
                  <Image
                    width={70}
                    height={70}
                    className="size-[70px] object-cover rounded-2xl"
                    alt={blog.title}
                    src={blog.image}
                  />
                  <div className="flex text-sm flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <IoMdTime className="text-blue text-lg" />
                      <div className="line-clamp-1">{blog.publishAt}</div>
                    </div>
                    <p className="text-ash max-w-[200px] line-clamp-2">{blog.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-14 md:h-20 text-[#999cbb] bg-rose text-white">
        Copyright © 2024. All Rights Reserved{" "}
      </div>
    </footer>
  );
};
export default Footer;

const FooterLink = ({ href, children }) => {
  return (
    <Link
      className=" text-ash hover:text-white transition-all duration-500 group -translate-x-1 text-sm flex items-center gap-1 "
      href={href}
    >
      <span className=" w-0   transition-all duration-500 group-hover:w-[20px]">
        <FaArrowRightLong className="text-blue opacity-0 transition-all duration-500 group-hover:opacity-100" />
      </span>
      <span className="flex-shrink-0">{children}</span>
    </Link>
  );
};
