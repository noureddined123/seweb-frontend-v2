"use client";

import Button from "@/components/Button";
import FlyoutLink, {
  homeLinks,
  pageLinks,
} from "@/components/Dropdown/FlyoutLink";
import MobileMenu from "@/components/header/MobileMenu";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchOpen = () => setIsSearchOpen(true);
  const searchClose = () => setIsSearchOpen(false);

  return (
    <div className=" h-20  px-container lg:px-12 2xl:px-32  2xl:h-[100px]  bg-white flex items-center justify-between text-black">
      <Link href="/">
        <Image
          src="/home2/logo.png"
          width={172}
          height={46}
          alt="logo"
          className="w-24 sm:w-28 md:w-[172px] h-auto"
        />
      </Link>
      <div className="flex items-center gap-1">
        <ul className=" hidden xl:flex font-medium items-center gap-8 xl:gap-8 2xl:gap-16 text-black">
          <li>
            <FlyoutLink links={homeLinks}>
              <div className="text-ash hover:text-black transition-all duration-500 flex items-center gap-1 cursor-pointer">
                <Link href="#">Home</Link>
                <IoIosArrowDown />
              </div>
            </FlyoutLink>
          </li>

          <li>
            <FlyoutLink links={pageLinks}>
              <div className="text-ash hover:text-black transition-all duration-500 flex items-center gap-1 cursor-pointer">
                <Link href="#">pages</Link>
                <IoIosArrowDown />
              </div>
            </FlyoutLink>
          </li>
          <li>
            <FlyoutLink
              links={[
                { label: "Service", href: "/services" },
                { label: "Service Details", href: "/services/1" },
              ]}
            >
              <div className="text-ash hover:text-black transition-all duration-500 flex items-center gap-1 cursor-pointer">
                <Link href="#">Services</Link>
                <IoIosArrowDown />
              </div>
            </FlyoutLink>
          </li>

          <li>
            <FlyoutLink
              links={[
                { label: "Project", href: "/projects" },
                { label: "Project Details", href: "/projects/1" },
              ]}
            >
              <div className="text-ash hover:text-black transition-all duration-500 flex items-center gap-1 cursor-pointer">
                <Link href="#">Projects</Link>
                <IoIosArrowDown />
              </div>
            </FlyoutLink>
          </li>
          <li>
            <FlyoutLink
              links={[
                { label: "Blog", href: "/blog" },
                { label: "Blog Details", href: "/blog/1" },
              ]}
            >
              <div className="text-ash hover:text-black transition-all duration-500 flex items-center gap-1 cursor-pointer">
                <Link href="#">Blog</Link>
                <IoIosArrowDown />
              </div>
            </FlyoutLink>
          </li>
          <li>
            <Link
              className="text-ash hover:text-black transition-all duration-500 flex items-center gap-1 cursor-pointer capitalize"
              href="/contact"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5 xl:gap-7">
        <button onClick={searchOpen} className="">
          <GoSearch className="text-lg lg:text-2xl" />
        </button>
        {isSearchOpen ? (
          <Search isSearchOpen={isSearchOpen} onClose={searchClose} />
        ) : null}
        <button className="">
          <FiShoppingCart className="text-lg lg:text-2xl" />
        </button>

        <div className="xl:hidden text-purple">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
