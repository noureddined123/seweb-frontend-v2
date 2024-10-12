"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { RemoveScroll } from "react-remove-scroll";
import { IoClose } from "react-icons/io5";
import FocusLock from "react-focus-lock";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { navLinks } from "./Header";
import Button from "../Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { homeLinks, pageLinks } from "../Dropdown/FlyoutLink";
import useKey from "@/hooks/useKey";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = useCallback(() => setOpen(false), []);

  // This will close the menu when user pres Escape key
  useKey("Escape", closeMenu);

  return (
    <>
      <button onClick={openMenu} className="text-3xl  text-inherit">
        <FiMenu />
      </button>
      {open &&
        createPortal(
          <>
            <RemoveScroll>
              <FocusLock>
                <div className="fixed  z-50 inset-0 p-4">
                  <div
                    onClick={closeMenu}
                    className="backdrop absolute inset-0 z-40  bg-opacity-50 backdrop-blur-[3px]"
                  />
                  <div className="drawer bg-purple absolute top-0 bottom-0 w-full max-w-md text-white  z-50  flex flex-col right-0">
                    <header className="px-4 pt-6  pb-8   flex justify-between items-center">
                      <Link onClick={closeMenu} href="/">
                        <Image
                          width={150}
                          alt="logo"
                          height={42}
                          className="w-[120px] h-auto"
                          src="/logo.png"
                        />
                      </Link>
                      <button onClick={closeMenu}>
                        <IoClose className="text-3xl" />
                      </button>
                    </header>
                    <div className="flex-1 pt-1 px-7 overflow-auto">
                      <ul className="flex flex-col text-base font-medium  gap-6 ">
                        <Disclosure as="div" className="" defaultOpen={false}>
                          {({ open }) => (
                            <>
                              <DisclosureButton className="group gap-4   flex w-full text-start items-center justify-between ">
                                <div>
                                  <div className="font-semibold  hover:text-blue  duration-300 capitalize  focus-visible:text-blue   cap  transition-all">
                                    Home
                                  </div>
                                </div>
                                <div>
                                  {open ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                              </DisclosureButton>
                              <DisclosurePanel>
                                <div className="mt-2">
                                  <div className="space-y-3">
                                    {homeLinks.map((link) => (
                                      <Link
                                        onClick={closeMenu}
                                        href={link.href}
                                        key={link.href + link.label}
                                        className="cap group flex items-center gap-2 font-semibold capitalize  hover:underline"
                                      >
                                        <span className="h-[2px] w-4 bg-white block group-hover:bg-dark duration-500 transition-all"></span>
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>

                        <Disclosure as="div" className="" defaultOpen={false}>
                          {({ open }) => (
                            <>
                              <DisclosureButton className="group gap-4   flex w-full text-start items-center justify-between ">
                                <div>
                                  <div className="font-semibold hover:text-blue  duration-300 capitalize  focus-visible:text-blue transition-all">
                                    Pages
                                  </div>
                                </div>
                                <div>
                                  {open ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                              </DisclosureButton>
                              <DisclosurePanel>
                                <div className="mt-2">
                                  <div className="space-y-3">
                                    {pageLinks.map((link) => (
                                      <Link
                                        onClick={closeMenu}
                                        href={link.href}
                                        key={link.href + link.label}
                                        className="cap group flex items-center gap-2 font-semibold capitalize  hover:underline"
                                      >
                                        <span className="h-[2px] w-4 bg-white block group-hover:bg-dark duration-500 transition-all"></span>
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>

                        {navLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              onClick={closeMenu}
                              className="hover:text-blue cap font-semibold focus-visible:text-blue transition-all"
                              href={link.href}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <footer className="pt-2 pb-7 px-7 ">
                      <div className="md:hidden">
                        <Button className="w-full h-14">Get solution</Button>
                      </div>
                    </footer>
                  </div>
                </div>
              </FocusLock>
            </RemoveScroll>
          </>,
          document.body
        )}
    </>
  );
};
export default MobileMenu;
