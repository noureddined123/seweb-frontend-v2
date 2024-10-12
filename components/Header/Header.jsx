"use client";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import MobileMenu from "./MobileMenu";
import useScroll from "@/hooks/useScroll";
import { twMerge } from "tailwind-merge";
import Search from "@/components/Search";
import Button from "@/components/Button";
import { useState } from "react";


export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Over Ons", href: "/about" },
  { label: "Diensten", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const scrollPosition = useScroll();
  const isScroll = scrollPosition.y > 50;

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchOpen = () => setIsSearchOpen(true);
  const searchClose = () => setIsSearchOpen(false);


  return (
      <header
    className={twMerge(
      " fixed top-0 w-full h-20 bg-white  px-container lg:px-12 2xl:px-32 2xl:h-[120px] border-b  duration-300 transition-all flex items-center justify-between gap-4 z-50"
    )}
  >
  
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            width={172}
            height={46}
            alt="logo"
            className="w-24 sm:w-28 md:w-[172px] h-auto"
          />
        </Link>
      </div>
      <div>
        <ul className=" hidden lg:flex font-medium items-center gap-8 xl:gap-10 2xl:gap-16">
    
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <Link href={link.href}> {link.label} </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5 xl:gap-7">
        <button onClick={searchOpen}>
          <GoSearch className="text-2xl" />
        </button>
        {isSearchOpen ? (
          <Search isSearchOpen={isSearchOpen} onClose={searchClose} />
        ) : null}
        <div className="hidden md:flex ">
        <a href="/contact">
          <Button className="bg-rose text-white hover:border-rose hover:bg-transparent hover:text-rose">
            Offerte Aanvragen</Button>
            </a>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header >
  );
};
export default Header;
